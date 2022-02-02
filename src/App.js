import Header from './components/Header'
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import GameCreate from './components/GameCreate';
import GameEdit from './components/GameEdit';
import GameDetails from './components/GameDetails';
import GameCatalog from './components/GameCatalog';

function App() {
  return (
    <div id="box">
      <Header/>
      <main id="main-content">      
        <WelcomeWorld/>
        <Login/>
        <Register/>
        <GameCreate/>
        <GameEdit/>
        <GameDetails/>
        <GameCatalog/>
      </main>
    </div>
  );
}

export default App;