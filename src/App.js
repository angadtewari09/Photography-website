import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import './StyleSheet/Header.css'
import './StyleSheet/Footer.css'
import './StyleSheet/Main.css'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Main/> 
        <Footer/>
      </div>
    </div>
  );
}

export default App;
