import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Layout ({ children }) {
  const router = useRouter()
  const [username, setUsername] = useState('')

  const getProfile = async () => {
    await setUsername(localStorage.getItem('user'))
  }

  const logout = async () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('_id')
    window.location.replace('/')
  }

  useEffect(() => {
    getProfile()
  })

  const getLogin = () => {
    if (username) {
      return (
        <div
          className={styles.menuSpace}
          onClick={logout}
        >LOGOUT
        </div>
      )
    } else {
      return (
        <div
          className={styles.menuSpace} onClick={() => {
            router.push('/login')
          }}
        >LOGIN
        </div>
      )
    }
  }

  return (
    <>
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
        <div
          className={styles.menuSpace} onClick={() => {
            router.push('/sale')
          }}
        >SALE
        </div>
        <div
          className={styles.menuSpace} onClick={() => {
            router.push('/buy')
          }}
        >BUY
        </div>
        {getLogin()}
      </div>
      {children}
      <div className={styles.footer}>
        <div>240-311 DISTRIBUTED COMPUTING AND WEB TECHNOLOGIES</div>
        <div>BY PEERAPATCH ANGSIYANON  6135512034</div>
      </div>
    </>
  )
}
