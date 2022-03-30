import Link from 'next/link'
import styles from '../../components/main-header.module.css'

const MainHeader = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href='/'>NextEventsApp</Link>
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li className={styles.logo}>
                    <Link href='/events'>Browse All Events</Link>
                </li>
            </ul>
        </nav> 
    </header>
  )
}

export default MainHeader