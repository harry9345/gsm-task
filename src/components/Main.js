import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskForm from "../components/TaskForm";
import GMap from "./maps/GMap";
import useInterval from "./Interval";

export default function Main() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    console.log(task);
  }, [task]);

  const getData = () => {
    let config = {
      method: "get",
      url: "https://gsmtasks.com/api/tasks/tasks/",
      authorization: "fdd73ab50cf234b45815b34a6339b7ca967601f5",
    };
    try {
      const response = config;
      console.log(response);
      // handeling the state
    } catch (error) {
      console.log("error", error);
    }
  };

  // for polling the data every 5 second
  useInterval(getData, 5000);

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
