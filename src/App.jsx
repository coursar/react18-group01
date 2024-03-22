import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicCallback04ReactMemo from './showcase/functional/07callback/BasicState04ReactMemo'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicCallback04ReactMemo></BasicCallback04ReactMemo> 
      </ErrorBoundary>
    </>
  )
}

export default App
