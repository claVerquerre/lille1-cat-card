import React, { Component } from 'react';
import * as dataService from '../../share/data-service';
import loader from '../../share/loading_cat.gif';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id:-1,
                title:"",
                imageUrl:"",
                description:""
            },
            loading: false,
            error: false
        };
        if (this.props.match.params.id !== undefined) this.state.loading = true;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    };
    
    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            dataService.getCard(parseInt(this.props.match.params.id)).then(item => {
                this.setState({
                    loading: false,
                    data: item
                });
            });
        }
    } 

    handleInputChange(event) {
        var cat = this.state.data;
        cat[event.target.name] = event.target.value;
        this.setState({data:cat});
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.data.title !== "" || this.state.data.imageUrl !== "" || this.state.data.description !== "") {
            // if add a new card
            if (this.state.data.id === -1) {
                    let element = {
                        title: this.state.data.title,
                        imageUrl: this.state.data.imageUrl,
                        description: this.state.data.description
                    };
                    dataService.createCard(element).then(() => {
                        this.props.history.push({pathname: '/'});
                    });
                
            } 
            // if modif a card
            else {
                dataService.updateCard(this.state.data).then(() => {
                    this.props.history.push({pathname: '/'});
                });
            }
        } else {
            this.setState({error:true});
        }
    }

    onDelete(event){
        dataService.deleteCard(parseInt(this.props.match.params.id)).then(() =>  {
            this.props.history.push({pathname: '/'});
        });
    }

    render() {
        return ( 
            <form onSubmit={this.onSubmit} noValidate className={this.state.error ? "was-validated" : ""}> 
                <div className="form-group row">
                    <label htmlFor="cardTitle" className="col-sm-2 col-form-label">Card title</label>
                    <input name="title" required className="form-control col-sm-10" placeholder="Card title" type = "text" 
                        value = {this.state.data.title} onChange = {this.handleInputChange} />
                    <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
                </div>

                <div className="form-group row">
                    <label htmlFor="cardImage" className="col-sm-2 col-form-label">Card image URL</label>
                    <input name="imageUrl" required className="form-control col-sm-10" placeholder="Card image URL" type = "text" 
                        value = {this.state.data.imageUrl} onChange = {this.handleInputChange} />
                    <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
                </div>

                <div className="form-group row">
                    <label htmlFor="cardDescription" className="col-sm-2 col-form-label">Card description</label>
                    <textarea name="description" required className="form-control col-sm-10" 
                        value = {this.state.data.description} onChange = {this.handleInputChange} />
                    <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
                </div>

                <div className={this.state.loading ? "loader" : "hide"}>
                    <img src={loader} className="loader_img" alt="loader"/>
                </div>

                <button  type="button" className="btn btn-danger" onClick={this.onDelete}>Delete</button>
                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Save</button>
            </form>
        );
    }
}