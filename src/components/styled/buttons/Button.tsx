import styled from 'styled-components'

type ButtonProps = {
    bgColor: string, 
    text: string,
    textColor?: string,
    onClick: () => void
}

const Button = ({
    bgColor, 
    text,  
    textColor,
    onClick }: ButtonProps): JSX.Element => {

    const StyledButton = styled.button`
        background-color: ${bgColor || 'blue'};
        color: ${textColor || 'white'};
        border: $1px solid ${bgColor || 'blue'};
        margin: 5px;

        &:hover {
            background-color: ${textColor || 'white'};
            color: ${bgColor || 'blue'};
            border: $1px solid ${textColor || 'blue'};
        }
    `
    
    return (
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button
