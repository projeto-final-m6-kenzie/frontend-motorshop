import styled from 'styled-components'

export const Container_carrossel = styled.div`
  display: flex;
  width: 98vw;
  padding: 2% 1%;
  height: 64vh;
  gap: 2rem;

  overflow-x: auto;
  flex: none;
  scroll-behavior: smooth;

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
