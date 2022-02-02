import {useState} from 'react'
import Header from './components/Header'
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import GameCreate from './components/GameCreate';
import GameEdit from './components/GameEdit';
import GameDetails from './components/GameDetails';
import GameCatalog from './components/GameCatalog';
import ErrorPage from './components/ErrorPage';

function App() {
    const[page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld/>,
        '/login': <Login/>,
        '/register': <Register/>,
        '/logout': <WelcomeWorld/>,
        '/games': <GameCatalog/>,
        '/game-create': <GameCreate/>,
        '/game-edit': <GameEdit/>,
        '/game-details': <GameDetails/>,
    };

    const navigationHandler = (path) => {
        setPage(path);
    };

    return (
        <div id="box">
            <Header onNavigationChange={navigationHandler}/>
            <main id="main-content">      
                {routes[page] || <ErrorPage/>}
            </main>
        </div>
    );
}

export default App;