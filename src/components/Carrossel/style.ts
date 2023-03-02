import styled from 'styled-components'

export const Container_carrossel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .mySwiper {
    height: 26rem;
    @media (min-width: 1500px) {
      height: 31rem;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  /* padding: 1rem; */
  flex-direction: column;

  .swiper-slide {
    display: flex;
  }
`
