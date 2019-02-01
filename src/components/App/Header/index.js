import React from 'react'
import { Link } from 'react-router-dom'
import UserMenu from 'components/App/Header/UserMenu'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.appHeader}>
            <Link to="/page/1" className={styles.appTitle}>
                TVloVe
            </Link>
            <p>Your TV guide for today</p>
            <UserMenu />
        </header>
    )
}

export default Header
