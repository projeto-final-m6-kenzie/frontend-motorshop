import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 20rem;
  flex-direction: column;
  background-color: var(--color-brand1);
`
export const Container_all = styled.div`
  display: flex;
  flex-direction: column;

  .container_anuncios {
    display: flex;
    flex-direction: column;
    padding-top: 15rem;
  }
`

export const Container_Cards = styled.div`
  display: flex;
  width: 98vw;
  gap: 1rem;
  padding: 5% 5% 2%;
`
export const Anunciante = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  background: white;
  padding: 5rem;
  margin: 5rem;
  gap: 2rem;
  border-radius: 4px;

  .perfil {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .icon {
      display: flex;
      justify-content: center;
      color: var(--color-brand4);
      background: var(--color-brand1);
      width: 6rem;
      height: 6rem;
      align-items: center;
      border-radius: 50%;
    }
  }
`
