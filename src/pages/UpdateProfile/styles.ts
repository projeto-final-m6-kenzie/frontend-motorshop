import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  font-family: 'Inter', sans-serif;

  h3 {
    font-weight: 600;
    margin-bottom: 2rem;
  }

  p {
    margin: 1rem 0;
    font-weight: 500;
  }

  label {
    padding: 0.5rem 0;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  input,
  textarea {
    height: 3rem;
    width: 20vw;

    border: 2px solid var(--color-grey6);
    border-radius: 5px;

    padding: 1.8rem 1rem;
    margin-bottom: 1rem;

    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

  button {
    margin: 1rem 0;
    padding: 1rem 0;
    width: 100px;

    font-family: 'Inter', sans-serif;

    font-size: 1rem;
    font-weight: 600;

    background-color: var(--color-brand1);
    color: var(--color-whiteFixed);

    border: none;
    border-radius: 5px;
  }

  textarea {
    height: 100px;
    padding-top: 1rem;
  }

  .cancelar {
    background-color: var(--color-grey7);
    color: var(--color-grey0);
  }

  .position-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`

export default Form
