import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function ChildPage({ allPostsData }) {
  return (
    <Layout childPage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This page is in the child project</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Pages</h2>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
    }
  }
}
