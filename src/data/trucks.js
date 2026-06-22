export const trucks = [
  {
    id: "TRK-001",
    driver: "James Mwangi",
    status: "active",
    lat: -1.2921,
    lng: 36.8219,
    speed: 67,
    lastUpdated: "2 min ago",
    currentTrip: {
      origin: "Nairobi",
      destination: "Mombasa",
      distanceKm: 490,
      estimatedHrs: 8,
    }
  },
  {
    id: "TRK-002",
    driver: "Aisha Omondi",
    status: "idle",
    lat: -1.3100,
    lng: 36.8500,
    speed: 0,
    lastUpdated: "15 min ago",
    currentTrip: null
  },
  {
    id: "TRK-003",
    driver: "Brian Otieno",
    status: "offline",
    lat: -1.2800,
    lng: 36.8100,
    speed: 0,
    lastUpdated: "2 hrs ago",
    currentTrip: null
  }
]