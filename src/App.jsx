import React, { Component } from 'react';
import Data from './Data';
import Product from './Product';

class App extends Component {

    state={
        products:Data,
        productLists:Data
    }

    //filtering button
    handleBtns=(e)=>{
        console.log(e.target.value);

        let productLists;
        if(e.target.value){
            productLists=this.state.products.filter(item=>item.cat===e.target.value)
        }

        this.setState({
            productLists:productLists
        })
    }

    render() {
        return (
            <div>
                <h1>Live Spaces</h1>
                <p>All NTF's on Cyber either belongs to or were minted by thier space creator</p>
                <Product products={this.state.productLists} handleBtns={this.handleBtns}/>
                
            </div>
        );
    }
}

export default App;
