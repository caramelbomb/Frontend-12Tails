import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home ({ token }) {
  return (
    <Layout token={token}>
      <div className={styles.container}>
        test
      </div>
    </Layout>
  )
}

export function getServerSideProps ({ req, res }) {
  return { props: { token: req.cookies.token || '' } }
}
