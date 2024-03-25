import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRedux07Toolkit from './showcase/functional/09redux/BasicRedux07Toolkit'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRedux07Toolkit></BasicRedux07Toolkit>
      </ErrorBoundary>
    </>
  )
}

export default App
