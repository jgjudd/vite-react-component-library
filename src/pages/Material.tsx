import { Link } from 'react-router-dom'

const Material = (): JSX.Element => {
  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/styled'>Styled Components</Link>
        <Link to='/tailwind'>Tailwind</Link>
      </div>
      Material
    </div>
  )
}

export default Material
