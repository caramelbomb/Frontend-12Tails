import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import axios from 'axios'

export default function SalePage ({ token }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [detail, setDetail] = useState('')
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('')
  const [typeName, setTypename] = useState('1')

  const addProduct = () => {
    if (!name || !price || !detail || !typeName) {
      setMessage('กรุณากรอกข้อมูลให้ครบถ้วน')
      setModal(true)
    } else {
      const url = 'http://localhost:9000/api/product'
      const data = {
        name,
        price,
        detail,
        type: typeName,
        salerID: localStorage.getItem('_id')
      }
      axios.post(`${url}/sale`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => {
        window.location.replace('/buy')
      }).catch((err) => {
        console.log('err', err)
      })
    }
  }

  const handleChange = (e) => {
    setTypename(e.target.value)
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
              placeholder='ราคา (บาท)'
              required className={styles.input}
              onChange={(e) => { setPrice(e.target.value) }}
            />
            <label><b>รายละเอียด</b></label>
            <input
              type='text'
              placeholder='รายละเอียด'
              required className={styles.input}
              onChange={(e) => { setDetail(e.target.value) }}
            />
            <label><b>สินค้าของตัวละคร</b></label>
            <select name='typeName' className={styles.input} onChange={handleChange}>
              <option value='1'>แมว</option>
              <option value='2'>หมาป่า</option>
              <option value='3'>ลิง</option>
              <option value='4'>ค้างคาว</option>
              <option value='5'>แกะ</option>
              <option value='6'>กระต่าย</option>
              <option value='7'>แพนด้า</option>
              <option value='8'>แพนกวิ้น</option>
              <option value='9'>ตุ่น</option>
            </select>
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
    </>

  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
