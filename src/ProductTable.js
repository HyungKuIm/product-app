import React, {Component} from 'react';
import ProductRow from './ProductRow';
import './App.css';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                
            ]
        }
    } // end of constructor

    componentDidMount() {
        fetch('http://localhost:7090/products')
            .then((response) => response.json())
            .then((responseData)=>{
                //console.log(responseData);
                this.setState({
                   products: responseData 
                });
            })
            .catch(err => console.error(err));
    }
    

    render() {
        return (
            <div>
                <h1>{this.props.name}을(를) 위한 제품 목록</h1>
            
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Brand</th>
                            <th>description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((detail,i) => <ProductRow key={i} product={detail}/>)}
                    </tbody>
                </table>
            </div>
        );
    }  // end of render
}

export default ProductTable;