import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 100vw;
  gap: 2rem;
  background-color: var(--color-grey9);
  Header {
    background-color: var(--color-whiteFixed);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: var(--color-whiteFixed);
  padding: 3.5rem;
  margin: 5rem 0;
  border: none;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  h1 {
    margin-bottom: 2rem;
    font-weight: 500;
  }
  div {
    text-align: right;
    height: 30px;
  }
  p {
    margin: -20px 0 1rem;
    color: var(--color-alert1);
  }

  .info {
    color: var(--color-grey2);
    margin: 2.5rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 400;
  }
  #recuperate {
    background: transparent;
    border: none;
    color: var(--color-grey2);
    position: relative;
    top: -30px;
    font-size: 1rem;
    font-weight: 600;
  }
  input {
    border: solid 2px var(--color-grey7);
    border-radius: 5px;
    height: 2.8rem;
    padding: 1.5rem;
    margin: 0.5rem 0 2rem;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

  button {
    height: 50px;
    background: var(--color-brand1);
    color: var(--color-whiteFixed);
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
  }
  .cadastro {
    color: black;
    background-color: var(--color-grey9);
    border: solid 2px var(--color-grey5);
  }

  label {
    font-weight: 600;
  }
`
