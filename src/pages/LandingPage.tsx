import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <Link to='/styled'>Styled Components</Link>
            <Link to='/material'>Material UI</Link>
            <Link to='/tailwind'>Tailwind</Link>
        </div>
    )
}

export default LandingPage
