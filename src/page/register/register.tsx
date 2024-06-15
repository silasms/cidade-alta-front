import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Register() {
  return (
    <main className="bg-gray-200 h-screen w-full">
      <div className="w-full h-full flex justify-center items-center">
        <form action="" className="min-w-96 py-10 flex flex-col items-center gap-3 bg-white rounded-lg shadow-xl">
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
            <button className="bg-blue-400 px-7 py-1.5 rounded-lg hover:scale-105 ease-in-out duration-300">Registrar</button>
        </form>
      </div>
    </main>
  )
}