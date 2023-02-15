import styled from 'styled-components'

interface IHeaderComponentProps {
  height?: string
}

export const HeaderComponent = styled.header<IHeaderComponentProps>`
  height: ${(props) => props.height};
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #ced4da;
`

export const TitleDiv = styled.div`
  display: flex;
`

export const ButtonsDiv = styled.div`
  display: flex;
  height: 100%;
`

export const ButtonsRightDiv = styled.div`
  display: flex;
  border-left: 2px solid #ced4da;
  height: 100%;
  align-items: center;
`

export const H1 = styled.h1`
  font-family: 'Inter', sans-serif;
  color: #30007d;
`
export const H2 = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  color: #30007d;
  align-self: flex-end;
  margin-bottom: 2.5px;
  margin-left: 15px;
`
