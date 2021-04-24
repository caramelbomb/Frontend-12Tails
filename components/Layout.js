import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Layout ({ children }) {
  const router = useRouter()

  return (
    <div>
      <div className={styles.header}>
        <img src='https://www.12tails-th.com/assets/img/static/small_logo.png' className={styles.logoSpace} />
        <div className={styles.emptySpace} />
        <div
          className={styles.menuSpace}
          onClick={() => {
            router.push('/')
          }}
        > HOME
        </div>
        <div className={styles.menuSpace}>SALE</div>
        <div className={styles.menuSpace}>BUY</div>
        <div
          className={styles.menuSpace} onClick={() => {
            router.push('/loginpage')
          }}
        >LOGIN
        </div>
      </div>
      {children}
    </div>
  )
}
