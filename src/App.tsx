import { Routes, Route, Navigate } from "react-router-dom";
import DashboardScreen from "./pages/Dashboard";
import ProfileScreen from "./pages/Profile";
import "./App.css";


export default function App() {
return (
<Routes>
<Route path="/" element={<Navigate to="/dashboard" replace />} />
<Route path="/dashboard" element={<DashboardScreen />} />
<Route path="/profile" element={<ProfileScreen />} />
</Routes>
);
}