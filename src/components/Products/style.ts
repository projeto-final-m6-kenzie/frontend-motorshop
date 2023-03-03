import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: absolute;
  margin: 4rem 6rem;

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
export const ImgCar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 2.5rem;

  img {
    width: 60%;
  }
`
export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    color: #868e96;
    font-size: 12px;
  }
`

export const InfoCar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  border-radius: 4px;
  padding: 1.5rem;

  .price_info {
    display: flex;
  }
`

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fdfdfd;
  border-radius: 4px;
  padding: 1.5rem;
`

export const Container_comentarios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fdfdfd;
  border-radius: 4px;
  padding: 1.5rem;
`

export const Container_input = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fdfdfd;
  padding: 1.5rem;
  border-radius: 4px;
`
