import React from 'react';
import CatCard from './CatCard';
import {Link, BrowserRouter as Router } from 'react-router-dom';
import DataService from '../share/data-service';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};
        this.dataService = new DataService();
        this.getItems = this.getItems.bind(this);
    };

    componentDidMount() {
        this.dataService.initData().then(() => {
            this.getItems();
        });
    }

    getItems() {
        this.dataService.getAllCards().then(datas => {
            this.setState({data: datas});
        });
    }    

    render() {
        return (
            <section className="container">
                <h2>Cat card list</h2>
                <hr />
                <div className="card-group">
                    {this.state.data.map((dynamicComponent, i) => 
                        <CatCard key = {i} componentData = {dynamicComponent}/>)}
                </div> 
                        
            <button className="btn btn-lg btn-danger circle add">
                <Link to="/form"><i className="fas fa-plus"></i></Link>
            </button>   

            </section>
 
        );
    }
}
export default Home;