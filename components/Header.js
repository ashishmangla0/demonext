import React, {  useEffect, useState } from 'react';
import SocialMedia from './SocialMedia';
import Link from 'next/link'

const Header = (props) => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll =() =>{
        const header  = document.querySelector('.header');
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add('header--fixed');
        }
        else{
            header.classList.remove('header--fixed');
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        //   cleanup the listeners on unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
        <>
            <header className="header">
                <nav className="header__navbar navbar navbar-expand-lg">
                    <div className="container">
                        <Link href="/" >
                            <a className="navbar-brand">Logo</a>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarsExample07">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link href="/">
                                        <a className="nav-link">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link href="/" >
                                <a className="nav-link">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link href="/" >
                                <a className="nav-link">Home</a>
                                    </Link>
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