const RenderIngredients = ({ingredients}) => {
    if (ingredients){
        return (
            <div>
                {ingredients.map(ingredient => {
                    return (
                        <div>
                            <input type="checkbox" className="mx-2"/>{ingredient.quantity} | {ingredient.name}
                        </div>
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
                        <li>{step}</li>
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
                <img className="col-md-5 rendered-food mx-auto mb-4" src={props.foodInfo.imageURL} alt={props.foodInfo.name} style={{width: "30rem"}}/>
                <div className="col-md-5">
                    <h5>Ingredients</h5>
                    <hr className="bg-light"/>
                    <ul className="list-unstyled text-left">
                        <RenderIngredients ingredients={props.foodInfo.ingredients} />
                    </ul>
                    <h5 className="text-center mt-5">Directions</h5>
                    <hr className="bg-light"/>
                    <ol className="text-left">
                        <RenderSteps steps={props.foodInfo.steps} />    
                    </ol>    
                </div>
            </div>
        </div>
    )
}
 
export default FoodComponent;