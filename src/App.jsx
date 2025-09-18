import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all your authentication components
import LockScreen from './components/auth/LockScreen';
import NewPassword from './components/auth/NewPassword';
import ResetPassword from './components/auth/ResetPassword';
import SignUp from './components/auth/SignUp';
import TwoFactorAuth from './components/auth/TwoFactorAuth';
import Login from './components/auth/LogIn.jsx';

// Import your newly created dashboard components
import Dashboard from './components/dashboard/Dashboard';
import RequestPhoneNumber from './components/dashboard/RequestPhoneNumber';
import AddContacts from './components/dashboard/AddContacts';
import ManagePhoneNumbers from './components/dashboard/ManagePhoneNumbers';
import OldProperties from './components/dashboard/OldProperties';
import AddProperty from './components/dashboard/AddProperty';
import ActiveProperties from './components/dashboard/ActiveProperties';

// Import your global styles
import './index.css';
import { LogIn } from 'lucide-react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/lock-screen" element={<LockScreen />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/two-factor" element={<TwoFactorAuth />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request-phone-number" element={<RequestPhoneNumber />} />
        <Route path="/add-contacts" element={<AddContacts />} />
        <Route path="/manage-phone-numbers" element={<ManagePhoneNumbers />} />
        <Route path="/old-properties" element={<OldProperties />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/active-properties" element={<ActiveProperties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;