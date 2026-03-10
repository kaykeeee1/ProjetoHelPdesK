import { useEffect, useState } from "react"
import api from "../services/api"

function Dashboard() {

  const [stats, setStats] = useState({})

  async function loadStats() {

    try {

      const response = await api.get("/tickets/stats")

      setStats(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    loadStats()

  }, [])

  return (

    <div>

      <h1>Dashboard</h1>

      <p>Tickets Abertos: {stats.open}</p>
      <p>Tickets em andamento: {stats.inProgress}</p>
      <p>Tickets Resolvidos: {stats.closed}</p>

    </div>

  )

}

export default Dashboard