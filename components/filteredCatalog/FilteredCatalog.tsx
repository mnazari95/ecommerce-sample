import styles from '../../styles/FilteredCatalog.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function FilteredCatalog() {

    const [imgSize, setImgSize] = useState({
        width: 230,
        height: 296
    })

  return (
    <div className={styles.container}>
      <Image src="/blue-shirt.jpeg" alt="filtered results" width={imgSize.width} height={imgSize.height}/>
      <Image src="/blue-shirt.jpeg" alt="filtered results" width={imgSize.width} height={imgSize.height}/>
      <Image src="/blue-shirt.jpeg" alt="filtered results" width={imgSize.width} height={imgSize.height}/>
      <Image src="/blue-shirt.jpeg" alt="filtered results" width={imgSize.width} height={imgSize.height}/>
      <Image src="/blue-shirt.jpeg" alt="filtered results" width={imgSize.width} height={imgSize.height}/>
    </div>
  )
}