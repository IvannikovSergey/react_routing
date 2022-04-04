import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return <>
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
        </header>
        <main className='container'>
            <Outlet/>
        </main>
        <footer className='container'>2022</footer>
    </>
}

export default Layout