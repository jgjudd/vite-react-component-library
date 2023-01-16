import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LandingPage, StyledComponents, Material, Tailwind } from './pages'

function App (): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/styled" element={<StyledComponents />} />
      <Route path="/material" element={<Material />} />
      <Route path="/tailwind" element={<Tailwind />} />
    </Routes>
  )
}

export default App
