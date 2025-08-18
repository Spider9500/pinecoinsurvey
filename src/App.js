import * as React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Home from './screens/app/Home';
import Profile from './screens/app/Profile';
import Referrals from './screens/app/Referrals';
import Packages from './screens/app/Packages';
import ValidatePayments from './screens/app/ValidatePayments';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import WelcomeNew from './screens/auth/WelcomeNew';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPayments from './screens/app/AddPayments';
import Withdraw from './screens/app/Withdraw';
import Survey from './screens/app/Survey';
import ReferralCode from './screens/auth/ReferralCode';
import { AuthProvider } from './contexts/AuthContext';
import MessageDisplay from './components/MessageDisplay';

function App() {
  return (
    <AuthProvider>
      <div className="App" style={{ minHeight: '100vh' }}>
        <CssBaseline />
        <Container maxWidth={false} sx={{ my: 0, px: 0 }} >
          <BrowserRouter>
            <MessageDisplay />
            <Routes>
              <Route index element={<WelcomeNew />} />
              <Route path='register' element={<Register />} />
              <Route path='referralCode' element={<ReferralCode />} />
              <Route path='login' element={<Login />} />
              <Route path='home' element={<Home />} />
              <Route path='account' element={<Profile />} />
              <Route path='referrals' element={<Referrals />} />
              <Route path='packages' element={<Packages />} />
              <Route path='validate' element={<ValidatePayments />} />
              <Route path='payments' element={<AddPayments />} />
              <Route path='withdraw' element={<Withdraw />} />
              <Route path='survey' element={<Survey />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
