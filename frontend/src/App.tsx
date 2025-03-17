import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.tsx";


import Loading from "./components/Loading";
import UnAuthorized from "./components/UnAuthorized";
const DashboardPage = lazy(()=> import('./pages/Dashboard'))
const NotificationsPage = lazy(()=> import('./pages/Notifications'))
const ReasultPage = lazy(()=> import('./pages/Reasults'))
const SchedulesPage = lazy(()=> import('./pages/Schedule'))
const SettingsPage = lazy (()=> import('./pages/Settings'))
const SignInPage = lazy(()=> import('./pages/SignIn'))
const SignUpPage = lazy(()=> import('./pages/SignUp'))
const StudentsPage = lazy(()=> import('./pages/Students'))
const SupplePage = lazy(()=> import('./pages/Supple'))
const StudentForm = lazy(() => import('./components/addstudent'));


function App() {
  return(<div>
    <ThemeProvider>
    <Suspense fallback={<div><Loading /></div>}>
      <Routes>

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        <Route index element={
          <UnAuthorized>
            <DashboardPage />
          </UnAuthorized>
        } />

        <Route path="/dashboard" element={
          <UnAuthorized>
            <DashboardPage />
          </UnAuthorized>
        } />

        <Route path="/notifications" element={
          <UnAuthorized>
            <NotificationsPage />
          </UnAuthorized>
        } />

        <Route path="/reasults" element={
          <UnAuthorized>
            <ReasultPage />
          </UnAuthorized>
        } />

        <Route path="/schedule" element={
          <UnAuthorized>
            <SchedulesPage />
          </UnAuthorized>
        } />

        <Route path="/settings" element={
          <UnAuthorized>
            <SettingsPage />
          </UnAuthorized>
        } />

        <Route path="/students" element={
          <UnAuthorized>
            <StudentsPage />
          </UnAuthorized>
        } />


       <Route path="/supple" element={
          <UnAuthorized>
            <SupplePage />
          </UnAuthorized>
        } />

        <Route
            path="/students/add"
            element={
              <UnAuthorized>
                <StudentForm />
              </UnAuthorized>
            } />
            
      </Routes>
    </Suspense>
    </ThemeProvider>
  </div>)
}

export default App;