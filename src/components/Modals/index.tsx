import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import api from '../../services/api'
import { GlobalStyle } from '../../styles/global'
import { Form } from './styles'

const schema = yup.object().shape({
  announcementType: yup.string().required(),
  title: yup.string().required('Campo obrigatório'),
  year: yup.string().required('Campo obrigatório'),
  km: yup.string().required('Campo obrigatório'),
  price: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
  vehicleType: yup.string().required(),
  coverPhoto: yup.string().required('Campo obrigatório'),
  images: yup.string().optional(),
})

// Modal.setAppElement("#index");

const index = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [imgList, setImgList] = useState([{ imgurl: '' }])

  // const handleImgUrlChange = (e, index: number) => {
  //   const { name, value } = e.target
  //   const list = [...imgList]
  //   list[index][name] = value
  //   setImgList(list)
  // }

  // const handleImgAdd = () => {
  //   setImgList([...imgList, { imgurl: '' }])
  // }

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
    console.log(data)
    return
  }

  const style = {
    content: {
      backgroundColor: '#9e9edb',
      borderRadius: '30px',
      width: '30%',
      height: 'fit-content',
      margin: 'auto',
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
          <h1>Criar anúncio</h1>
          <span>Tipo de anúncio</span>
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
          <br />

          <label htmlFor='title'>Título</label>
          <input placeholder='Digitar título' {...register('title')} />
          <br />

          <label htmlFor='year'>Ano</label>
          <input placeholder='Digitar ano' {...register('year')} />
          <br />

          <label htmlFor='km'>Quilometragem</label>
          <input placeholder='0' {...register('km')} />
          <br />

          <label htmlFor='price'>Preço</label>
          <input placeholder='Digitar preço' {...register('price')} />
          <br />

          <label htmlFor='description'>Descrição</label>
          <textarea placeholder='Digitar descrição' {...register('description')} />

          <br />

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
          <br />

          <label htmlFor='coverPhoto'>Imagem da capa</label>
          <input placeholder='Inserir URL da imagem' {...register('coverPhoto')} />

          <br />
          <span>CAMPO DA SEGUNDA FOTO E LÓGICA</span>
          <br />
          <button type='button'>Adicionar campo para imagem da galeria</button>
          <br />

          <button onClick={closeModal} type='button'>
            close
          </button>
          <button type='submit'>Criar anúncio</button>
        </Form>
      </Modal>
    </div>
  )
}

export default index
