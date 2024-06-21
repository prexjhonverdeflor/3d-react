import React, { useEffect } from 'react'
import { preLoaderAnim } from '../../utils/loader';
import './Preloader.css'

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);


  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span id='text1'>Design,</span>
            <span id='text2'>Align,</span>
            <span id='text3'>Refine.</span>
        </div>
    </div>
  )
}

export default Preloader