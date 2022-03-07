import React from "react";
import { Button, Card } from "react-bootstrap";

const Produits = () => {
  const listproduct = [
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  const clickme = (el) => {
    alert(`the product name is ${el}`);
  };
  return (
    <div>
      <h1>Produits</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {listproduct.map((produit) => (
          <Card
            onClick={() => clickme(produit.name)}
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={produit.imgSrc} />
            <Card.Body>
              <Card.Title>{produit.name} </Card.Title>
              <Card.Text>{produit.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Produits;
