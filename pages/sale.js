import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function SalePage ({ token }) {
  return (
    <Layout token={token}>
      <div className={styles.container}>
        sale
      </div>
    </Layout>
  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
