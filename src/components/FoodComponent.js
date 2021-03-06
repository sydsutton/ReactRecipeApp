import React, {Component} from "react"
import {
    Modal, 
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Card,
    CardHeader
} from "reactstrap"

class ReviewModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModaOpen: false,
            stars: "",
            rating: "",
            name: "",
            email: "",
            starsError: "",
            ratingError: ""
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    
    validate = () => {
        let starsError = ""
        let ratingError = ""

        if(!this.state.stars){
            starsError = "Sorry, but you need to give it at least ONE star"
            document.getElementById('stars').style.borderColor = "red"
        } else {
            document.getElementById('stars').style.borderColor = null
        }

        if(!this.state.rating){
            ratingError = "We'd love to hear your reasoning!"
            document.getElementById('rating').style.borderColor = "red"
        } else {
            document.getElementById('rating').style.borderColor = null
        }

        if(starsError || ratingError){
            this.setState({starsError, ratingError})
            return false
        } 

        return true
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const isValid = this.validate()

        if(isValid){
            alert(`
            Thank you for your review!
            You gave this recipe ${this.state.stars} because "${this.state.rating}".
            Your name is ${this.state.name}, and your email is ${this.state.email}.
                    `)
            
            this.setState({
                stars: "",
                rating: "",
                name: "",
                email: "",
                starsEror: "",
                ratingError: ""
            })
            this.toggleModal()
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div>
                <p><button onClick={this.toggleModal} className="btn badge badge-pill badge-primary border-transparent p-2 my-2" style={{border: "none"}}>Write a review</button></p>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="w-75 mx-auto">
                    <ModalHeader className="text-dark" toggle={this.toggleModal}>
                        <h3>Write a review about this recipe</h3>
                    </ModalHeader>
                    <ModalBody>
                        <Form className="small" onSubmit={this.handleSubmit}>
                        <div className="text-danger text-center">{this.state.starsError}</div>
                            <FormGroup className="d-flex flex-row">
                                <Label for="stars">Number of stars</Label>
                                <Input 
                                    type="select" 
                                    name="stars" 
                                    id="stars"
                                    value={this.state.stars}
                                    onChange={this.handleChange}
                                >
                                    <option/>
                                    <option>1 star</option>
                                    <option>2 stars</option>
                                    <option>3 stars</option>
                                    <option>4 stars</option>
                                    <option>5 stars</option>
                                </Input>
                            </FormGroup>
                            <div className="text-danger text-center">{this.state.ratingError}</div>
                            <FormGroup className="d-flex flex-row">
                                <Label for="rating">Why did you give it {this.state.stars}?</Label>
                                <Input 
                                    type="textarea" 
                                    id="rating" 
                                    name="rating"
                                    onChange={this.handleChange}
                                    value={this.state.rating}
                                />
                            </FormGroup>
                            <FormGroup className="text-center">
                                <Label>------ If you fill the information out below, we may contact you ------</Label>
                            </FormGroup>
                            <FormGroup className="d-flex flex-row">
                                <Label for="name">Your name (optional)</Label>
                                <Input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </FormGroup>
                            <FormGroup className="d-flex flex-row">
                                <Label for="email">Your email address (optional)</Label>
                                <Input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </FormGroup>
                            <div className="mx-auto text-center">
                                <Button type="submit" className="btn btn-warning mt-3">Submit Review</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const RenderIngredients = ({ingredients}) => {
    if (ingredients){
        return (
            <div>
                {ingredients.map(ingredient => {
                    return (
                        <div>
                            <input type="checkbox" className="mx-2"/>{ingredient.quantity}<span className="text-warning"> | </span>{ingredient.name}
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return <div/>
    }
}

const RenderSteps = ({steps}) => {
    if(steps){
        return (
            <div>
                {steps.map(step => {
                    return (
                        <li className="my-2">{step}</li>
                    )
                })}
            </div>
        )
    } else {
        return <div/>
    }
}

const SaveRecipe = ({name}) => {

    const handleClick = () => {
        alert(`${name} recipe saved!`)
    }
    return (
        <div>
            <button className="btn btn-sm btn-warning d-inline-block" onClick={handleClick}>Save Recipe</button>
        </div>
    )
}

const DisplayStars = ({stars, reviews}) => {
    let starsArr = []
    let emptyStars = []
    for(let i = 1; i <= stars; i++){
        starsArr.push(<i className="fa fa-star text-warning"/>)
    }
    for(let i= 1; i <= (5 - stars); i++){
        emptyStars.push(<i className="fa fa-star text-secondary mr-1" />)
    }
    return (
        <div>
            <p className="mb-0">{starsArr}{emptyStars} out of <a href="/">{reviews} reviews </a></p>
            <ReviewModal />
        </div>
    )
}

const RenderReviews = ({reviews}) => {
    return (
        <div>
            {reviews.map(review => {
                    let starsArr = []
                    let emptyStars = []
                    for(let i = 1; i <= review.stars; i++){
                        starsArr.push(<i className="fa fa-star text-warning"/>)
                    }
                    for(let i= 1; i <= (5 - review.stars); i++){
                        emptyStars.push(<i className="fa fa-star text-secondary mr-1" />)
                    }
                return (
                    <li>
                        <Card className="card-light text-dark my-4">
                            <CardHeader className="text-left">
                                <p>"{review.review}"</p>
                                <div>
                                    <div className="d-flex flex-row">
                                        <img className="rounded-circle cover profile-image" src={review.image} alt={review.first_name} />
                                        <h5 className="mt-4 ml-2">- {review.first_name}</h5>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <p>{starsArr}{emptyStars}</p>
                                        <p className="small ml-4">{review.date}</p>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </li>
                )
            })}
        </div>
    )
}

const FoodComponent = (props) => {
    return (
        <div className="container position-relative faded-background p-4 rounded text-light">
            <div className="row mx-auto text-center my-auto justify-content-between">
                <div className="col-md-7 d-flex flex-column text-center mx-auto">
                    <h3 className="text-center mx-auto">{props.foodInfo.name}</h3>
                    <DisplayStars stars={props.foodInfo.stars} reviews={props.foodInfo.reviews}/>
                </div>
                <div className="col-md-5">
                    <p className="small"><span className="small font-bold">Updated:</span> {props.foodInfo.updated}</p>
                    <div className="mb-4 d-flex flex-row align-items-center justify-content-center">
                        <button className="btn btn-sm btn-outline-secondary mr-4" onClick={window.print}>Print Recipe</button>
                        <SaveRecipe name={props.foodInfo.name}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 d-flex flex-column align-items-center">
                    <img className="rendered-food mx-auto mb-4 img-fluid" src={props.foodInfo.imageURL} alt={props.foodInfo.name} style={{width: "30rem"}}/>
                </div>
                <div className="col-lg-5">
                    <h5 className="text-warning">Ingredients</h5>
                    <hr className="bg-warning"/>
                    <ul className="list-unstyled text-left">
                        <RenderIngredients ingredients={props.foodInfo.ingredients} />
                    </ul>
                    <h5 className="text-center mt-5 text-warning">Directions</h5>
                    <hr className="bg-warning"/>
                    <ol className="text-left">
                        <RenderSteps steps={props.foodInfo.steps} />   
                    </ol>    
                </div>
                <div className="col-md-6 mx-auto">
                <h4 className="mt-5 text-warning">Reviews</h4>
                    <hr className="bg-warning mb-5" />
                    <ul className="list-unstyled">
                        <RenderReviews reviews={props.reviews}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default FoodComponent;