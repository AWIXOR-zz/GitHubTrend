import React from "react";
import { Container, Button, Media, Row, Card } from "react-bootstrap";
import { numberOfDays } from "../date-manipulation/date-manipulation";

const RepositoriePreview = ({ repos, loading }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <ul className="list-unstyled repos mt-4">
          {repos.map(repo => (
            <Card className="mb-2 repo" key={repo.id}>
              <Media as="li">
                <img
                  width={180}
                  height={180}
                  className="mr-4"
                  src={repo.owner.avatar_url}
                  alt="Github icon"
                />
                <Media.Body className="mt-3">
                  <h5>{repo.name}</h5>
                  <p>{repo.description}</p>
                  <Button
                    className="mr-3"
                    variant="success"
                  >{`Stars: ${repo.stargazers_count}`}</Button>
                  <Button variant="danger">{`Issues: ${repo.open_issues_count}`}</Button>
                  <p className="mt-4">{`Created at: ${repo.created_at.slice(
                    0,
                    10
                  )} (${numberOfDays(repo.created_at)} Days ago)`}</p>
                </Media.Body>
              </Media>
            </Card>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default RepositoriePreview;
