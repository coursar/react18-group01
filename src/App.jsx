import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRedux11ToolkitSSE from './showcase/functional/09redux/BasicRedux11ToolkitSSE'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRedux11ToolkitSSE></BasicRedux11ToolkitSSE>
      </ErrorBoundary>
    </>
  )
}

export default App
