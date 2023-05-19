import styles from '../../styles/FilterOptions.module.css'
import { useEffect, useState } from 'react'

export default function FilterOptions() {

  const [fruitFilter, setFruitFilter] = useState(['apple', 'banana', 'cherry', 'durian', 'elderberry', 'fig', 'grape', 'honeydew', 'jackfruit', 'kiwi', 'lemon', 'mango', 'nectarine'])
  
  const filterByFruit = (fruit) => {
    setFruitFilter(fruitFilter.filter((f) => f !== fruit))
  }

  useEffect(() => { 
    console.log(fruitFilter)
  }, [fruitFilter])

  const fruitList = fruitFilter.map((fruit) => {
    return (
      <div key={fruit} className={styles.fruit}>
        <span>{fruit}
        <button className={styles.removeCheckBoxBtn} onClick={() => filterByFruit(fruit)}>Remove</button></span>
        <br />
      </div>
    )
  })
  return (
    <div className={styles.container}>
        <h3>Filter by:</h3>
        <h4>Category</h4>
        {fruitList}
        <button className={styles.filterBtn}>Apply</button>
    </div>
  )
}