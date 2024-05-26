import '../styles/MsgNotification.scss'

// import { FaCheckCircle } from 'react-icons/fa'
// import { FaExclamationCircle} from 'react-icons/fa'

import { motion } from 'framer-motion'

interface MsgProp {
    color: string
    typeMsg: string
    title: string
    subtitle: string
}

const MsgNotification = ({color, typeMsg, title, subtitle}: MsgProp) => {


  return (
    <motion.div 
    initial = {{scale: 0}}
    whileInView={{scale: 1}}

    className='container-notification' style={{borderColor: color}}>
        <div className='container-msg'>
            <h2>{title}</h2>
            <p>{subtitle}</p>   
        </div>
        <div style={{background: color}} className='time'></div>
    </motion.div>
  )
}

export default MsgNotification
