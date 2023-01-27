import styles from '../../styles/FilterOptions.module.css'
import { useState } from 'react'

export default function FilterOptions() {

    // const [imgSize, setImgSize] = useState({
    //     width: 230,
    //     height: 296
    // })

  return (
    <div className={styles.container}>
        <p>Filter options</p>
        <button>Apply</button>
    </div>
  )
}