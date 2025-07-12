import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Join from './Pages/Join';
import Members from './Pages/Members';
import Events from './Pages/Events';
import NotFound from './Pages/NotFound';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <> 
    <CssBaseline>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sobre-nos' element={<Members />} />
          <Route path='/eventos' element={<Events />} />
          <Route path='/participe' element={<Join />} />
          <Route path='/contato' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </CssBaseline>
  </>
  );
}

export default App;
