import styles from '../../styles/Header.module.css'
import { useSelector } from 'react-redux'


function BuyCardModal({id, sellerToken, price}) {
    const token = useSelector((state)=> state.users.value.token)

    const handleBuyCard = () => {
        fetch(`http://localhost:3000/card/buy/${token}/${sellerToken}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({token,sellerToken,id}),
        })
        .then(response => response.json())
        .then(data => {
        })
    }

    return (
        <div className={styles.modal}>
            <main className={styles.modalContainer}>
                <p>Use {price} credits ?</p>
                <button className={styles.modalButton} onClick={handleBuyCard}>Confirm</button>
            </main>
        </div>
    )
}

export default BuyCardModal