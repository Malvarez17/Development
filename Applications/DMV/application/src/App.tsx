import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { FormDataProvider } from '@/contexts/FormDataContext'
import HomePage from '@/pages/HomePage'
import RenewalPage from '@/pages/RenewalPage'
import DLRenewalPage from '@/pages/DLRenewalPage'
import LoginPage from '@/pages/LoginPage'
import AccountVerificationPage from '@/pages/AccountVerificationPage'
import VerificationCodePage from '@/pages/VerificationCodePage'
import LanguageSelectionPage from '@/pages/LanguageSelectionPage'
import OpenApplicationsPage from '@/pages/OpenApplicationsPage'
import StartApplicationPage from '@/pages/StartApplicationPage'
import ProvideInformationPage from '@/pages/ProvideInformationPage'

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
            <Route path="/account-verification" element={<AccountVerificationPage />} />
            <Route path="/verification-code" element={<VerificationCodePage />} />
            <Route path="/language-selection" element={<LanguageSelectionPage />} />
            <Route path="/open-applications" element={<OpenApplicationsPage />} />
            <Route path="/start-application" element={<StartApplicationPage />} />
            <Route path="/provide-information" element={<ProvideInformationPage />} />
            {/* Additional routes will be added here */}
          </Routes>
        </Router>
      </FormDataProvider>
    </AuthProvider>
  )
}

export default App
