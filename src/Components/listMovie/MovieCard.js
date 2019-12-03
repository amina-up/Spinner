import React from "react";
import "./Card.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import StarRating from "../navBarSearch/StartRating";

const CardMovie = ({ name, src, rating }) => {
  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle>
            <StarRating count={rating} isClicked={false} />
          </CardTitle>
        </CardBody>
        <img width="100%" src={src} alt="Card image cap" className="imgs" />
        <CardBody>
          <CardText>
            <h3 style={{ color: "#D68910 " }}>{name}</h3>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};
export default CardMovie;
