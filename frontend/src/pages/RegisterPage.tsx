// COMPONENTS
import MsgNotification from '../components/MsgNotification';
import Button from '../components/Button'
import Input from '../components/Input'

// STYLES
import '../styles/Login&SignPage.scss'

// OTHERS
import { ModalMsgContext, ModalProvider } from '../context/MsgContext';
import { ChangeEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface FormState {
  [key: string]: string
}

 const LoginPage = () => {

  const navigate = useNavigate()

  const {msgModal, handleModal} = useContext(ModalMsgContext)

  const [ form, setForm ] = useState<FormState>({
    email: '',
    name: '',
    password: '',
    confirmpassword: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }


  const handleSubmit = async (e) => {
      e.preventDefault()

      if(form.email == '' || form.name == '' ||
         form.password == '' || form.confirmpassword == '') {
          handleModal()
          return
      }

    try {
      await axios.post('http://localhost:3000/auth/register', form)
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <ModalProvider>
      <section className='body'>

          <h1><span>Bem-Vindo </span> <br /> a ShearSmart.</h1>
          <form onSubmit={handleSubmit} method='post'>
              <div className='div-two-inputs'>
                <Input onChange={handleInput} value={form.email} name='email' type='email' placeholder='Email'/>
                <Input onChange={handleInput} value={form.name} name='name' type='name' placeholder='Nome'/>
              </div>
              <Input onChange={handleInput} value={form.password} name='password' type='password' placeholder='Senha'/>
              <Input onChange={handleInput} value={form.confirmpassword} name='confirmpassword' type='password' placeholder='Confirmar Senha'/>
              <p className='p-have-account'>Já possui uma conta? <Link to='/login'>Login</Link> </p>
              <Button content='Cadastrar'/>
          </form>

          {msgModal && <MsgNotification title={'Preencha os Campos'} 
          subtitle={'Algum dos campos estão vazio'}  
          color={'#D9343A'} 
          typeMsg={'error'}/>}

      </section>
    </ModalProvider>
  )
}

export default LoginPage
