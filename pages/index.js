import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Homepage from '../components/Homepage'

export default function Home ({ token }) {
  return (
    <Layout token={token}>
      <div className={styles.container}>
        <Homepage />
      </div>
    </Layout>
  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
