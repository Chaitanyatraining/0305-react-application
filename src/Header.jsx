import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/counterapp' class="nav-link">Counter App</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/lifecycle' class="nav-link">LifeCycle Methods</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/pagination' class="nav-link">Pagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/contactUs' class="nav-link">ContactUs</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/usestatecounter' class="nav-link">Counter App</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/funcuserdata' class="nav-link">userData</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/funcpagination' class="nav-link">FuncPagination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/userefhook' class="nav-link">useRefHook</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/usecontexthook' class="nav-link">usecontexthook</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header