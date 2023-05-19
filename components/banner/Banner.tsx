import styles from '../../styles/Banner.module.css'
import Image from 'next/image'
import { useState } from 'react'

//create a banner component with the functionality of a slideshow


export default function Banner() {

  //create a slideshow of images
  const [slideIndex, setSlideIndex] = useState(0)
  const [slideImages, setSlideImages] = useState([
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
    '/banner-image.jpg',
  ])

  const nextSlide = () => {
    if (slideIndex !== slideImages.length - 1) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === slideImages.length - 1) {
      setSlideIndex(0)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 0) {
      setSlideIndex(slideImages.length - 1)
    }
  }

  const moveDot = (index) => {
    setSlideIndex(index)
  }

  return (
    <div className={styles.bannerImage}>
      {
        slideImages.map((img, index) => {
          return (
            <div key={index}>
              <Image src={img} alt="nice background picture" width={0} height={0} sizes='100vw' style={{width: '100%', height: 'auto', objectFit: 'contain', }}/>
            </div>
          )
        })
      }
      <button className={styles.prev} onClick={prevSlide}>Prev</button>
    </div>
  )
}