import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef07ForwardedRefFn from './showcase/functional/02ref/BasicRef07ForwardRefFn'
import BasicRef08ForwardedRefFnWithImperativeHandle from './showcase/functional/02ref/BasicRef08ForwardRefFnWithImperativeHandle'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef08ForwardedRefFnWithImperativeHandle></BasicRef08ForwardedRefFnWithImperativeHandle>
      </ErrorBoundary>
    </>
  )
}

export default App
