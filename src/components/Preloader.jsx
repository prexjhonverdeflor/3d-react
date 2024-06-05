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
            <span>Prex</span>
            <span>Jhon</span>
            <span>Verdeflor</span>
        </div>
    </div>
  )
}

export default Preloader