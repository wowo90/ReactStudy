import Alert from 'react-bootstrap/Alert'
import React, { useState } from 'react';
import { Button } from "react-bootstrap";

function AlertText() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}


export default AlertText;

/*
    Minty  Alert
    <div class="alert alert-dismissible alert-secondary">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
   </div>  
*/