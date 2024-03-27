import http from 'node:http';

const slow = (next) => (req, res) => {
  setTimeout(() => next(req, res), 5000);
};

// http localhost 5173 <-!-> http localhost 9999
const cors = (next) => (req, res) => {
  const { origin } = req.headers;
  if (!origin) {
    next(req, res);
    return;
  }

  // simple solution. see note for fetch: https://fetch.spec.whatwg.org/#http-new-header-syntax
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
  };

  if (req.method !== 'OPTIONS') {
    Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
    try {
      next(req, res);
      return;
    } catch (e) {
      e.headers = { ...e.headers, ...headers };
      throw e;
    }
  }

  Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
  res.statusCode = 204;
  res.end();
};

const json = (next) => (req, res) => {
  if (!req.headers['content-type']?.startsWith('application/json')) {
    next(req, res);
    return;
  }

  const body = [];
  req.on('data', (chunk) => body.push(chunk));
  req.on('end', () => {
    try {
      req.body = JSON.parse(Buffer.concat(body).toString());
      req.bodyType = 'json';
    } catch (e) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'invalid json' }));
      return;
    }
    next(req, res);
  });
};

const handler = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.flushHeaders();

  const intervalId = setInterval(() => {
    res.write(`data: ${JSON.stringify({value: new Date().toUTCString()})}\n\n`);
  }, 5000);

  res.on('close', () => {
    console.log('close')
    clearInterval(intervalId);
  });
  res.on('end', () => {
    console.log('end')
    clearInterval(intervalId);
  });
};

// middleware
const server = http.createServer(cors(slow(json(handler))));
server.on('connection', (conn) => {
  conn.pipe(process.stdout);
});

const port = process.argv[2] ?? 9999;
server.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});