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
      cenaDo: "",
      minRozloha: "",
      minPozemok: "",
      balkon: false
    };
  }

  switchBalkon() {
    this.setState({
      balkon: !this.state.balkon
    });
    this.filterCallback()
  }

  cenaDo = event => {
    this.setState({
      cenaDo: event.target.value
    })
    this.filterCallback()
  }

  minRozloha = event => {
    this.setState({
      minRozloha: event.target.value
    })
    this.filterCallback()
  }

  minPozemok = event => {
    this.setState({
      minPozemok: event.target.value
    })
    this.filterCallback()
  }

  filterCallback = () => {
    this.props.getFilter(this.state)
  }

  render() {
    return (
      <Container className="filterContainer">
        <Row xs="2" md="4" lg="6">
          <Col className="padding">
            <InputGroup>
              <Input onChange={this.cenaDo} value={this.state.cenaDo} placeholder="Max cena"/>
              <InputGroupAddon addonType="append">
                <InputGroupText>€</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col className="padding">
            <InputGroup>
              <Input onChange={this.minRozloha} placeholder="Min. rozloha" />
              <InputGroupAddon addonType="append">
                <InputGroupText>m2</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col className="padding">
            <InputGroup>
              <Input onChange={this.minPozemok} placeholder="Min. pozemok" />
              <InputGroupAddon addonType="append">
                <InputGroupText>m2</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col className="padding">
            {this.state.balkon ? (
              <Button
                className="label"
                onClick={() => this.switchBalkon()}
                color="secondary"
              >
                Chcem balkon
                </Button>
            ) : (
                <Button
                  className="label"
                  onClick={() => this.switchBalkon()}
                  outline
                  color="secondary"
                >
                  Balkon nemusi
                </Button>
              )}
          </Col>
        </Row>
      </Container >
    );
  }
}
