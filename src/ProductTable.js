import React, {Component} from 'react';
import ProductRow from './ProductRow';
import './App.css';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: "Samsung S23 Plus",
                    type: "Mobile",
                    description: "이번엔 제대로 나와 줬으면...",
                    brand: "Samsung"
                },
                {
                    name: "iPhone 15",
                    type: "Mobile",
                    description: "안접혀도 예쁨",
                    brand: "Apple"
                },
                {
                    name: "Dimche",
                    type: "Kimchi 냉장고",
                    description: "김치는 딤채",
                    brand: "Dimche"
                }
            ]
        }

        
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
                        {this.state.products.map((detail,i)
                            => <ProductRow key={i} product={detail})}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;