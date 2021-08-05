import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TaskForm(props) {
  const [taskState, setTask] = useState();

  const postData = (e) => {
    e.preventDefault();
    props.getData(taskState);
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Town or City"
            onChange={(e) => setTask(e.target.value)}
          />
          <Form.Text className="text-muted">
            Insert New Address or Town
          </Form.Text>
        </Form.Group>

        <Button
          variant="outline-success"
          type="submit"
          onClick={(e) => postData(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
