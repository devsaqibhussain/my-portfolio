import React from 'react'
import { styles } from '../utils/styles'
const Project = () => {
  return (
    <div className='mt-10'>
      <h1 className={`${styles.header1}`}>My Projects</h1>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-xl border-2 border-stone-700'>

      </div>
    </div>
  )
}

export default Project