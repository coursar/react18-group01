import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicContext01Debug from './showcase/functional/08context/BasicContext01Debug'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicContext01Debug></BasicContext01Debug>
      </ErrorBoundary>
    </>
  )
}

export default App
