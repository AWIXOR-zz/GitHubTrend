import React from "react";
import { Container, Row } from "react-bootstrap";

const RepositoriePreview = ({ repos }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <ul className="list-unstyled">
          {repos.map(repo => (
            <li>
              <div className="title">{repo.name}</div>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default RepositoriePreview;
