import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function ChildPage({ allPostsData }) {
  return (
    <p>child</p>
  )
}

export async function getStaticProps() {
  return {
    props: {
   
    }
  }
}
