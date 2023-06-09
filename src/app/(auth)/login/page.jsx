"use client"

import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
    title: "Login to Quck Mafs",
    description: "Login to Quick Mafs using email or social login"
}

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

            <hr className={styles.line}/>
            <h3>Or login with</h3>

        <div className={styles.socialLoginContainer}>
            <button className={styles.socialLoginButton}>Google</button>
            <button className={styles.socialLoginButton}>Apple</button>
            <button className={styles.socialLoginButton}>Twitter</button>
        </div>

    </div>
  )
}

export default Login