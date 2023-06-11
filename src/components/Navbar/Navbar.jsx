"use client"

import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Navbar = () => {

  const session = useSession()

  console.log(session)

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.header}><h1>Quick Mafs</h1></Link>
       {session.status === 'authenticated' ? `Hi ${session?.data?.user.name}` : <Link href="/login" className={styles.button}>Login</Link>}
    </div>
  )
}

export default Navbar