import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="h3">${product.price}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default Product;
