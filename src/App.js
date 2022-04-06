import './App.css';
import EditMovie from './components/EditMovie'
import AddMovie from './components/AddMovie';
import ListMovies from './components/ListMovies'
import RealtimeMovies from './components/RealtimeMovies';
function App() {
  return (
    <div className="App">
      <header className ="App-header">
        <h3>Movie Selector</h3>
      </header>
      <main>
        <RealtimeMovies />
  
        <AddMovie />
        <EditMovie />
      </main>
    </div>
  );
}

export default App;
