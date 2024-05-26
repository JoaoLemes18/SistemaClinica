import '../styles/Input.scss'

interface InputProps {
  icon?: any
  props?: any
  placeholder?: string
  onChange?: any
  value: string
  name?: string
  type: string
}

const Input = ({...props}: InputProps) => {

  return (
      <input {...props} />
  )
}

export default Input
