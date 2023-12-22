import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

function Home() {
    const [username, setUsername] = useState('')
    const [credits, setCredits] = useState(0)
    const [cards, setCards] = useState([])
    const [packs, setPacks] = useState([])

    const userToken = useSelector((state) => state.users.value.token)
    const router = useRouter()
    useEffect(() => {
        fetch(`http://localhost:3000/users/user/${userToken}`).then(response => response.json()).then(data => {
            setUsername(data.username)
            setCredits(data.credits)
            setCards(data.cards)
            setPacks(data.packs)
        })
    }, [])

    const handlePast = () => {
        router.push("/gameFinished")
    }

    const handleOngoing = () => {
        router.push("/gameNotStarted")
    }

    const handleInventory = () => {
        router.push("/inventory")
    }

    return (
        <div>
            <main className='main'>
                <h1 className='title'>Home</h1>
                <div className={styles.homeContent}>
                    <div className={styles.infoGamesContainer}>
                        <div className={styles.box} id={styles.infoBox}>
                            <h3 className={styles.contentTitle}>Account info</h3>
                            <div className={styles.content}>
                                <span className={styles.contentItem}>Username: {username}</span>
                                <span className={styles.contentItem}>Credits: {credits}</span>
                                <span className={styles.contentItem}>Ranking</span>
                            </div>
                        </div>
                        <div className={styles.box} id={styles.gameBox}>
                            <h3 className={styles.contentTitle}>Games</h3>
                            <div className={styles.content}>
                                <span className={styles.contentItem}>Game1: </span>
                                <span className={styles.contentItem}>Game2: </span>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.contentButton} onClick={() => { handlePast() }}>Past games</button>
                                <button className={styles.contentButton} onClick={() => { handleOngoing() }}>Ongoing games</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box} id={styles.inventoryBox}>
                        <h3 className={styles.contentTitle}>Inventory</h3>
                        <div className={styles.content}>
                            <span className={styles.contentItem}>Total cards: {cards.length}</span>
                            <span className={styles.contentItem}>Total packs: {packs.length}</span>
                        </div>
                        <button className={styles.contentButton} onClick={() => { handleInventory() }}>View more</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home