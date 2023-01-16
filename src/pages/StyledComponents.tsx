import { Button } from '../components/styled/buttons'
import { DropDown, TextInput } from '../components/styled/inputs'
import { Link } from 'react-router-dom'

const StyledComponents = () => {
  return (
    <div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/material'>Material</Link>
        <Link to='/tailwind'>Tailwind</Link>
      </div>
      <Button
        bgColor="blue"
        textColor='white' 
        text='Primary' 
        onClick={() => alert("Primary Clicked")} 
      />
      <Button
          bgColor="white"
          textColor='blue'
          text='Secondary' 
          onClick={() => alert("Secondary Clicked")} 
      />
      <Button
          bgColor="red"
          textColor='white'
          text='Cancel' 
          onClick={() => alert("Primary Cancel Clicked")} 
      />
      <Button
          bgColor="white"
          textColor='red'
          text='Cancel' 
          onClick={() => alert("Secondary Cancel Clicked")} 
      />
      <br />
      <TextInput />
      <br />
      <DropDown />
    </div>
  )
}

export default StyledComponents
