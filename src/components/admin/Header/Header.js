import React from 'react'
import styles from './Header.module.scss'
import { useAuth } from 'reactfire';

export const Header = () => {
	const auth = useAuth()
	const onLogout = () => {
		auth.signOut()
	}
  return (
	 <div className={styles.header}>
		<button className={styles.logoutButton} onClick={onLogout}>Вийти</button>
	 </div>
  )
}
