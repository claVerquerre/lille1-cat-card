import React, { Component } from 'react';
import DataService from '../share/data-service';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:-1,
            title:"",
            imageUrl:"",
            description:""
        };
        if (this.props.editData !== undefined) this.state = this.props.editData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.dataService = new DataService();
    };

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        // if add a new card
        if (this.props.match.params.id === undefined) {
            this.dataService.createCard(this.state).then(() => {
                this.props.history.push({pathname: '/'});
            });
        } else {
            this.dataService.updateCard(this.state)
        }
        // soit ajoute
        //if (this.props.longueur !== undefined) {
            //let element = this.state;
            //element.id =  this.props.longueur+1;
            //this.props.addNewElement(element);
        //} else {
        // soit modifie
        //    this.props.updateCard(this.props.editData.id,this.state);
        //}

        
        
        
    }

    onDelete(event){
        /*this.props.deleteCard(this.props.editData.id);
        this.props.history.push({pathname: '/'});

        let myArray = this.state.data.slice();
        let elementToReplace = this.state.data[this.state.data.length-1];
        elementToReplace.id = id;
        let oldCat = myArray.find((c) => c.id === id);
        if (oldCat) {
            Object.assign(oldCat, elementToReplace);
            myArray.pop();
            this.setState({data: myArray});
        }*/
    }

    render() {
        return (
        <form className="was-validated" onSubmit={this.onSubmit}> 
            <div className="form-group row">
                <label htmlFor="cardTitle" className="col-sm-2 col-form-label">Card title</label>
                <input name="title" required className="form-control col-sm-10" placeholder="Card title" type = "text" 
                    value = {this.state.title} onChange = {this.handleInputChange} />
                <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
            </div>

            <div className="form-group row">
                <label htmlFor="cardImage" className="col-sm-2 col-form-label">Card image URL</label>
                <input name="imageUrl" required className="form-control col-sm-10" placeholder="Card image URL" type = "text" 
                    value = {this.state.imageUrl} onChange = {this.handleInputChange} />
                <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
            </div>

            <div className="form-group row">
                <label htmlFor="cardDescription" className="col-sm-2 col-form-label">Card description</label>
                <textarea name="description" required className="form-control col-sm-10" 
                    value = {this.state.description} onChange = {this.handleInputChange} />
                <div className="invalid-feedback offset-md-2 col-sm-10">That field is required. Please provide a value.</div>
            </div>

            <button  type="button" className="btn btn-danger" onClick={this.onDelete}>Delete</button>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        );
    }
}