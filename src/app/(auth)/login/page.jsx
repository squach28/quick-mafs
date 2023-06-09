"use client"

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className={styles.container}>
        <h1>Welcome Back!</h1>
        <h2>Ready for more math?</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            <button className={styles.loginButton}>Login</button>
        </form>
        <Link href="/register">Haven&apos;t mathed with us yet? Register here</Link>

        <button className={styles.loginButton}>Google Login</button>
        <button className={styles.loginButton}>Apple Login</button>
        <button className={styles.loginButton}>Twitter Login</button>

    </div>
  )
}

export default Login