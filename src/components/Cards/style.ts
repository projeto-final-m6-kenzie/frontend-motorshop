import styled from 'styled-components'

import { Button } from './../Buttons/style'

interface ICard {
  img: string
}

export const Container_all = styled.div<ICard>`
  display: flex;
  flex-direction: column;
  width: 23rem;
  .categoria_preco {
    display: flex;
    gap: 4px;
    span {
      margin-left: 3rem;
    }
  }
  .card_car {
    /* background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;

    .img {
      height: 50px;
      background: var(--color-brand4);
    }
  }
  .perfil {
    width: 100%;
  }
`

export const Container = styled.div<ICard>`
  display: flex;
  flex-direction: column;
  color: var(--color-whiteFixed);
  height: 100%;

  .hora {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    min-width: 3rem;
    border-radius: 100px;
    color: var(--color-grey0);

    .icons-hora {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.2rem 0.5rem;
      border-radius: 100px;
      min-width: 2rem;
      background: white;
    }
    #icon-hour {
      color: var(--color-brand1);
      height: 100%;
    }
  }
  .buttonsCarrossel {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
    background-color: var(--color-brand1);
  }

  .card {
    display: flex;
    background-image: url(${(props) => props.img});
    background-position: center;
    min-width: 52vw;
    min-height: 30vh;
    background-repeat: no-repeat;
    flex-direction: column;
    border-radius: 5px 5px 0 0;

    .info_car {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      padding: 1rem 3rem;
      h2 {
        font-size: 21px;
        font-weight: 500;
        padding-top: 1rem;
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-bottom: 1rem;
        font-size: 13px;
        font-weight: 300;
        p {
          font-size: 1rem;
          font-weight: 200;
        }
      }
      .categoria_preco {
        padding-top: 0.5rem;
      }
    }
  }

  button {
    display: flex;
    background: var(--color-brand1);
    justify-content: space-between;
    padding: 1.5rem 3rem;
    color: var(--color-whiteFixed);
    font-size: 20px;
    border: none;
    border-radius: 0 0 5px 5px;
    svg {
      color: var(--color-whiteFixed);
      font-size: 150%;
    }
  }
  .categoria_preco {
    display: flex;
    gap: 4px;
    span {
      margin-left: 13rem;
    }
  }
`

export const Perfil_container = styled.div`
  display: flex;
  align-items: center;
  border: none;
  gap: 0.5rem;

  .icon {
    background-color: var(--color-brand1);
    border-radius: 50%;
    color: var(--color-brand4);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 13px;
    margin: 0;
    padding: 0;
    border: none;
  }
  .name {
    background: none;
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    border: none;
  }
`

export const Container_categoria = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-brand4);
  color: var(--color-brand1);
  width: 3rem;
  border-radius: 4px;
  font-size: 12px;
  height: 1.5rem;
`
