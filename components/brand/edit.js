import React from 'react';
import fetch from 'isomorphic-unfetch';

class Edit extends React.Component {

    getBrand = (id) => {
        fetch(`http://127.0.0.1:8000/api-brand/retrive-a/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            });
    }

    render() {
        return (
            <div>
                {this.getBrand(this.props.id)}
            </div>
        )
    }
}

export default Edit;