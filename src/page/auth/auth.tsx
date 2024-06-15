import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { api } from "../../service/axios"
import { useNavigate } from "react-router-dom"

export function Auth() {
  const { setToken } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (document.querySelector("input[type=email]") as HTMLInputElement).value
    const password = (document.querySelector("input[type=password]") as HTMLInputElement).value

    await logIn(email, password)
  }

  async function logIn(email: string, password: string) {
    const response = await api.post('/users/login', {
      email,
      password
    })
    setToken(response.data.token)
    navigate('/home')
  }
  return (
    <main className="bg-gray-200 h-screen w-full">
      <div className="w-full h-full flex justify-center items-center">
        <form onSubmit={handleSubmit} className="min-w-96 py-10 flex flex-col items-center gap-3 bg-white rounded-lg shadow-xl">
          <h1 className="text-2xl">Login</h1>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input className="rounded-lg w-72 px-3 py-2 outline outline-1 outline-gray-300" type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Senha</label>
            <input className="rounded-lg w-72 px-3 py-2 outline outline-1 outline-gray-300" type="password" name="password" id="password" placeholder="Senha" />
          </div>
          <a href="/register" className="text-gray-500 text-sm">Não tem conta? Crie aqui</a>
          <button className="bg-blue-400 px-7 py-1.5 rounded-lg hover:scale-105 ease-in-out duration-300" type="submit">Entrar</button>
        </form>
      </div>
    </main>
  )
}