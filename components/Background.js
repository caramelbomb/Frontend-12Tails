import styles from '../styles/Home.module.css'

export default function Background ({ children }) {
  return (
    <div>
      <img src='https://www.12tails-th.com/assets/img/background/header-main.png' className={styles.bgImg} />
      <img src='https://www.12tails-th.com/assets/img/static/logo.png' className={styles.overlapImg} />
    </div>
  )
}
