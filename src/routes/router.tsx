import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../page/auth/auth";
import { Register } from "../page/register/register";
import { Home } from "../page/home/home";
import { Header } from "../components/header";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />}/>
      <Route path="/register" element={<Register />}/>
      <Route element={<Header />}>
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  )
}