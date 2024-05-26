import { ChangeEvent, useState } from 'react'
import axios, { AxiosError } from 'axios';

import Button from '../components/Button'
import Input from '../components/Input'
import '../styles/Login&SignPage.scss'

import { MdOutlineMailOutline } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';


interface FormState {
  [key: string]: string
}

const LoginPage = () => {

  const navigate = useNavigate()

  const [ form, setForm ] = useState<FormState>({
    email: '',
    password: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (e) => {
      e.preventDefault()

      try {
       const response = await axios.post('http://localhost:3000/auth/login', form)
       const token = response.data.token
       document.cookie = `userToken=${token};`;
       navigate('/listUsers')
        
      } catch (err: unknown) {
        const response = (err as AxiosError).response?.data
        console.log(response)
      }
      
  }


  return (
    <section className='body'>
      <h1><span>Bem-Vindo </span> <br /> a ShearSmart.</h1>
        <form method='post' onSubmit={handleSubmit}>
            <Input onChange={handleInput} value={form.email} name='email' icon={<MdOutlineMailOutline />} type='email' placeholder='Email'/>
            <Input onChange={handleInput} value={form.password} name='password' icon={<GrSecure />} type='password' placeholder='Senha'/>
            <p className='p-have-account'>Já possui uma conta? <Link to='/register'>Cadastrar</Link> </p>
            <Button content='Entrar'/>
        </form>
    </section>
  )
}

export default LoginPage
