import React from 'react';
import { Button, Container, Row, Col, Offcanvas } from 'react-bootstrap';
import './GroceryListOffcanvas.css'; // 导入CSS文件

const GroceryListOffcanvas = (props) => {
    const { show, handleClose, groceryList, handleRemoveFromGroceryList, handleClearGroceryList } = props;
    return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Grocery List</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="grocery-list">
          <ul>
            {groceryList.map((item, index) => (
              <li key={index}>
                <Container>
                  <Row>
                    <Col md={8} order={1}>
                      {item}
                    </Col>
                    <Col md={3} order={2}>
                      <Button
                        onClick={() => handleRemoveFromGroceryList(item)}
                        variant="primary">
                        Remove
                      </Button>
                    </Col>                      
                  </Row>
                </Container>
              </li>
            ))}
          </ul>
          <div className='center-button'>
            <Button onClick={handleClearGroceryList}>Clear List</Button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default GroceryListOffcanvas;
