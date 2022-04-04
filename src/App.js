import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout/Layout";

function App() {
    return <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='blog' element={<BlogPage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </>
}

export default App;
