import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")

    return(
        <>
        <Button variant="outline-success" onClick={handleShow}>
          +
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter image" />             
            </Form.Group>

           
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{setMovies([...movies,{name,description,image}]);handleClose()}}>
              Add movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddMovie