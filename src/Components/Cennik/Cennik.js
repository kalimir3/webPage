import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Table
} from "reactstrap";
import classnames from "classnames";
import CennikItem from "./CennikItem";

const cennikData = {
  predaj: [
    {
      nazov: "BYT do 69.999 EUR",
      cena: "3,0 %  z kúpnej ceny",
      detail: "minimálne 1.500 EUR"
    },
    {
      nazov: "BYT nad 70.000 EUR",
      cena: "2,5 %  z kúpnej ceny",
      detail: "minimálne 1.750 EUR"
    },
    {
      nazov: "Ostatné nehnuteľnosti do 149.999 EUR",
      cena: "3,0 %  z kúpnej ceny",
      detail: "minimálne 1.500 EUR"
    },
    {
      nazov: "od 150.000 do 1.299.999 EUR",
      cena: "2,5 %  z kúpnej ceny",
      detail: "minimálne 1.750 EUR"
    },
    {
      nazov: "nad 1.300.000 EUR",
      cena: "2,0 %  z kúpnej ceny"
    }
  ],
  prenajom: [
    {
      nazov: "Nábor nehnuteľnosti",
      cena: "10 €",
      detail:
        "Náhrada nákladov spojených s uskutočnením dokumentačnej obhliadky nehnuteľnosti, vrátane vyhotovenia fotografií, zistenia parametrov nehnuteľnosti, rokovania s klientom, prípravy cenovej analýzy za účelom určenia ponukovej ceny nehnuteľnosti (jednorázová platba)."
    },
    {
      nazov: "Inzerovanie nehnuteľnosti",
      cena: "5 € / deň",
      detail:
        "Realitný sprostredkovateľ je oprávnený účtovať si náhradu nákladov spojených s inzerovaním nehnuteľnosti (na internete, v tlačených médiách a pod.) najviac vo výške 5 € / deň"
    },
    {
      nazov: "Obhliadky",
      cena: "10 € / mesačne",
      detail:
        "Nárok na náhradu paušálneho mesačného poplatku vzniká realitnému sprostredkovateľovi len vtedy, ak na nehnuteľnosti uskutoční najmenej 3 obhliadky v príslušný mesiac, vždy s potenciálnym záujemcom (záujemcami)."
    }
  ]
};

const Cennik = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const cennikTable = (props, typ) => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Nazov sluzby</th>
            <th>Cena sluzby</th>
          </tr>
        </thead>
        <tbody>
          {props.map((sluzba, index) => {
            const id = typ+index
            console.log(id)
            return <CennikItem key={id} id={id} sluzba={sluzba}></CennikItem>;
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Predaj
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Prenajom
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">{cennikTable(cennikData.predaj, 'predaj')}</Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">{cennikTable(cennikData.prenajom, 'prenajom')}</Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Cennik;
