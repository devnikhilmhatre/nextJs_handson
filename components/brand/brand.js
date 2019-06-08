import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

class Brand extends React.Component {

    state = {
        brand: []
    }

    getBrandList = () => {
        fetch('http://127.0.0.1:8000/api-brand/list-c/')
            .then(res => res.json())
            .then(res => {
                this.setState({ brand: [...res] })
                // console.log(res)
            });
    }

    componentDidMount() {
        this.getBrandList()
    }

    render() {
        if (this.state.brand.length > 0) {
            return (
                <div>
                    {
                        this.state.brand.map(item =>(
                             <Link as={`/edit/${item.id}`} key={item.id} href={`/brand/edit?id=${item.id}`}>
                                <a key={item.id}>{item.name}</a>
                             </Link>
                        ))
                    }
                </div>
            )
        }
        else {
            return null;
        }
    }
};

export default Brand;