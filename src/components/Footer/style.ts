import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 2rem; */
  padding: 2rem 3rem;
  width: 100vw;
  background-color: var(--color-grey0);
  color: var(--color-grey9);

  button {
    font-size: 1rem;
    width: 40px;
    height: 40px;
    border: solid var(--color-grey1) 5px;
    text-align: center;
    background-color: var(--color-grey1);
    color: var(--color-whiteFixed);
  }

  p {
    font-size: 0.75rem;
  }
`
