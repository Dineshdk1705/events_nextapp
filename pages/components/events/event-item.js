// import Image from 'next/image'
import Button from '../UI/button'

import styles from '../event-item.module.css'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

const EventItem = (props) => {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })


    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
        {/* <Image src={'/'+ image} alt="" width={400} height={300}/> */}
        <img src={'/'+ image} alt="" />
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2 className={styles.titleHeading}>{title}</h2>
                <div className={styles.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink} >
                   <span> Explore Event</span>
                   <span className={styles.icon}><ArrowRightIcon /></span>
                </Button>
            </div>
        </div>
    </li>
  )
}

export default EventItem