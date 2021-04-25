import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function BuyPage ({ token }) {
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('')

  const getProduct = async () => {
    const url = 'http://localhost:9000/api/product'
    const res = await axios.get(`${url}/available`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    await setProducts(res.data.result)
  }

  const buyProduct = (productID) => {
    const url = 'http://localhost:9000/api/product'
    const data = {
      productID,
      buyerID: localStorage.getItem('_id')
    }
    axios.put(`${url}/buy`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      window.location.replace('/buy')
    }).catch((err) => {
      console.log('err', err)
      setMessage('ไม่สามารถซื้อได้')
      setModal(true)
    })
  }

  useEffect(() => {
    getProduct()
  }, [])

  const Item = () => {
    console.log('products', products)
    if (products.length === 0) {
      return (
        <div>
          <h1 className={styles.saleHead}>ไม่มีสินค้า</h1>
        </div>
      )
    } else {
      return products.map((item, key) => {
        return (
          <div key={key} className={styles.ItemArray}>
            <img src={`https://www.12tails-th.com/assets/img/upload/character-${item.type}.png`} style={{ width: '100px' }} />
            <div className={styles.ItemContent} style={{ width: '90%' }}>
              <div>ชื่อสินค้า : {item.name}  </div>
              <div>ราคา : {item.price}</div>
              <div>รายละเอียด : {item.detail}</div>
            </div>
            <button
              className={styles.button}
              style={{ padding: '5px', width: '80px', height: '90px' }}
              onClick={() => { buyProduct((item._id).toString()) }}
            >ซื้อ
            </button>
          </div>
        )
      })
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
          <h1 className={styles.saleHead}>ITEM ทั้งหมด</h1>
          <div className={styles.Item}>
            {Item()}
          </div>
        </div>
      </Layout>
    </>

  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
