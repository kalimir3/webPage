import React from "react";
import Filter from "../Components/Filter";
import ListingComponent from "../Components/ListingComponent";
import database from "../firebase";

export default class Ponuka extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: null,
      database: null,
      filter: {
        cenaDo: null,
        minRozloha: null,
        minPozemok: null,
        balkon: null
      }
    };
  }

  componentDidMount() {
    var that = this;
    database
      .ref("/propertiesDatabase/properties")
      .once("value")
      .then(function(snapshot) {
        that.setState({ database: snapshot.val(), listings: snapshot.val() });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    var that = this;
    if (this.state.filter !== prevState.filter) {
      const newContent = this.filterContent();
      that.setState({ listings: newContent });
    }
  }



  getFilter = filter => {
    this.setState({ filter: filter });
  };

  render() {
    return (
      <div>
        <Filter getFilter={this.getFilter}></Filter>
        <ListingComponent listings={this.state.listings}></ListingComponent>
      </div>
    );
  }


  /**
     * This is filter logic.
    */

filterContent = () => {
    let filtered = this.state.database.filter(listing =>
      this.filterCena(listing) &&
      this.filterPozemok(listing) &&
      this.filterBalkon(listing) &&
      this.filterRozloha(listing)
    );
    return filtered;
  };

  filterCena = ({ cena }) => {
    return this.state.filter.cenaDo
      ? this.state.filter.cenaDo / 1 >= cena / 1
        ? true
        : false
      : true;
  };

  filterRozloha = ({ rozloha }) => {
    return this.state.filter.minRozloha
      ? this.state.filter.minRozloha / 1 <= rozloha / 1
        ? true
        : false
      : true;
  };

  filterPozemok = ({pozemok}) => {
    return this.state.filter.minPozemok
      ? this.state.filter.minPozemok / 1 <= pozemok / 1
        ? true
        : false
      : true;
  };

  filterBalkon = ({ balkon }) => {
    return !(!balkon && this.state.filter.balkon) ? true : false;
  };

}
