import { strict } from 'assert'
import styled from 'styled-components'

interface IButtonProps {
  backgroundColor?: string
  color?: string
  borderColor?: string
  width?: string
  height?: string
  borderLeft?: string
  marginLeft?: string
  fontSize?: string
  borderLine?: string
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // margin-left: ${(props) => props.height};

  font-family: 'Inter', sans-serif;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;

  padding: 30px;

  border-radius: 4px;
  border: ${(props) => props.borderLine || '1.5px'} solid ${(props) => props.borderColor};
  border-left: ${(props) => props.borderLeft};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`
