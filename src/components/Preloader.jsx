import React, { useEffect } from 'react'
import { preLoaderAnim } from '../utils/loader';
import './Preloader.css'

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);


  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Design,</span>
            <span>Align,</span>
            <span>Refine.</span>
        </div>
    </div>
  )
}

export default Preloader