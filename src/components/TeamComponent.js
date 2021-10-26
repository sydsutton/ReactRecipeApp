import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardImgOverlay,
    CardTitle,
} from "reactstrap"


const RenderTeam = ({teamInfo}) => {
    return (
        teamInfo.map(team => {
            if(team.name){
                return (
                    <div className="mx-2">
                        <Card className="mb-3 mx-auto rounded bg-transparent" style={{width: "13rem", height: "20rem"}}>   
                            <CardImg src={team.img} alt={team.name} className="cover"/>
                            <CardImgOverlay className="d-flex flex-column justify-content-end p-0">
                                <CardTitle><h4 className="dark-background p-1 mb-n2 text-warning">{team.name}</h4></CardTitle>
                                <CardText className="small dark-background p-1" >
                                    <h6>{team.role}</h6>
                                    <div>{team.email}</div>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                )
            } else {
                return <div/>
            }
        })
    )
}

const RenderDesc = ({teamInfo}) => {
    return (
        teamInfo.map(team => {
            if(team.description){
                return (
                    <Card className="bg-transparent">
                        <CardImg className="cover" src={team.descriptionImg} alt="Cooking" style={{height: "40rem"}}/>
                        <CardImgOverlay className="d-flex flex-column justify-content-center p-0">
                            <p className="dark-background text-light py-4 px-3 rounded my-3">{team.description}</p>
                        </CardImgOverlay>
                    </Card> 
                )
            } else {
                return <div/>
            }
        })
    )
}

function TeamComponent(props){
    return (
        <div className="container">
            <div className="row mb-4 gradient-background">
                <div className="col py-2 rounded">
                    <h2 className="text-warning">Meet Our Team</h2>
                    <h6 className="text-light">These world-renowned chefs make the recipes that you love<br/> easy enough for even you to make (no offense)</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 text-center w-50 text-light d-flex flex-wrap mx-auto">
                    <RenderTeam teamInfo={props.teamInfo} />
                </div>
                <div className="col-sm-6">
                    <RenderDesc teamInfo={props.teamInfo} />
                </div>
            </div>
        </div>
    );
}

export default TeamComponent;