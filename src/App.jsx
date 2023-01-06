import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';

import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import NewProcedure from './components/pages/NewProcedure';
import Procedure from './components/pages/Procedure';

// para iniciar o projeto -> npm start
// abrir outro console e -> npm rum backend
// um irá rodar o projeto e o outro o banco de dados do backend

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/procedure" element={<Procedure />} />
          <Route path="/newprocedure" element={<NewProcedure />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
