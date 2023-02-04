import '@/styles/globals.css'
import Layout from '@/components/layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component }) {
  return (
    <Layout>
      <ToastContainer limit={1} />
      <Component />
    </Layout>
  )
}

export default MyApp;

