import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: var(--color-grey8);

  overflow-y: hidden;
  width: 98vw;
  gap: 1rem;
  padding: 5% 5% 2%;
  position: relative;
  z-index: 0;
`
export const Container_all = styled.div`
  display: flex;
  flex-direction: column;

  /* .container_anuncios {
    display: flex;
    flex-direction: column;
    padding-top: 15rem;
  } */
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
  height: max-content;
  max-width: 1400px;
  position: relative;
  z-index: 1;
  top: 5.5rem;
  background: var(--color-whiteFixed);
  /* position: absolute;
  background: white;
  padding: 5rem;
  margin: 5rem; */
  gap: 2rem;
  padding: 2rem;
  border-radius: 5px;
  border: solid 2px var(--color-grey8);

  .perfil {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .icon {
      display: flex;
      justify-content: center;
      color: var(--color-whiteFixed);
      background-color: var(--color-brand1);
      align-items: center;
      border-radius: 50%;
      font-size: 300%;
      width: 13vh;
      height: 13vh;
    }
  }
  .rows {
    width: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: row;
  }
  button {
    height: 7vh;
  }
`
export const BoxGap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
`

export const HomeDiv = styled.div`
  width: 100vw;
  .mySwiper {
    z-index: 0;
    height: 26rem;
    @media (min-width: 1500px) {
      height: 31rem;
    }
  }
  .swiper-slide {
    display: flex;
    z-index: 0;
  }
`
export const Titulo = styled.h3`
  font-size: 1.8rem;
  font-family: 'Lexend', sans-serif;
  padding: 6% 3% 0;
`
export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-grey8);
`
export const Container_header = styled.div`
  display: flex;
  height: 30rem;
`

export const BoxZ = styled.div`
  position: relative;
  z-index: 0;
  background-color: var(--color-brand1);
  width: 100%;
  height: 35vh;
  margin-bottom: 10rem;
`
