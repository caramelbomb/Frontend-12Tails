import styles from '../styles/Home.module.css'
import Background from '../components/Background'
import { useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

export default function Login ({ token }) {
  const [formLogin, setFormLogin] = useState('login')
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const url = 'http://localhost:9000/api/user'

  const SubmitForm = () => {
    if (formLogin === 'login') {
      console.log('login')
      axios.post(`${url}/login`,
        {
          username: username,
          password: password
        }
      ).then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', res.data.user.username)
        window.location.replace('/')
      }).catch(() => {
        setMessage('ไม่สามารถล็อคอินได้')
        setModal(true)
      })
    } else if (formLogin === 'regis') {
      console.log('regis')
      const data = {
        username: username,
        password: password
      }
      axios.post(`${url}/register`, data)
        .then((res) => {
          setFormLogin('login')
        }).catch((err) => {
          console.log('err', err)
          setMessage('ไม่สามารถสมัครสมาชิกได้')
          setModal(true)
        })
    }
  }

  const header = () => {
    if (formLogin === 'login') {
      return 'Login'
    } else {
      return 'Register'
    }
  }

  const button = () => {
    if (formLogin === 'login') {
      return 'Login'
    } else {
      return 'Sign up'
    }
  }

  const changeType = () => {
    if (formLogin === 'login') {
      return (
        <div>Already have an account?
          <strong
            style={{ cursor: 'pointer', color: '#7abfe0', textDecoration: 'underline' }}
            onClick={() => { setFormLogin('regis') }}
          > Sign in
          </strong>
        </div>
      )
    } else {
      return (
        <div>Back to
          <strong
            style={{ cursor: 'pointer', color: '#7abfe0', textDecoration: 'underline' }}
            onClick={() => { setFormLogin('login') }}
          > Login
          </strong>
        </div>
      )
    }
  }

  return (
    <>
      {!modal ||
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span
              className={styles.close}
              onClick={() => { setModal(false) }}
            >&times;
            </span>
            {message}
          </div>
        </div>}
      <Layout token={token}>
        <div className={styles.container}>
          <Background />
          <div className={styles.loginForm}>
            <h2 style={{ fontSize: '30px', margin: '10px' }}>{header()}</h2>
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
                  type='button'
                  style={{ marginTop: '10px' }}
                  className={styles.button}
                  onClick={() => { SubmitForm() }}
                >{button()}
                </button>
              </div>
              {changeType()}
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
