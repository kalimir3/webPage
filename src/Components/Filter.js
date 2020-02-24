import React from "react";
import {
  Row,
  Col,
  InputGroup,
  Input,
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

  componentDidUpdate(prevProps, prevState) {
    if(this.state!==prevState) {
      this.filterCallback()
    }
  }

  switchBalkon() {
    this.setState(
      {
        balkon: !this.state.balkon
      }
    );
  }

  cenaDo = event => {
    this.setState(
      {
        cenaDo: event.target.value
      },
    )
  };

  minRozloha = event => {
    this.setState(
      {
        minRozloha: event.target.value
      },
    )
  };

  minPozemok = event => {
    this.setState(
      {
        minPozemok: event.target.value
      },
    )
  };

  filterCallback = () => {
    this.props.getFilter(this.state);
    console.log(this.state)
  };

  render() {
    return (
        <Row className="filterContainer p-3" xs="2" md="4" lg="6">
          <Col className="padding">
            <InputGroup>
              <Input className="filterItem"
                onChange={this.cenaDo}
                value={this.state.cenaDo}
                placeholder="Max cena v €"
              />
            </InputGroup>
          </Col>
          <Col className="padding">
            <InputGroup>
              <Input className="filterItem" onChange={this.minRozloha} placeholder="Min. rozloha v m2" />
            </InputGroup>
          </Col>
          <Col className="padding">
            <InputGroup>
              <Input className="filterItem" onChange={this.minPozemok} placeholder="Min. pozemok v m2" />
            </InputGroup>
          </Col>
          <Col className="padding">
            {this.state.balkon ? (
              <Button
                className="label filterItem"
                onClick={() => this.switchBalkon()}
                color="secondary"
              >
                Chcem balkon
              </Button>
            ) : (
              <Button
                className="label filterItem"
                onClick={() => this.switchBalkon()}
                outline
                color="secondary"
              >
                Balkon nemusi
              </Button>
            )}
          </Col>
        </Row>
    );
  }
}
