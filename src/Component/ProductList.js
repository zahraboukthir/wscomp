import React from "react";
import { Table } from "react-bootstrap";

const ProductList = () => {
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
      ProductList
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Photo</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {listproduct.map((produit) => (
            <tr>
              <td>
                <button onClick={() => clickme(produit.name)}>Details</button>
              </td>
              <td>{produit.name}</td>
              <td>
                <img src={produit.imgSrc} alt="" srcset="" />
              </td>
              <td>{produit.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
