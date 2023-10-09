import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EKYCPage from './pages/EKYCPage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';
import EKYCForm from './components/EKYCForm';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/ekyc' element={<EKYCPage/>}/>
      <Route path='/ekyc-form' element={<EKYCForm/>}/>
      <Route path='/:id' element={<ProfilePage/>}/>
      <Route/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
