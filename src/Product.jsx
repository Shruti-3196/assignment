import React from 'react'
import Card from './Card'

export default function Product(props) {
  return (
    <React.Fragment>
<div className="btns">
<button value="trending" onClick={props.handleBtns}>24h Trending</button>
<button value="latest" onClick={props.handleBtns}>Latest shows</button>
<button value="popular" onClick={props.handleBtns}>Most Popular</button>
<button value="genesis" onClick={props.handleBtns}>In Genesis</button>
<button value="temple" onClick={props.handleBtns}>In Temple</button>
<button value="void" onClick={props.handleBtns}>In Void</button>
<button value="bayc" onClick={props.handleBtns}>#BAYC</button>
</div>
<div className="wrapper">
    {props.products.map(prod=>{
      return <Card key={prod.id} prod={prod}/>
    })}
</div>
    </React.Fragment>
    
  )
}
