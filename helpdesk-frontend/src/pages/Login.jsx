import { useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleLogin(e) {

    e.preventDefault()

    try {

      const response = await api.post("/auth/login", {
        email,
        password
      })

      console.log(response.data)

      navigate("/tickets")

    } catch (error) {

      console.log(error)
      alert("Erro no login")

    }

  }

  return (

    <div>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

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

        <button type="submit">Entrar</button>

      </form>

    </div>

  )

}

export default Login