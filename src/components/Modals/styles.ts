import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Inter', sans-serif;
  h1 {
    font-size: 18px;
  }
  .buttonfechar {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      background: none;
      font-size: 18px;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
  }
  .container_button {
    display: flex;
    padding-top: 2rem;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;
  }
  input {
    height: 2.5rem;
    border: 1px solid #adb5bd;
    padding: 1rem;
  }

  .input-option356 {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .input-option356:after {
    content: '';
    clear: both;
  }

  .radio {
    border: 1px solid #ccc;
    box-sizing: border-box;
    float: left;
    height: 2.8rem;
    border-radius: 8px;
    position: relative;
    width: 10rem;
  }

  .radio + .radio {
    margin-left: 25px;
  }

  .radio label {
    background: #fff no-repeat center center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
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
  }
  .radio label input[type='radio']:checked + span {
    color: #ffffff;
  }
`
