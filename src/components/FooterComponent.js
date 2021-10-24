const FooterComponent = () => {
    return (
        <div className="footer position-absolute w-100 bg-light py-2 mt-5 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col mx-auto">
                        <h4 className="text-warning mb-n2">Follow us</h4>
                        <hr className="bg-warning w-50"/>
                        <div className="mt-n2">
                            <a className="btn btn-social-icon btn-instagram text-warning" href="instagram.com"><i className="fa fa-instagram fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-facebook text-warning" href="facebook.com"><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-linkedin text-warning" href="linkedin.com"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a className="btn btn-social-icon btn-twitter text-warning" href="twitter.com"><i className="fa fa-twitter fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent