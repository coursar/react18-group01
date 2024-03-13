import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicRef12Bootstrap from './showcase/functional/02ref/BasicRef12Bootstrap'


function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicRef12Bootstrap></BasicRef12Bootstrap>
      </ErrorBoundary>
    </>
  )
}

export default App
