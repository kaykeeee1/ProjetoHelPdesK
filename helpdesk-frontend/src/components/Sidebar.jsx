import { Link } from "react-router-dom"

function Sidebar() {

  return (

    <div style={{
      width: "200px",
      height: "100vh",
      background: "#1e293b",
      color: "white",
      padding: "20px"
    }}>

      <h2>HelpDesk</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

        <Link to="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>

        <Link to="/tickets" style={{ color: "white" }}>
          Tickets
        </Link>

        <Link to="/create-ticket" style={{ color: "white" }}>
          Novo Ticket
        </Link>

      </nav>

    </div>

  )

}

export default Sidebar