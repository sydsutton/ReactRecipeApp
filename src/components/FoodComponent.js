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
                        <li className="my-2">{step}</li>
                    )
                })}
            </div>
        )
    } else {
        return <div></div>
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

const FoodComponent = (props) => {
    return (
        <div className="container position-relative faded-background p-4 rounded text-light">
            <div className="row mx-auto text-center my-auto justify-content-between">
                <div className="mb-4 d-flex flex-row">
                    <button className="btn btn-sm btn-outline-secondary mr-4" onClick={window.print}>Print Recipe</button>
                    <SaveRecipe name={props.foodInfo.name}/>
                </div>
                <h3 className="text-center mx-auto">{props.foodInfo.name}</h3>
                <p><span className="small font-bold">Updated:</span> {props.foodInfo.updated}</p>
            </div>
            <hr className="mt-n1 mb-4 bg-dark"/>
            <div className="row">
                <img className="col-md-5 rendered-food mx-auto mb-4" src={props.foodInfo.imageURL} alt={props.foodInfo.name} style={{width: "30rem"}}/>
                <div className="col-md-5">
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
            </div>
        </div>
    )
}
 
export default FoodComponent;