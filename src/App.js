import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMovie from './Components/NavMovie';
import ListMovie from './Components/ListMovies';

function App() {
  return (
    <div>
      <NavMovie/>
      <ListMovie/>
    </div>
  );
}

export default App;
