import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { FormDataProvider } from '@/contexts/FormDataContext'
import HomePage from '@/pages/HomePage'
import RenewalPage from '@/pages/RenewalPage'
import DLRenewalPage from '@/pages/DLRenewalPage'
import LoginPage from '@/pages/LoginPage'

function App() {
  return (
    <AuthProvider>
      <FormDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/renewal" element={<RenewalPage />} />
            <Route path="/dl-renewal" element={<DLRenewalPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Additional routes will be added here */}
          </Routes>
        </Router>
      </FormDataProvider>
    </AuthProvider>
  )
}

export default App
