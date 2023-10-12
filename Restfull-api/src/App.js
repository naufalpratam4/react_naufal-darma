import TablePage from "./Components/TablePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAddProduct from "./Components/FormAddProduct";

const App = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" exact element={<TablePage />} />
          <Route path="/addproduct" element={<FormAddProduct />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
