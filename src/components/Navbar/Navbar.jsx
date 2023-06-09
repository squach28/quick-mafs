import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/"><h1>Quick Mafs</h1></Link>
        <button>Login</button>
    </div>
  )
}

export default Navbar