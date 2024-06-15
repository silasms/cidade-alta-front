import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { AuthProvider } from "./context/authContext";

export function App() {
  return (
    <div className="h-screen max-h-full">
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}