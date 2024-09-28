import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Product from "./routes/Product";
import Pricing from "./routes/Pricing";
import AppLayout from "./routes/AppLayout";
import Login from "./routes/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
