import Header from './components/Header'
import WelcomeWorld from './components/WelcomeWorld';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';
import GameDetails from './components/GameDetails';
import CatalogPage from './components/CatalogPage';

function App() {
  return (
    <div id="box">
      <Header/>
      <WelcomeWorld/>
      <LoginPage/>
      <RegisterPage/>
      <CreatePage/>
      <EditPage/>
      <GameDetails/>
      <CatalogPage/>
    </div>
  );
}

export default App;