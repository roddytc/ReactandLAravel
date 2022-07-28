import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListInteresado from './components/ListInteresado';
import CrearInteresado from './components/CrearInteresado';
import EditarInteresado from './components/EditarInteresado';
import EliminarInteresado from './components/EliminarInteresado';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListInteresado />} />  
          <Route path='/crear' element={<CrearInteresado />} />  
          <Route path='/editar/:id' element={<EditarInteresado />} />
          <Route path='/eliminar/:id' element={<EliminarInteresado />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
