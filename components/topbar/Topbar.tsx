import styles from '../../styles/Topbar.module.css'

export default function Topbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <li className={styles.list}>Menu</li>
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