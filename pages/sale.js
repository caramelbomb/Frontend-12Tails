import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function SalePage ({ token }) {
  const router = useRouter()
  const [products, setProducts] = useState([])

  const getProduct = async () => {
    const url = 'http://localhost:9000/api/product'
    const res = await axios.get(`${url}/available`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    await setProducts(res.data.result)
  }

  useEffect(() => {
    getProduct()
  }, [])

  const Item = () => {
    return products.map((item, key) => {
      return (
        <div key={key} className={styles.ItemArray}>
          test
          {item.name}
        </div>
      )
    })
  }

  return (
    <Layout token={token}>
      <div className={styles.container}>
        <h1 className={styles.saleHead}>ITEM ทั้งหมด</h1>
        <button
          className={styles.saleButton}
          onClick={() => {
            router.push('/add')
          }}
        >
          เพิ่มสินค้า
        </button>
        <div className={styles.Item}>
          {Item()}
        </div>
      </div>
    </Layout>
  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
