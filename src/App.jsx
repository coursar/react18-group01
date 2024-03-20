import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicEffect04 from './showcase/functional/05effect/BasicEffect04'


function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicEffect04></BasicEffect04>
      </ErrorBoundary>
    </>
  )
}

export default App
