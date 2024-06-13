import styles from '../styles/Login.module.css';

function Login() {
  return (
    <div>
      <main className='main'>
        <div className={styles.box}>
          <div className={styles.boxDesc}>
            <h2 className={styles.boxTitle}>Create your team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in. Iaculis nunc sed augue lacus viverra vitae congue eu. At varius vel pharetra vel. Aliquet bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in. Iaculis nunc sed augue</p>
          </div>
          <img style={{ width: 1600, height: 250, minWidth: 300, maxWidth: 400 }} className='boxPicture' src='./images/boxPicture_1.jpg' alt='Create your team' />
        </div>
        <div className={styles.box}>
          <img style={{ width: 1600, height: 250, minWidth: 300, maxWidth: 400 }} className='boxPicture' src='./images/boxPicture_2.png' alt='Create your team' />
          <div className={styles.boxDesc}>
            <h2 className={styles.boxTitle}>Grow your team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in. Iaculis nunc sed augue lacus viverra vitae congue eu. At varius vel pharetra vel. Aliquet bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in. Iaculis nunc sed augue</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxDesc}>
            <h2 className={styles.boxTitle}>Get the most rarity card</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in. Iaculis nunc sed augue lacus viverra vitae congue eu. At varius vel pharetra vel. Aliquet bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in. Iaculis nunc sed augue</p>
          </div>
          <img style={{ width: 1600, height: 250, minWidth: 150, maxWidth: 180 }} className='boxPicture' src='./images/boxPicture_3.png' alt='Create your team' />
        </div>
      </main>
    </div>
  );
}

export default Login;
