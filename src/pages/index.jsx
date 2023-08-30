import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'


export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Paga</title>
			</Head>
      <Header />
			<Main page='index' />
			<Footer />
		</div>
	)
}
