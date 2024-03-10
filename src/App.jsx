import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef09Case from './showcase/functional/BasicRef09Case'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef09Case></BasicRef09Case>
      </ErrorBoundary>
    </>
  )
}

export default App
