import React from 'react';
import ProductList from './ProductList';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';

class ProductApp extends React.Component {
    render() {
        

        return (
            <div>
                <ProductHeader />
                <ProductList name="데스크탑"/>
                <ProductFooter />
            </div>
            
        );
    }
}

export default ProductApp;