import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 M.E. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
