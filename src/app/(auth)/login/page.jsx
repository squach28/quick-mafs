"use client"

import React from 'react'
import styles from './page.module.css'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            <button className={styles.loginButton}>Login</button>
        </form>
    </div>
  )
}

export default Login