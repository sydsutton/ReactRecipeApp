import React from 'react';
import {
    Card,
    CardImg,
    CardText
} from "reactstrap"

const RenderTeam = ({teamInfo}) => {
    return (
            teamInfo.map(team => {
                if(team.name){
                    return (
                        <Card className="my-3 faded-background mx-auto rounded p-2" style={{width: "10rem"}}>   
                            <CardImg src={team.img} alt={team.name} className="card-img-top cover"/>
                            <CardText>{team.name}</CardText>
                            <CardText>{team.role}</CardText>
                            <CardText>{team.email}</CardText>
                        </Card>
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
                    <p className="faded-background p-3 rounded my-3">{team.description}</p>
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
            <div className="row">
                <div className="col-sm-8 text-center w-50 text-light d-flex flex-wrap mx-auto">
                    <RenderTeam teamInfo={props.teamInfo} />
                </div>
                <div className="col-sm-4 text-light">
                    <RenderDesc teamInfo={props.teamInfo} />
                </div>
            </div>
        </div>
    );
}

export default TeamComponent;