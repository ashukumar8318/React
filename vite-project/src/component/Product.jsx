
//the console will run becuase js will run from top to bottom becfore return statement it will run the console
// function Product(){
//     console.log("hello")
//     return(
//         <div>
//              <h1>laptop</h1>,
//    <h1>₹50000</h1>
//         </div>
  
//     )
    
// }


//here console will not run because in fn if it reaching the return statement it will the last and came out from function and console will not reachable
// function Product(){
    
//     return(
//         <div>
//              <h1>laptop</h1>,
//    <h1>₹50000</h1>
//         </div>
  
//     )
//     console.log("hello")
    
// }

// function Product(){
//     const name = "Laptop";
//     const price = 50000;

//     return(
//         <div>
//             <h1>{name}</h1>
//             <h1>{price}</h1>
//         </div>
//     )
// }

// Product: Laptop
// Price: ₹50000
// Total with tax: ₹59000
function Product(props){
    console.log(props)
    const name = "Laptop";
    const price = 50000;
    const total = price + (price*18/100)

    return(
        <div>
            <h1>Product:{props.namename}</h1>
            <h1>Price:{price}</h1>
            <h1>Total with tax:{total}</h1>
        </div>
    )
}

export default Product