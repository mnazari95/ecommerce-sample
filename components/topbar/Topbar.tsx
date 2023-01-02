import Link from 'next/link'
import styles from '../../styles/Topbar.module.css'
import { useState } from 'react';

export default function Topbar() {

  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    //toggles side menu when activated
    return(
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/deal">Deals</Link>
        </li>
        <li>
          <Link href="/all">All</Link>
        </li>
      </ul>
      )
  }
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <li className={styles.list} onClick={() => setMenuToggle(true)}>Menu</li>
        <li className={styles.list}>Profile</li>
      </ul>
      <ul className={styles.listContainer}>
        <li className={styles.list}>Logo</li>
      </ul>
      <ul className={styles.listContainer}>
        <li className={styles.list}>Search</li>
        <li className={styles.list}>Cart</li>
      </ul>
    </div>
  )
}