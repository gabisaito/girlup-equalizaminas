import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Join from './Pages/Join';
import Members from './Pages/Members';
import Events from './Pages/Events';
import NotFound from './Pages/NotFound';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          '@font-face': {
            fontFamily: 'Coolvetica',
            src: `url('/fonts/Coolvetica.woff2') format('woff2')`,
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          body: {
            fontFamily: 'Coolvetica, sans-serif',
          },
        }}
      />
      <CssBaseline />
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
    </>
  );
}

export default App;
