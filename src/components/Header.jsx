import Logo_white from '../images/Logo_white.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={Logo_white} alt="белый логотип" />
        </header>
    );
}

export default Header;