import { useEffect, useState } from 'react'
import Gift from '../../../assets/gift-box.gif'

export function OpenGift() {
  const [ show, setShow ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 4100)
  }, [])

  return (
    <div className='absolute scale-150'>
      {<img src={Gift} alt="" className={`${show || 'hidden'}`} />}
    </div>
  )
}