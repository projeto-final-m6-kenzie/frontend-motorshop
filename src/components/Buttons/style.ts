import styled from 'styled-components'

interface IButtonProps {
  backgroundColor?: string
  color?: string
  borderColor?: string
  width?: string
  height?: string
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  font-family: 'Inter', sans-serif;

  border-radius: 4px;
  border: 1.5px solid ${(props) => props.borderColor};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`
