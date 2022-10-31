import React from 'react';
import Card from "react-bootstrap/Card";

class AboutCard extends React.Component {
 render() {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src= {this.props.img_src} />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
         {this.props.words}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
}

export default AboutCard;
