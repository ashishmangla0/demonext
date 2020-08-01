import SocialMedia from './SocialMedia';
import Link from 'next/link'
const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <div className="container">
                        <Link href="/" className="navbar-brand">
                            <a>Logo</a>
                        </Link>
                        <div class="collapse navbar-collapse" id="navbarsExample07">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown07">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                            <SocialMedia class="list list--nostyle list--social-media header__social" itemClass="header__social-item" />    
                        </div>




                        
                        
                        </div>
                </nav>
            </header>

        </>
    )

}
export default Header