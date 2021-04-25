import styles from '../styles/Home.module.css'
import Background from '../components/Background'
import { useState } from 'react'

export default function Login () {
  const [formLogin, setFormLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')

  const Form = () => {
    if (formLogin === true) {
      return (
        <div className={styles.loginForm}>
          <h2 style={{ fontSize: '30px', margin: '10px' }}>Login Form</h2>
          <form>
            <div className={styles.form}>
              <div>
                <label><b>Username</b></label>
                <input
                  type='text'
                  placeholder='Username'
                  required
                  className={styles.input}
                  onChange={(e) => { setUsername(e.target.value) }}
                />
              </div>
              <div style={{ marginTop: '10px' }}>
                <label><b>Password</b></label>
                <input
                  type='password'
                  placeholder='Password'
                  required className={styles.input}
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>
              <button
                type='submit'
                style={{ marginTop: '10px' }}
                className={styles.button}
              >Login
              </button>
            </div>
            <div>Already have an account?
              <strong
                style={{ cursor: 'pointer', color: '#7abfe0', textDecoration: 'underline' }}
                onClick={() => { setFormLogin(!formLogin) }}
              > Sign in
              </strong>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className={styles.loginForm}>
          <h2 style={{ fontSize: '30px', margin: '10px' }}>Register</h2>
          <form>
            <div className={styles.form}>
              <div>
                <label><b>Username</b></label>
                <input
                  type='text'
                  placeholder='Username'
                  required
                  className={styles.input}
                  onChange={(e) => { setUsername(e.target.value) }}
                />
              </div>
              <div style={{ marginTop: '10px' }}>
                <label><b>Password</b></label>
                <input
                  type='password'
                  placeholder='Password'
                  required className={styles.input}
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>
              <div style={{ marginTop: '10px' }}>
                <label><b>Telephone</b></label>
                <input
                  type='number'
                  placeholder='Telephone'
                  required className={styles.input}
                  onChange={(e) => { setTel(e.target.value) }}
                />
              </div>
              <button type='submit' style={{ marginTop: '10px' }} className={styles.button}>Sign up</button>
            </div>
            <div>Back to
              <strong
                style={{ cursor: 'pointer', color: '#7abfe0', textDecoration: 'underline' }}
                onClick={() => { setFormLogin(!formLogin) }}
              > Login
              </strong>
            </div>
          </form>
        </div>
      )
    }
  }

  return (
    <>
      <Background />
      {Form()}
    </>
  )
}
