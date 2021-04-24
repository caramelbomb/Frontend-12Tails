import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Background from './Background'

export default function Login () {
  const [charactor, setCharactor] = useState('1')
  const name = ['แมว', 'หมาป่า', 'ลิง', 'ค้างคาว', 'แกะ', 'กระต่าย', 'แพนด้า', 'แพนกวิ้น', 'ตุ่น', '']
  return (
    <>
      <Background />
      <div className={styles.home}>
        <h1>แนะนำตัวละคร</h1>
        <div className={styles.charactorLine}>
          <img src={`https://www.12tails-th.com/assets/img/upload/character-${charactor}.png`} className={styles.charactor} />
          <div style={{ marginLeft: '20px', fontSize: '50px' }}>{name[parseInt(charactor) - 1]}</div>
        </div>
        <div className={styles.pagination}>
          <div onClick={() => { setCharactor('1') }} className={styles.paginationItem}>1</div>
          <div onClick={() => { setCharactor('2') }} className={styles.paginationItem}>2</div>
          <div onClick={() => { setCharactor('3') }} className={styles.paginationItem}>3</div>
          <div onClick={() => { setCharactor('4') }} className={styles.paginationItem}>4</div>
          <div onClick={() => { setCharactor('5') }} className={styles.paginationItem}>5</div>
          <div onClick={() => { setCharactor('6') }} className={styles.paginationItem}>6</div>
          <div onClick={() => { setCharactor('7') }} className={styles.paginationItem}>7</div>
          <div onClick={() => { setCharactor('8') }} className={styles.paginationItem}>8</div>
          <div onClick={() => { setCharactor('9') }} className={styles.paginationItem}>9</div>
        </div>
      </div>
    </>
  )
}
