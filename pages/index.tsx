import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Topbar from '../components/topbar/Topbar'
import Banner from '../components/banner/Banner'
import Feature from '../components/feature/Feature'
import FilteredCatalog from '../components/filteredCatalog/FilteredCatalog'
import FilterOptions from '../components/filteredCatalog/FilterOptions'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Ecommerce Sample</title>
        <meta name="ecommerce website using nextjs along with redux for state management." content="Ecommerce Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
    </div>
    <Banner />
    <div className={styles.grid}>
      <Feature />
      <FilterOptions />
      <FilteredCatalog />
    </div>
    
    </>
  )
}
