import React from 'react';

class Catcard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="flipper mb-3" ontouchstart="this.classList.toggle('hover');">
            <div class="front card text-center shadow-sm">
                <img class="card-img-top" src="https://cataas.com/cat?width=250&height=200" alt="Cat image" width="250" height="200" />
                <div class="card-body">
                    <h5 class="card-title">title</h5>
                </div>
            </div>

            <div class="back card text-center shadow-sm">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Random cat card</h6>
                    <p class="card-text">That card shows a random cat image.</p>
                </div>

                <div class="card-footer">
                    <button href="#" class="btn btn-primary card-link">Edit that cat</button>
                </div>
            </div>
            </div>
        );
    }

}
export default Catcard;