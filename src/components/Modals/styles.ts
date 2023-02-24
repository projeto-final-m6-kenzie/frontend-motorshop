import styled from 'styled-components'

export const Form = styled.form`
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
    height: 70px;
    position: relative;
    width: 120px;
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
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .radio label input[type='radio']:checked {
    background-color: red;
  }
  .radio label input[type='radio']:checked + span {
    color: #ffffff;
  }
`
