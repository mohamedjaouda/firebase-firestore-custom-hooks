import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'


const ProgressBar = ({file, setFile}) => {

    const {url, progress} = useStorage(file)  

    useEffect(() => { (url) && setFile(null) },[url, setFile])
    
    return (
      <div
        className="progress-bar"
        inittial={{ width: 0 }}
        animate={{ width: progress } }
      ></div>
    );
}

export default ProgressBar
