import myJson from './storeProductList.json';

function getTotalAmount(stockDetails,priceDetails){
    let sum=0,quantityChange=0;

    stockDetails.forEach(productItem => {

        priceDetails.forEach(getPrice =>{

           if(productItem.product === getPrice.item && (typeof productItem.product ==="string" && typeof getPrice.item === "string")){
             
            if(getPrice.quantity > productItem.Quantity){
                  quantityChange= productItem.Quantity;
                  productItem.Quantity-=quantityChange;
            }
            else{
                quantityChange = getPrice.quantity;
                productItem.Quantity-=quantityChange;
                
            }
            let removeCharacter=productItem.price.replace(/[$]/g,'')
            let value=parseFloat(removeCharacter);
            sum+=value*quantityChange;
              
           }
           else{
               return "Invalid Arguments is passed";
           }
        })
    });
    return sum.toFixed(2);
}
const getPrice=[
    { item: 'Jam - Apricot', quantity:1 },
    { item: 'Creamers - 10%', quantity:1 },
    { item: 'Jam - Apricot', quantity:1}
  ]
//Result
console.log(getTotalAmount(myJson,getPrice));