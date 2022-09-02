import logo from './logo.svg';
import './BaseUI.css';
import './App.css';
import Mainfile from './components/Mainfile.js'
import Second from './components/Second.js'
import Third from './components/Third.js'
import Fourth from './components/Fourth.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Q1. Create a list of fruits and print it using map.</h3>
      <Mainfile />
      <h3>Q2. Make a Products Table which should work as:  1. Fill form and submit values. 2. Product should add in product list and display in list below add product form</h3>
      <Second />
      <h3>Q3. Move items between two groups as shown in attachment.</h3>
      <Third />
      <h3>Q4. Using class components create a username list as shown.</h3>
      <Fourth />
      </header>
    </div>
  );
}

export default App;
