import React from 'react';
//import ProductList from './ProductList';
import ProductTable from './ProductTable';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';

class ProductApp extends React.Component {
    render() {
        

        return (
            <div>
                <ProductHeader />
                <ProductTable name="Son"/>
                <ProductFooter />
            </div>
            
        );
    }
}

export default ProductApp;