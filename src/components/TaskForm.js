import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TaskForm() {
  const [taskState, setTask] = useState();

  // I have tried the API in postman too (with and without "token"), but i recive th following erro :
  // "account": [
  //   "“fdd73ab50cf234b45815b34a6339b7ca967601f5” is not a valid UUID."
  // ]
  async function postData(e) {
    e.preventDefault();
    let config = {
      method: "post",
      url: "https://gsmtasks.com/api/tasks/tasks/",
      body: JSON.stringify({
        acount:
          "https://gsmtasks.com/api/tasks/accounts/fdd73ab50cf234b45815b34a6339b7ca967601f5/",
        category: "assignment",
        address: {
          raw_address: taskState,
        },
      }),
      headers: {
        authorization: "Token fdd73ab50cf234b45815b34a6339b7ca967601f5",
      },
    };
    try {
      const response = config;
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
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
