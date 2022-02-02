export default function Header({
    onNavigationChange
}){
    const onHeaderClick = (e) => {
        e.preventDefault();

        if (e.target.tagName === 'A') {
            let url = new URL(e.target.href);
            onNavigationChange(url.pathname);
        }
    };

    return(
        <header onClick={onHeaderClick}>
            <h1><a className="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/games">All games</a>
                <div id="user">
                    <a href="/game-create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
};