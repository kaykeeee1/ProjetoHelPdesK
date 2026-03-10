import { useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

function CreateTicket() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("baixa")

  const navigate = useNavigate()

  async function handleCreate(e) {

    e.preventDefault()

    try {

      await api.post("/tickets/create", {
        title,
        description,
        priority
      })

      alert("Ticket criado com sucesso!")

      navigate("/tickets")

    } catch (error) {

      console.log(error)
      alert("Erro ao criar ticket")

    }

  }

  return (

    <div>

      <h1>Criar Ticket</h1>

      <form onSubmit={handleCreate}>

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="baixa">Baixa</option>
          <option value="media">Média</option>
          <option value="alta">Alta</option>
        </select>

        <button type="submit">Criar Ticket</button>

      </form>

    </div>

  )

}

export default CreateTicket