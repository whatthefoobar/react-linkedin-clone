import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      {/*v App Body */}
      <div className="app__body">
        <Sidebar />
      </div>
      {/*1 Sidebar */}
      {/*2 Feed */}
      {/*3 Widget -Right side */}
    </div>
  );
}

export default App;
