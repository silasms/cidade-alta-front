import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

/**
 * Default layout for all pages, EXCLUDE auth pages.
 */
export function Header() {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    if (localUser === null) return
    setUser(JSON.parse(localUser))
  }, [])

  const logout = () => {
    navigate('../login');
  };
  return (
    <div className="w-full h-full bg-slate-100 relative min-w-[500px]">
      <header className="w-full fixed flex justify-between items-center max-[500px]:px-[2%] min-[500px]:px-10 py-4 bg-white z-10 drop-shadow-sm min-w-[500px]">
        <div className="flex text-sm text-gray-900">
          <span className="mr-2">Olá {user.name}</span> {'|'}
          <span
            className="font-bold ml-2 cursor-pointer hover:underline"
            onClick={logout}
          >
            Sair
          </span>
        </div>
      </header>
      <div className="relative w-full h-full pt-[52px] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
