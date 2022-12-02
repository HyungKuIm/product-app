import React from 'react';
//import ProductList from './ProductList';
import ProductTable from './ProductTable';
import ProductHeader from './ProductHeader';
import ProductFooter from './ProductFooter';
import ProductForm from './ProductForm';

class ProductApp extends React.Component {
    render() {
        

        return (
            <div>
                <ProductHeader />
                <ProductForm />
                <ProductTable name="Son"/>
                <ProductFooter />
            </div>
            
        );
    }
}

export default ProductApp;