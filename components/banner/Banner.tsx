import styles from '../../styles/Banner.module.css'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className={styles.bannerImage}>
      <Image src="/banner-image.jpg" alt="nice background picture" width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto', objectFit: 'contain'}}/>
    </div>
  )
}