import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TaskForm() {
  const [taskState, setTask] = useState();

  async function postData(e) {
    e.preventDefault();
    await fetch("https://gsmtasks.com/api/tasks/tasks/", {
      method: "POST",
      headers: {
        authorization: "Token 216bb502dbf825738fff6c555ae7e9c339633a70",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account:
          "https://gsmtasks.com/api/tasks/accounts/98a978a0-97a1-4d25-a1c6-a3207230353f/",
        address: {
          raw_address: taskState,
        },
        category: "assignment",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json.address.raw_address))
      .catch((error) => console.log(error));
  }

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
