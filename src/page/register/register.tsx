import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { api } from '../../service/axios';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export function Register() {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (document.querySelector("input[type=email]") as HTMLInputElement).value
    const password = (document.querySelector("input[type=password]") as HTMLInputElement).value
    const name = (document.querySelector("input[type=text]") as HTMLInputElement).value

    await register(email, password, name)
  }

  async function register(email: string, password: string, name: string) {
    try {
      await api.post('/users', {
        email,
        password,
        name
      })
      navigate('/login')
      toast.success('Registrado com sucesso!')
    } catch(err) {
      if (err instanceof AxiosError)
        toast.error(err.message)
    }
  }
  

  return (
    <main className="bg-gray-200 h-screen w-full">
      <div className="w-full h-full flex justify-center items-center">
        <form onSubmit={handleSubmit} className="min-w-96 py-10 flex flex-col items-center gap-3 bg-white rounded-lg shadow-xl">
          <div className='flex justify-start w-full' style={{marginTop: '-35px', marginLeft: '10px'}}>
            <a href="/login">
              <ArrowBackIcon style={{fill: '#00000050'}}/>
            </a>
          </div>
          <h1 className="text-2xl">Registrar</h1>
          <div className="flex flex-col">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" placeholder="Nome" className="rounded-lg w-72 px-3 py-2 outline outline-1 outline-gray-300" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input className="rounded-lg w-72 px-3 py-2 outline outline-1 outline-gray-300" type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Senha</label>
            <input className="rounded-lg w-72 px-3 py-2 outline outline-1 outline-gray-300" type="password" name="password" id="password" placeholder="Senha" />
          </div>
            <button className="bg-blue-400 px-7 py-1.5 rounded-lg hover:scale-105 ease-in-out duration-300" type='submit'>Registrar</button>
        </form>
      </div>
    </main>
  )
}