import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicCallback02ReactMemo from './showcase/functional/07callback/BasicState02ReactMemo'


function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicCallback02ReactMemo></BasicCallback02ReactMemo>
      </ErrorBoundary>
    </>
  )
}

export default App
