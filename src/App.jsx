import { useRef } from 'react'
import './App.css'
import { ErrorBoundary, ErrorOnRender } from './components/shared/ErrorBoundary' // from './components/shared/ErrorBoundary/index.js(ts)'
import BasicEffect02EffectVSLayout from './showcase/functional/05effect/BasicEffect02EffectVSLayout'


function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>main ooops!</div>}>
        <BasicEffect02EffectVSLayout></BasicEffect02EffectVSLayout>
      </ErrorBoundary>
    </>
  )
}

export default App
