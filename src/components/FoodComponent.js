const RenderIngredients = ({ingredients}) => {
    if (ingredients){
        return (
            <div>
                {ingredients.map(ingredient => {
                    return (
                        <li>{ingredient.quantity} of {ingredient.name}</li>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

const RenderSteps = ({steps}) => {
    if(steps){
        return (
            <div>
                {steps.map(step => {
                    return (
                        <p>{step}</p>
                    )
                })}
            </div>
        )
    } else {
        return <div></div>
    }
}

const FoodComponent = (props) => {
    return (
        <div className="container position-relative faded-background p-4 rounded text-light">
            <div className="row mx-auto text-center my-auto justify-content-between">
                <button className="btn btn-outline-light mb-4" onClick={window.print}>Print Recipe</button>
                <p><span className="small font-bold">Updated:</span> {props.foodInfo.updated}</p>
            </div>
            <div className="row">
                <img className="col-md-5 rendered-food" src={props.foodInfo.imageURL} alt={props.foodInfo.name} style={{width: "30rem"}}/>
                <div className="col-md-5 mt-3">
                    <h5>Ingredients</h5>
                    <hr className="w-50"/>
                    <div className="d-flex justify-content-center">
                        <div className="text-left mx-auto">
                            <ul className="list-unstyled">
                                <RenderIngredients ingredients={props.foodInfo.ingredients} />
                            </ul>
                            <h5 className="text-center">Directions</h5>
                            <hr className="w-50"/>
                            <RenderSteps steps={props.foodInfo.steps} />        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default FoodComponent;