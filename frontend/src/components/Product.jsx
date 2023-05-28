import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
          <Card.Body>
            <a href={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </a>
            <Card.Text as="h3">${product.price}</Card.Text>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
};

export default Product;
