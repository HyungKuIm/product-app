import React from "react";

class ProductList extends React.Component {
    
    
    render() {
        const products = ["미친 특가 삼성 컴퓨터",
                            "삼성 데스크탑 DM-500",
                            "포유컴 인텔 i5 게이밍 조립 PC"]

        return (
            <div>
                <h1>{this.props.name}을(를) 위한 제품 목록</h1>
                <ul>
                    {products.map((item,index) => <li key={index}>{item}</li>)}
                 </ul>
            </div>
        );
    }
}

export default ProductList;