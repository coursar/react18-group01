import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef09ForwardedRefClassBase from './showcase/functional/02ref/BasicRef09ForwardRefClassBase'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef09ForwardedRefClassBase></BasicRef09ForwardedRefClassBase>
      </ErrorBoundary>
    </>
  )
}

export default App
