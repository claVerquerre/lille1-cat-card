import React from 'react';
import Catcard from '../catcard/Catcard';
import { Link } from 'react-router-dom';
import { getAllCards, createCard, updateCard, deleteCard } from '../../data-service.js';


class Home extends React.Component {

    constructor(props) {
        super(props);

        getAllCards().then(value => {
            this.state = value;
        });
    }

    render() {
        console.log(this.state);
        return (
            <section className="container">
                <h2>Cat card list</h2>
                <hr />

                <div className="card-group">
                    {this.state.map((dynamicComponent, i) => 
                        <Catcard key = {i} componentData = {dynamicComponent}/>)}
                </div> 
                        
                <button className="btn btn-lg btn-danger circle add">
                    <Link to="/form"><i className="fas fa-plus"></i></Link>
                </button>   

            </section>
        );
    }
}
export default Home;