import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return <>
    <h1>Notfound page</h1>
        <p>This is a test Notfoundpage <Link to="/">Home</Link></p>
    </>
}

export default NotFoundPage