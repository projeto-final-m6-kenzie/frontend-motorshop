import styled from 'styled-components'

export const Container_carrossel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .mySwiper {
    z-index: 0;
    height: 26rem;
    margin: 0 3em;
    @media (min-width: 1500px) {
      height: 31rem;
    }
  }
  .swiper-slide {
    display: flex;
    z-index: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`
