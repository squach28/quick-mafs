import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.header}><h1>Quick Mafs</h1></Link>
        <Link href="/login" className={styles.button}>Login</Link>
    </div>
  )
}

export default Navbar