import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFoundPage'
import SingleScrollPage from './pages/SingleScrollPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SingleScrollPage />} />

        {/* Legacy routes -> single-scroll anchors */}
        <Route path="/competence" element={<Navigate to="/#competence" replace />} />
        <Route path="/value" element={<Navigate to="/#value" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
