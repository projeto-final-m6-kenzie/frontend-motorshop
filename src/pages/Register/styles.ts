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
  margin-top: 1rem;
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

  button {
    height: 50px;
    background: var(--color-brand1);
    color: var(--color-whiteFixed);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
  }

  textarea {
    height: 90px;
    margin-bottom: 0;
  }
  p,
  span {
    margin: 1.8rem 0;
    font-weight: 500;
  }

  label {
    font-weight: 600;
  }

  /* input:focus {
    border-color: blue;
  } */

  .input-options-1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1rem;
    gap: 1rem;
    input {
      width: 100%;
    }
  }

  .radio {
    border: 1px solid #ccc;
    box-sizing: border-box;
    float: left;
    height: 2.8rem;
    border-radius: 8px;
    position: relative;
    width: 11rem;
  }

  .radio label {
    background: #fff /* no-repeat center center */;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    border: solid 1px var(--color-grey7);
    border-radius: 5px;
  }

  .radio label span {
    z-index: 1;
  }
  .radio label input[type='radio'] {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .radio label input[type='radio']:checked {
    background-color: var(--color-brand1);
    border-radius: 8px;
  }
  .radio label input[type='radio']:checked + span {
    color: #ffffff;
  }
`
