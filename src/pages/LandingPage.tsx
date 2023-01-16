import { Link } from 'react-router-dom'
import Card from '../components/styled/cards/Card'

const LandingPage = (): JSX.Element => {
  return (
        <div style={{ display: 'flex' }}>
          <Link to='/styled'>
            <Card>
              Styled Components
            </Card>
          </Link>
          <Link to='/material'>
            <Card>
              Material UI
            </Card>
          </Link>
          <Link to='/tailwind'>
            <Card>
              Tailwind
            </Card>
          </Link>
        </div>
  )
}

export default LandingPage
