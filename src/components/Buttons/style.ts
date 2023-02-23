import styled from 'styled-components'

interface IButtonProps {
  backgroundColor?: string
  color?: string
  borderColor?: string
  width?: string
  height?: string
  borderLeft?: string
  marginLeft?: string
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // margin-left: ${(props) => props.height};

  font-family: 'Inter', sans-serif;

  padding: 10px;

  border-radius: 4px;
  border: 1.5px solid ${(props) => props.borderColor};
  border-left: ${(props) => props.borderLeft};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`
