import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'


function App() {
  return (
    <div className="App m-0">
      <Header />
      <Navbar />
      <MainBody />
    </div>
  );
}

export default App;
