import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button
} from "reactstrap";
import "./Filter.css";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cenaDo: null,
      minRozloha: null,
      minPozemok: null,
      balkon: false
    };
  }

  switchBalkon() {
    this.setState({
      balkon: !this.state.balkon
    });
  }

  render() {
    return (
      <Container className="filterContainer">
        <Row xs="2" md="4" lg="6">
          <Col className="padding">
            <InputGroup>
              <Input placeholder="Max cena" />
              <InputGroupAddon addonType="append">
                <InputGroupText>€</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col className="padding">
            <InputGroup>
              <Input placeholder="Min. rozloha" />
              <InputGroupAddon addonType="append">
                <InputGroupText>m2</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col className="padding">
            <InputGroup>
              <Input placeholder="Min. pozemok" />
              <InputGroupAddon addonType="append">
                <InputGroupText>m2</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col className="padding">
            <Row className="noMargin">
              <InputGroupAddon className="label" addonType="prepend">
                Balkon:
              </InputGroupAddon>
              {this.state.balkon ? (
                <Button
                  className="label"
                  onClick={() => this.switchBalkon()}
                  color="secondary"
                >
                  Chcem
                </Button>
              ) : (
                <Button
                  className="label"
                  onClick={() => this.switchBalkon()}
                  outline
                  color="secondary"
                >
                  Netreba
                </Button>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
