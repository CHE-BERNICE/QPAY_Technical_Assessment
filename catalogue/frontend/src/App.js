import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/createProduct" element={<CreateProductPage />} />
          <Route path="/viewProduct/:id" element={<ViewProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
