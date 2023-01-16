import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { LandingPage, StyledComponents, Material, Tailwind } from './pages'
import Header from './components/styled/headers/Header'

function App (): JSX.Element {
  return (
    <>
      <Header>
        <Link to='/'>Home</Link>
        <Link to='/styled'>Styled Components</Link>
        <Link to='/material'>Material</Link>
        <Link to='/tailwind'>Tailwind</Link>
      </Header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/styled" element={<StyledComponents />} />
        <Route path="/material" element={<Material />} />
        <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
    </>
  )
}

export default App
