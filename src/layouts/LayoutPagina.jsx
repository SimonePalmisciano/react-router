

function LayoutPagina() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <span className="navbar-brand fw-bold">React Router</span>
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link">
                                    Home Page
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/chi-siamo" className="nav-link">
                                    Chi Siamo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/prodotti" className="nav-link">
                                    Prodotti
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>

            </main>
            <footer className="bg-dark text-white text-center p-3">
                <p>&copy; 2026 Simone Palmisciano S.P.A</p>
            </footer>
        </>
    )
}
export default LayoutPagina