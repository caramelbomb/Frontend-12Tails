import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Layout from '../components/Layout'

export default function Homepage ({ token }) {
  return (
    <Layout token={token}>
      <div className={styles.container}>
        <Login />
      </div>
    </Layout>
  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
