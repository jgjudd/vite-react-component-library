interface TextType {
  label: string
}
const TextInput = ({ label }: TextType): JSX.Element => {
  return (
        <>
            <label>{label}</label>
            <input type="text" />
        </>
  )
}

export default TextInput
