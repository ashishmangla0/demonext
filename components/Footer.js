const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                            <div className="footer__top-img">
                                <img src="logo-light.png" alt="" />
                                <p>
                            Our team takes over everything, from an idea and concept development to realization.
                            </p>
                            </div>
                            

                            </div>
                            <div className="col-lg-2 offset-lg-1">
                                <h5 className="footer__title">Useful Links</h5>
                            </div>
                            <div className="col-lg-2">
                                <h5 className="footer__title">call</h5>
                            </div>
                            <div className="col-lg-2">
                                <h5 className="footer__title">write</h5>
                            </div>
                            <div className="col-lg-2">
                                <h5 className="footer__title">visit</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copy">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                            <p className="footer__copy-content">
                                    &copy; {new Date().getFullYear()} All right reserved.
                               </p>
                            </div>
                            <div className="col-lg-6">
                            <p className="footer__copy-content footer__copy-content--right">
                                    Made with Love in <a href="http://itvision.co.in/" target="_blank" className="footer__link-developer">ITvision</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
           </footer>
        </>
    )

}
export default Footer

