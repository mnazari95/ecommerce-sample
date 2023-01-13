import styles from '../../styles/Feature.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Feature() {

  const [imgSize, setImgSize] = useState({
    width: 280,
    height: 196
  })

  return (
    <div className={styles.titleLabel}>
      UP TO 80% OFF
      <div className={styles.container}>
        <div className={styles.featureItem}>
        <Image src="/sample-shirt.jpg" alt="black shirt" width={imgSize.width} height={imgSize.height}/>
        </div>
        <div className={styles.featureItem}>
        <Image src="/sample-shirt.jpg" alt="black shirt" width={imgSize.width} height={imgSize.height}/>
        </div>
        <div className={styles.featureItem}>
          <Image src="/sample-shirt.jpg" alt="black shirt" width={imgSize.width} height={imgSize.height}/>
        </div>
        <div className={styles.featureItem}>
        <Image src="/sample-shirt.jpg" alt="black shirt" width={imgSize.width} height={imgSize.height}/>
        </div>
        <div className={styles.featureItem}>
        <Image src="/sample-shirt.jpg" alt="black shirt" width={imgSize.width} height={imgSize.height}/>
        </div>
        <div className={styles.featureItem}>
        <Image src="/sample-shirt.jpg" alt="black shirt" width={imgSize.width} height={imgSize.height}/>
        </div>
      </div>
    </div>
    
  )
}