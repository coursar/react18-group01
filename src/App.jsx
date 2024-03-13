import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef13FormValidation from './showcase/functional/02ref/BasicRef13FormValidation'


function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef13FormValidation></BasicRef13FormValidation>
      </ErrorBoundary>
    </>
  )
}

export default App
