import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import AppBar from './components/AppBar/AppBar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Analytics from './pages/Analytics.jsx'
import {trucks as initialtrucks} from './data/trucks.js'

function App() {
  const [trucks, setTrucks] = useState(initialtrucks)
  const [selectedTruckId, setSelectedTruckId] = useState('TRK-001')
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <AppBar setModalOpen={setModalOpen} />
      <Routes>
        <Route path="/" element={<Dashboard trucks={trucks} selectedTruckId={selectedTruckId} setSelectedTruckId={setSelectedTruckId} modalOpen={modalOpen} setModalOpen={setModalOpen} />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </>
  )
}

export default App