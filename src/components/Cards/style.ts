import styled from 'styled-components'

import { Button } from './../Buttons/style'

interface ICard {
  img: string
}

export const Container_all = styled.div`
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
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .img {
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
  color: var(--color-brand4);

  .hora {
    display: flex;
    gap: 7px;
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
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    flex-direction: column;
    width: 30rem;

    .info_car {
      display: flex;
      flex-direction: column;
      font-size: 15px;
      padding: 1rem;
      h2 {
        font-size: 18px;
        padding-top: 1rem;
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-bottom: 1rem;
      }
      .categoria_preco {
        padding-top: 1rem;
      }
    }
  }

  button {
    display: flex;
    background: var(--color-brand1);
    justify-content: space-between;
    padding: 1rem;
    color: var(--color-brand4);
    font-size: 18px;
    svg {
      color: var(--color-brand4);
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
