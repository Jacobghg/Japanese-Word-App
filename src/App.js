import './App.css';
import { auth, db } from './firebase';
import AddWord from './AddWord';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h1>Japanese Vocab Tracker</h1>
      </header>
      <main>
        <AddWord />
      </main>
    </div>
  );
}

export default App;