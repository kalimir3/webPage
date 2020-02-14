import {Container, Row, Col} from 'reactstrap'
import React from 'react'
import Filter from '../Components/Filter'
import ListingComponent from '../Components/ListingComponent'
import listings from '../data/listings.json'

export default class Ponuka extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                listings: listings.properties
            }
        }

    render(){

        return (
        <div><Filter></Filter>
        <ListingComponent listings={this.state.listings}></ListingComponent>
        </div>
        )
    }
}