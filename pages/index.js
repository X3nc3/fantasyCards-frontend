import Login from '../components/Login'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';

function Index() {

  const router = useRouter()
  useSelector((state) => {
    if (state.users.value.token) {
        router.push('/home')
    }
  });
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export default Index;
