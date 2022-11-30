import React from 'react';
import ProductList from './ProductList';

class ProductApp extends React.Component {
    render() {
        var ojStyle = {
            fontSize: 35,
            color: '#FFA000'
        }

        return (
            <div>
                <h1>프로덱트 앱에 오신 것을 환영합니다!</h1>
                <h2 style={ojStyle}>프로덕트 리스트</h2>
                <p>제품 리스트 소개해 드립니다...</p>
                <ProductList name="데스크탑"/>
            </div>
            
        );
    }
}

export default ProductApp;