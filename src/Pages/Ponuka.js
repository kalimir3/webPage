import React from 'react'
import Filter from '../Components/Filter'
import ListingComponent from '../Components/ListingComponent'
import listings from '../data/listings.json'

export default class Ponuka extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listings: listings.properties,
            filter: null
        }
    }

    getFilter = (filter) => {
        this.setState({filter: filter})
        
    }

    render() {
        return (
            <div>
                <Filter getFilter={this.getFilter}></Filter>
                {console.log(this.state.filter)}
                <ListingComponent listings={this.state.listings}></ListingComponent>
            </div>
        )
    }
}