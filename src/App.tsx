import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { AuthProvider } from "./context/authContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <div className="h-screen max-h-full">
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}