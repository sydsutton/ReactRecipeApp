import React, { Component } from 'react';
import DATA from "../DATA"
import CONTACTS from "../CONTACTS"
import Navbar from "./NavbarComponent"
import Footer from "./FooterComponent"
import Team from "./TeamComponent"
import FoodComponent from "./FoodComponent"
import {
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardTitle,
    Jumbotron
} from "reactstrap"
import {Route, Switch, Redirect, Link} from "react-router-dom"

class MainComponent extends Component {
    constructor(){
        super()
        this.state = {
            data: DATA,
            contacts: CONTACTS,
        }
    }

    render(){
        const dataMapped = this.state.data.map(food => {
            return (
                    <Link to={`/recipe/${food.id}`} className="mx-auto scale">
                        <Card className=" m-2 faded-background rounded-circle shadow">
                            <CardImg className="rounded-circle food-image mx-auto" src={food.imageURL} alt={food.name}/>
                            <CardImgOverlay>
                                <CardTitle className="bg-light w-100 text-dark rounded shadow"><h5>{food.name}</h5></CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Link>
            )
        })
        const HomePage = () => {
            return (
                <div>
                    <Jumbotron className="jumbotron mt-n5 position-relative"/>
                    <div className="position-absolute text-dark bg-light py-4 w-100 shadow-sm" style={{top: "20%"}}>
                        <h3>Cook it Yourself!</h3>
                        <p className="small">Based on recipes that we actually use in our own world-class restaurants, <br/>give your family a taste of what it's like to go out to a five-star restaurant without having to leave your own home!<br/>Choose from any of the ever-changing recipes below. Leave suggestions, reviews,<br/>and share your stories on our social media!</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            {dataMapped}
                        </div>
                    </div>
                </div>
            )
        }

        const FoodItem = ({match}) => {
            return (
                <FoodComponent foodInfo={this.state.data.filter(food => food.id === +match.params.foodId)[0]} />
            )
        }

        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/menu" component={HomePage} />
                    <Route path="/recipe/:foodId" component={FoodItem} />
                    <Route path="/team" render={() => <Team teamInfo={this.state.contacts}/>}/>
                    <Redirect to="/menu"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default MainComponent;