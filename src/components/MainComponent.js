import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskForm from "./form/TaskForm";
import GoogleMap from "./maps/GMap";
import axios from "axios";
import useInterval from "./interval/Interval";

export default function Main() {
  const [tasks, setTask] = useState([]);

  function getData() {
    axios
      .get("https://gsmtasks.com/api/tasks/tasks/", {
        headers: {
          authorization: "Token 216bb502dbf825738fff6c555ae7e9c339633a70",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setTask(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  // to update state every 5 second
  useInterval(getData, 5000);

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col sm={8} className="mapContainer">
          <GoogleMap tasks={tasks} />
        </Col>
        <Col sm={4}>
          <TaskForm />
        </Col>
      </Row>
    </Container>
  );
}
