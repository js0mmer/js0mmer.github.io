function Header({ children }) {
    return (
      <header className="jumbotron">
        <h1>{children}</h1>
      </header>
    );
};

export default Header;