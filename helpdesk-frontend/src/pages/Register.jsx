import { useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleRegister(e) {

    e.preventDefault()

    try {

      await api.post("/auth/register", {
        name,
        email,
        password
      })

      alert("Usuário criado com sucesso!")

      navigate("/")

    } catch (error) {

      console.log(error)
      alert("Erro ao cadastrar usuário")

    }

  }

  return (

    <div>

      <h1>Cadastrar Usuário</h1>

      <form onSubmit={handleRegister}>

        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </form>

    </div>

  )

}

export default Register