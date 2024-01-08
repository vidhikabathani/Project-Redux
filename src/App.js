import './App.css';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRouter from './router/AllRouter';

function App() {
  return (
    <div>
      <Navbarr/>
      <AllRouter/>
    </div>
  )
}

export default App;
