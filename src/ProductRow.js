import React, {Component} from "react";

class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.type}</td>
                <td>{this.props.product.brand}</td>
                <td>{this.props.product.description}</td>
                <td><a href="#">수정</a></td>
                <td><a href="#">삭제</a></td>
                <td><a href="#">뷰</a></td>
            </tr>
        );
    }
}

export default ProductRow;