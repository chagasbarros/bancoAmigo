import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Extrato } from './components/Extrato';
import { PagarConta } from './components/PagarConta';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/extrato" element={<Extrato />} />
          <Route path="/pagar-conta" element={<PagarConta />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
