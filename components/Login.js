import styles from '../styles/Home.module.css'

export default function Login () {
  return (
    <>
      <div>
        <img src='https://www.12tails-th.com/assets/img/background/header-main.png' className={styles.bgImg} />
        <img src='https://www.12tails-th.com/assets/img/static/logo.png' className={styles.overlapImg} />
      </div>
      <div className={styles.loginForm}>
        <h2 style={{ fontSize: '30px', margin: '10px' }}>Login Form</h2>
        <form>
          <div className={styles.form}>
            <div>
              <label><b>Username</b></label>
              <input type='text' placeholder='Username' required className={styles.input} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <label><b>Password</b></label>
              <input type='password' placeholder='Password' required className={styles.input} />
            </div>

            <button type='submit' style={{ marginTop: '10px' }} className={styles.button}>Login</button>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <div>240-311 DISTRIBUTED COMPUTING AND WEB TECHNOLOGIES</div>
        <div>BY PEERAPATCH ANGSIYANON  6135512034</div>
      </div>
    </>
  )
}
