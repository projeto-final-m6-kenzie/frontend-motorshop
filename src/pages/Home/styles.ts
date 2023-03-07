import styled from 'styled-components'

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
`

export const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  width: 98vw;
  gap: 1rem;
  padding: 5% 5% 2%;
`

export const Container_header = styled.div`
  display: flex;
  height: 30rem;
`
