import { MyNavbar } from "../components/MyNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Post } from "./Post";
import Navbar from "../components/Navbar";

const posts = [
  { id: 1, title: "P1", description: "Some quick example" },
  { id: 2, title: "P2", description: "Some quick example 2" },
  { id: 3, title: "P3", description: "Some quick example 3" },
  { id: 4, title: "P4", description: "Some quick example 4" },
  { id: 5, title: "P5", description: "Some quick example" },
  { id: 6, title: "P6", description: "Some quick example 2" },
  { id: 7, title: "P7", description: "Some quick example 3" },
  { id: 8, title: "P8", description: "Some quick example 4" },
];

export function Home() {
  return (
    <>
      {/* <MyNavbar /> */}
      <Navbar />

      <Container style={{ marginTop: "10px" }}>
        <Row>
          {posts.map((post) => {
            return (
              <Col lg={3} sm={12} style={{ padding: "10px" }}>
                <Post post={post} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
