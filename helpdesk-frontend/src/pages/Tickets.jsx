import { useEffect, useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

function Tickets() {

  const [tickets, setTickets] = useState([])

const navigate = useNavigate()

  async function loadTickets() {

    try {

      const response = await api.get("/tickets")

      setTickets(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    loadTickets()

  }, [])

  return (

    <div>

      <h1>Tickets</h1>

      <button onClick={() => navigate("/create-ticket")}>
  Novo Ticket
</button>

      {tickets.map(ticket => (

        <div key={ticket.id}>

          <h3>{ticket.title}</h3>

          <p>{ticket.description}</p>

          <p>Status: {ticket.status}</p>

          <p>Prioridade: {ticket.priority}</p>

        </div>

      ))}

    </div>

  )

}

export default Tickets