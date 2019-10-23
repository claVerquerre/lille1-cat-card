import React from 'react';
import { Link } from 'react-router-dom';

export default  class CatCard extends React.Component {

    constructor(props) {
        super(props);

        this.handleTouchStart = this.handleTouchStart.bind(this);
    }

    handleTouchStart(event) {
        this.classList.toggle('hover');
    }

    render() {
        return (
            <div className="flipper mb-3" onTouchStart={this.handleTouchStart}>
                <div className="front card text-center shadow-sm">
                    <img className="card-img-top" src={this.props.componentData.imageUrl} alt="Cat" width="250" height="200" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.componentData.title}</h5>
                    </div>
                </div>
    
                <div className="back card text-center shadow-sm">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.componentData.title}</h6>
                        <p className="card-text">{this.props.componentData.description}</p>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-primary">
                            <Link to={{pathname: '/form/'+this.props.componentData.id}} className="btn-primary card-link">
                                Edit that cat</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}