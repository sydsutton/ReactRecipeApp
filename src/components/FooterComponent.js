import {Link} from "react-router-dom"

const FooterComponent = () => {
    return (
        <div className="footer position-absolute w-100 bg-light py-2 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 mx-auto">
                        <h4>Follow us</h4>
                        <a className="btn btn-social-icon btn-instagram" href="instagram.com"><i className="fa fa-instagram fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="facebook.com"><i className="fa fa-facebook fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent