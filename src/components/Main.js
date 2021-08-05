import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskForm from "../components/TaskForm";
import GMap from "./maps/GMap";
// import useInterval from "./Interval";

export default function Main() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    console.log(task);
  }, [task]);

  const getData = (newTask) => {
    setTask(() => {
      return [...task, newTask];
    });
  };

  // useInterval(getData, 5000);

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col sm={8} className="mapContainer">
          <GMap task={task} />
        </Col>
        <Col sm={4}>
          <TaskForm getData={getData} />
        </Col>
      </Row>
    </Container>
  );
}
