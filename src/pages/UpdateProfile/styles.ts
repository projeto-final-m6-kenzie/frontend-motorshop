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

  input,
  textarea {
    border: solid 2px var(--color-grey7);
    border-radius: 5px;
    height: 2.8rem;
    padding: 1.5rem;
    margin: 0.5rem 0 1.5rem;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

  textarea {
    height: 90px;
    margin-bottom: 30px;
  }

  .input-options-2 {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: max-content;
  }

  button {
    height: 50px;
    margin: 1rem;
    background: var(--color-brand1);
    color: var(--color-whiteFixed);
    font-family: 'Inter', sans-serif;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 5px;
  }
  #cancelar {
    background-color: var(--color-grey5);
    color: var(--color-grey0);
    font-weight: 600;
  }

  h1 {
    font-size: 1.2rem;
    margin: 1rem 0;
    font-weight: 500;
  }

  div {
    text-align: right;
    height: 30px;
  }

  p {
    text-align: left;
    margin: 1rem 0 2rem;
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

  label {
    font-weight: 600;
  }
`
