import {Link} from "react-router-dom"

const FooterComponent = () => {
    return (
        <div className="footer position-absolute w-100 bg-light py-2 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-unstyled">
                            <li className="mx-2"><Link to="/menu">Menu</Link></li>
                            <li className="mx-2"><Link to="/team">Our Team</Link></li>
                            <li className="mx-2"><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-8">
                        <h5>Follow Us On</h5>
                        <a className="btn btn-social-icon btn-instagram" href="instagram.com"><i className="fas fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent