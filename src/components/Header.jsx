import logoWhite from '../images/Logo_white.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoWhite} alt="белый логотип" />
        </header>
    );
}

export default Header;