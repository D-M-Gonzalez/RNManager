import React from 'react'
import ImageUploadForm from './ImageUploadForm'
import multiform from '../../data/multiform'

export default function UploadMultiForm(props) {
  return (
      <>
      {Array.from(multiform).map((el)=>{
          return (
              <ImageUploadForm
                key={el.index}
                helper={el.helper}
                index={el.index}
                button={el.button}
                upload={props.upload}
                item={props.item}
              />
          )
      })}
    </>
  )
}
