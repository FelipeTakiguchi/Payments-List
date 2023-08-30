import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { PagamentoProvider } from "./context/Pagamentos";
import AddPagamento from "./components/AddPagamento";
import Historico from "./components/Historico";

function App() {
  return (
    <>
      <PagamentoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/historico' element={<Historico />} />
          <Route path='/addPagamento' element={<AddPagamento />} />
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
      </PagamentoProvider>
    </>
  );
}

export default App;