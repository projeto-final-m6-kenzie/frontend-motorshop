import styled from 'styled-components'

interface IHeaderComponentProps {
  height?: string
}

export const HeaderComponent = styled.header<IHeaderComponentProps>`
  height: ${(props) => props.height};
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ced4da;
  padding: 0 5rem;

  background-color: var(--color-whiteFixed);

  a {
    text-decoration: none;
  }
`

export const TitleDiv = styled.div`
  display: flex;
`

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  align-items: center;
`

export const ButtonsRightDiv = styled.div`
  display: flex;
  border-left: 2px solid #ced4da;
  height: 100%;
  align-items: center;
`

export const ButtonsLeftDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

export const H1 = styled.h1`
  font-family: 'Inter', sans-serif;
  color: #30007d;
  background: ${(props) =>
    props.color || 'linear-gradient(to right, var(--color-grey0) 0%, var(--color-brand1) 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    font-size: 23px;
  }
`

export const H2 = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  color: #30007d;
  align-self: flex-end;
  margin-bottom: 2.5px;
  margin-left: 15px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-brand4);
  background-color: var(--color-brand1);
  width: 100%;
  height: 70vh;
`

export const ContainerFixed = styled.div`
  position: relative;
  right: 0;
  left: 0;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-brand1);

  width: 100%;
  height: 70vh;
`

export const Container_info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  gap: 2rem;
  width: 50%;
  color: var(--color-whiteFixed);

  h1 {
    text-align: center;
    font-size: calc(2vh + 2vw);
  }

  span {
    font-size: 1.2rem;
    text-align: center;
  }

  .buttons {
    display: flex;
    gap: 2rem;
  }
`
