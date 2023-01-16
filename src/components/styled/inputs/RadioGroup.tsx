interface RadioGroupTypes {
  text: string
  choices: string[]
}

const RadioGroup = ({ text, choices }: RadioGroupTypes): JSX.Element => {
  return (
    <>
      <label>{text}</label>
      {
        choices.map(option => {
          return (
            <>
              <label htmlFor={text}>{option}</label>
              <input type="radio" name={text} value={option} />
            </>
          )
        })
      }
    </>
  )
}

export default RadioGroup
