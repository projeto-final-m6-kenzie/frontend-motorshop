import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { RouterContext } from '../../contexts/RouterContext'
import { IContext } from '../../interfaces'
import api from '../../services/api'
import { Button } from '../Buttons/style'
import { Form } from './styles'

const schema = yup.object().shape({
  announcementType: yup.string().required(),
  title: yup.string().required('Campo obrigatório'),
  year: yup.string().required('Campo obrigatório'),
  km: yup.string().required('Campo obrigatório'),
  price: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
  vehicleType: yup.string().required(),
  coverPhoto: yup
    .object()
    .required('Campo obrigatório')
    .transform(function (value) {
      // object
      return { url: value }
    }),
  images: yup.string().optional(),
})

// Modal.setAppElement("#index");

const CriarAnuncio = () => {
  const { openModal, closeModal, modalIsOpen, setNewVehicle } = useContext<IContext>(RouterContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })

  const createAd = async (data: any) => {
    api
      .post('/vehicles', data)
      .then((res) => setNewVehicle(res.data))
      .then(() => closeModal())
  }

  const style = {
    content: {
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      width: '30%',
      height: '90vh',
      margin: 'auto',
    },
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={style}
        shouldFocusAfterRender={true}
      >
        <Form onSubmit={handleSubmit(createAd)}>
          <div className='buttonfechar'>
            <h1>Criar anúncio</h1>
            <button onClick={closeModal}>x</button>
          </div>
          <h4>Tipo de anúncio</h4>
          <div id='input-options-1'>
            <div className='radio'>
              <label>
                <input type='radio' value='Sale' defaultChecked {...register('announcementType')} />
                <span>Venda</span>
              </label>
            </div>
            <div className='radio'>
              <label>
                <input type='radio' value='leilao' {...register('announcementType')} />
                <span>Leilão</span>
              </label>
            </div>
          </div>

          <h4>Informações do veiculo</h4>

          <label htmlFor='title'>Título</label>
          <input placeholder='Digitar título' {...register('title')} />

          <label htmlFor='year'>Ano</label>
          <input placeholder='Digitar ano' {...register('year')} />

          <label htmlFor='km'>Quilometragem</label>
          <input placeholder='0' {...register('km')} />

          <label htmlFor='price'>Preço</label>
          <input placeholder='Digitar preço' {...register('price')} />

          <label htmlFor='description'>Descrição</label>
          <textarea placeholder='Digitar descrição' {...register('description')} />

          <span>Tipo de veículo</span>
          <div id='input-options-2'>
            <div className='radio'>
              <label>
                <input type='radio' value='Car' defaultChecked {...register('vehicleType')} />
                <span>Carro</span>
              </label>
            </div>
            <div className='radio'>
              <label>
                <input type='radio' value='Motobike' {...register('vehicleType')} />
                <span>Moto</span>
              </label>
            </div>
          </div>

          <label htmlFor='coverPhoto'>Imagem da capa</label>
          <input placeholder='Inserir URL da imagem' {...register('coverPhoto')} />
          <div className='container_button'>
            <Button
              borderColor='#E9ECEF'
              backgroundColor='#E9ECEF'
              width='6rem'
              onClick={closeModal}
              type='button'
            >
              Cancelar
            </Button>
            <Button
              backgroundColor='#4529E6'
              width='8rem'
              height='3rem'
              color='#ffffff'
              type='submit'
            >
              Criar anúncio
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

const EditarAnuncio = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [imgList, setImgList] = useState([{ imgurl: '' }])

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })

  const createAd = async (data: any) => {
    return
  }

  const style = {
    content: {
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      width: '30%',
      height: '90vh',
      margin: 'auto',
    },
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  }

  return (
    <div>
      <button onClick={openModal}>Abrir modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={style}
        shouldFocusAfterRender={true}
      >
        <Form onSubmit={handleSubmit(createAd)}>
          <div className='buttonfechar'>
            <h1>Criar anúncio</h1>
            <button onClick={closeModal}>x</button>
          </div>
          <h4>Tipo de anúncio</h4>
          <div id='input-options-1'>
            <div className='radio'>
              <label>
                <input
                  type='radio'
                  value='Venda'
                  defaultChecked
                  {...register('announcementType')}
                />
                <span>Venda</span>
              </label>
            </div>
            <div className='radio'>
              <label>
                <input type='radio' value='leilao' {...register('announcementType')} />
                <span>Leilão</span>
              </label>
            </div>
          </div>

          <h4>Informações do veiculo</h4>

          <label htmlFor='title'>Título</label>
          <input placeholder='Digitar título' {...register('title')} />

          <label htmlFor='year'>Ano</label>
          <input placeholder='Digitar ano' {...register('year')} />

          <label htmlFor='km'>Quilometragem</label>
          <input placeholder='0' {...register('km')} />

          <label htmlFor='price'>Preço</label>
          <input placeholder='Digitar preço' {...register('price')} />

          <label htmlFor='description'>Descrição</label>
          <textarea placeholder='Digitar descrição' {...register('description')} />

          <span>Tipo de veículo</span>
          <div id='input-options-2'>
            <div className='radio'>
              <label>
                <input type='radio' value='carro' defaultChecked {...register('vehicleType')} />
                <span>Carro</span>
              </label>
            </div>
            <div className='radio'>
              <label>
                <input type='radio' value='moto' {...register('vehicleType')} />
                <span>Moto</span>
              </label>
            </div>
          </div>

          <label htmlFor='coverPhoto'>Imagem da capa</label>
          <input placeholder='Inserir URL da imagem' {...register('coverPhoto')} />
          <div className='container_button'>
            <Button
              borderColor='#E9ECEF'
              backgroundColor='#E9ECEF'
              width='6rem'
              onClick={closeModal}
              type='button'
            >
              cancelar
            </Button>
            <Button
              backgroundColor='#4529E6'
              width='8rem'
              height='3rem'
              color='#ffffff'
              type='submit'
            >
              Criar anúncio
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export { CriarAnuncio, EditarAnuncio }
