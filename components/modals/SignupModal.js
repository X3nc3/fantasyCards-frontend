import styles from '../../styles/Header.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reducers/users'
import { useRouter } from "next/router";

function SignupModal() {
    const [signupUsername, setSignupUsername] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const router = useRouter();

    const dispatch = useDispatch()
    const addUser = (newUser) => {
        dispatch(login(newUser))
    }

    const handleSignup = () => {
      fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: signupUsername, email: signupEmail, password: signupPassword }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          setSignupUsername('')
          setSignupEmail('')
          setSignupPassword('')
          addUser({token: data.token, email: signupEmail, username: signupUsername, cardsList: data.cardsList, gamesList: data.gamesList, packsList: data.packsList })
          router.push("/home");
        } else {
            setErrorMessage(data.error)
        }
      })
    }
    const state = useSelector((state) => state.users.value)

    return (
      <div className={styles.modal}>
            {/* <button className={styles.closeModalButton}>X</button> */}
            <h2 className={styles.modalTitle}>Sign up</h2>
            <input className={styles.input} type='text' placeholder='username' onChange={(e) => setSignupUsername(e.target.value)} value={signupUsername} />
            <input className={styles.input} type='text' placeholder='email address' onChange={(e) => setSignupEmail(e.target.value)} value={signupEmail} />
            <input className={styles.input} type='password' placeholder='password' onChange={(e) => setSignupPassword(e.target.value)} value={signupPassword} />
            <button className={styles.modalButton} onClick={() => handleSignup()}>Sign up</button>
            {errorMessage != '' && <span className={styles.error}>{errorMessage}</span>}
      </div>
    )
  }
  
  export default SignupModal