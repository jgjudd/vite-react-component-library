import { Button } from '../components/styled/buttons'
import { DropDown, TextInput } from '../components/styled/inputs'
import RadioGroup from '../components/styled/inputs/RadioGroup'

const StyledComponents = (): JSX.Element => {
  return (
    <div>
      <div>
        <h4>Buttons</h4>
        <Button
          bgColor="blue"
          textColor='white'
          text='Primary'
          onClick={() => { alert('Primary Clicked') }}
        />
        <Button
            bgColor="white"
            textColor='blue'
            text='Secondary'
            onClick={() => { alert('Secondary Clicked') }}
        />
        <Button
            bgColor="red"
            textColor='white'
            text='Cancel'
            onClick={() => { alert('Primary Cancel Clicked') }}
        />
        <Button
            bgColor="white"
            textColor='red'
            text='Cancel'
            onClick={() => { alert('Secondary Cancel Clicked') }}
        />
      </div>
      <br />
      <div>
        <h4>Inputs</h4>
        <TextInput label="This is a text label" />
        <br />
        <DropDown text="How many do you want?" options={['1', '5', '10', '15', '20', '50+']} />
        <br />
        <RadioGroup text="Did you vote?" choices={['yes', 'no', 'maybe']} />
      </div>
    </div>
  )
}

export default StyledComponents
