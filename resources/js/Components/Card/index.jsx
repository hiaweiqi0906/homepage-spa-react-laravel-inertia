import React from 'react'
import './index.css'

export default function Card({style, ...props}) {
  return (
    <div style={style} className='card'>{props.children}</div>
  )
}
