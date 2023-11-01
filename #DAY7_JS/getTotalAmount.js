//Getting json data from the user
import storeProductList from './storeProductList.json';

function getTotalAmount(stockDetails,priceDetails){
    let sum=0;
    let quantityChange=0;
    
    priceDetails.forEach(getPrice =>{
        stockDetails.forEach(productItem => {

           if((productItem.product === getPrice.item)){
            
            if(getPrice.quantity > productItem.Quantity){
                quantityChange= productItem.Quantity;   
            }
            else{
                quantityChange = getPrice.quantity;       
            }
            productItem.Quantity-=quantityChange;
            const removeCharacter=productItem.price.replace(/[$]/g,'')
            const value=parseFloat(removeCharacter);
            sum+=value*quantityChange;
              
           }
           
        })
        
    });
    
    return `$${sum.toFixed(2)}`;
}


const purchaseDetails=[
    { item: 'Jam - Apricot', quantity:1 },
    { item: 'Creamers - 10%', quantity:1 },
    { item: 'Jam - Apricot', quantity:1}
  ]
//Result
console.log(getTotalAmount(storeProductList,purchaseDetails));