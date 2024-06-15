import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../page/auth/auth";
import { Register } from "../page/register/register";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<></>}/>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}