import { Link } from 'react-router-dom'

const Tailwind = (): JSX.Element => {
  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/styled'>Styled Components</Link>
        <Link to='/material'>Material UI</Link>
      </div>
      Tailwind
    </div>
  )
}

export default Tailwind
