import React, {Component} from "react";
class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'', name:'', brand:'', type:'', description:''}
    }

    inputChanged = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //아이디가 비어있는 경우 유효성 체크
        if (this.state.id == '') {
            alert("아이디가 비어있습니다.");
            return;
        }
        //제품명이 비어있는 경우 유효성 체크
        if (this.state.name == '') {
            alert("제품명이 비어있습니다.");
            return;
        }

        var newProduct = {id: this.state.id, 
                         name: this.state.name,
                         brand: this.state.brand,
                         type: this.state.type,
                         description: this.state.description};
        console.log(JSON.stringify(newProduct));
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        fetch('http://localhost:7090/products',
            {
                method: 'POST', body: JSON.stringify(newProduct),
                headers: myHeaders

            })
            .then(response => {
                    console.log('성공:', JSON.stringify(response));
                    window.location.reload(false);
                }
            )
            .catch(error => console.error('에러:', error));

    }

    render() {
        return (
            <div>
                <h2>Son's Create Product</h2>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td>ID:</td>
                            <td><input type="text" name="id" onChange={this.inputChanged}
                                    value={this.state.id}/></td>
                        </tr>
                        <tr>
                            <td>제품명:</td>
                            <td><input type="text" name="name" onChange={this.inputChanged}
                                    value={this.state.name}/></td>
                        </tr>
                        <tr>
                            <td>브랜드:</td>
                            <td><input type="text" name="brand" onChange={this.inputChanged}
                                value={this.state.brand}/></td>
                        </tr>
                        <tr>
                            <td>제품 타입:</td>
                            <td><input type="text" name="type" onChange={this.inputChanged}
                                value={this.state.type}/></td>
                        </tr>
                        <tr>
                            <td>제품 설명:</td>
                            <td><input type="text" name="description" 
                                    onChange={this.inputChanged}
                                    value={this.state.description}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" name="Create Product" value="제품 생성"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default ProductForm;