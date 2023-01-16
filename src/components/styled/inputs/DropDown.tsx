interface DropDownType {
  text: string
  options: string[]
}

const DropDown = ({ text, options }: DropDownType): JSX.Element => {
  return (
        <>
            <label>{text}</label>
            <select>
              {
                options.map(option => {
                  return (
                    <option key={option}>{option}</option>
                  )
                })
              }
            </select>
        </>
  )
}

export default DropDown
