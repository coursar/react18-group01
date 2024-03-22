import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicCallback03ReactMemo from './showcase/functional/07callback/BasicState03ReactMemo'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicCallback03ReactMemo></BasicCallback03ReactMemo>
      </ErrorBoundary>
    </>
  )
}

export default App
