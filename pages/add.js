import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function SalePage ({ token }) {
  const [name, setName] = useState({})
  const [price, setPrice] = useState({})
  const [detail, setDetail] = useState({})

  const addProduct = async () => {
    const url = 'http://localhost:9000/api/product'
    const data = {
      name,
      price,
      detail,
      salerID: localStorage.getItem('_id')
    }
    axios.post(`${url}/sale`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      window.location.replace('/sale')
    }).catch((err) => {
      console.log('err', err)
    })
  }

  return (
    <Layout token={token}>
      <div className={styles.container}>
          <h1 className={styles.saleHead}>เพิ่มสินค้า</h1>
          <div className={styles.addForm}>
              <label><b>ชื่อสินค้า</b></label>
              <input
                  type='text'
                  placeholder='ชื่อสินค้า'
                  required className={styles.input}
                  onChange={(e) => { setName(e.target.value) }}
                />
              <label><b>ราคา</b></label>
              <input
                  type='number'
                  placeholder='ราคา'
                  required className={styles.input}
                  onChange={(e) => { setName(e.target.value) }}
                />
              <label><b>รายละเอียด</b></label>
              <input
                  type='text'
                  placeholder='รายละเอียด'
                  required className={styles.input}
                  onChange={(e) => { setName(e.target.value) }}
                />
              <button
                  type='button'
                  style={{ marginTop: '10px', width: '150px' }}
                  className={styles.button}
                  onClick={addProduct}
                >เพิ่ม
                </button>
            </div>
        </div>
    </Layout>
  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
