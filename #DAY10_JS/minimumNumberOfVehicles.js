function minimumVechicleRequires(vehicleType,deliveryWeight){

    let requiredVechicles=[];

    vehicleType=vehicleType.filter(checkField =>{
        return(typeof checkField.type === "string" && typeof checkField.weightCapacity === "number" && checkField.weightCapacity >= 0)    
     })

     deliveryWeight=deliveryWeight.filter(checkField =>{
        return(typeof checkField.location === "string" && typeof checkField.weight === "number" && checkField.weight >= 0)    
     })

    vehicleType.sort((a,b) =>{
        return b.weightCapacity - a.weightCapacity;
    })
    
    let result={};
    deliveryWeight.forEach(parcelWeight => {
        
        result={};
    
        vehicleType.forEach(vehicleWeight=> {
              
            if(vehicleWeight.weightCapacity <= parcelWeight.weight){
                if(result[vehicleWeight.type]){
                    result[vehicleWeight.type]=result[vehicleWeight.type]+1;
                }
                else{
                    result[vehicleWeight.type]=1;
                }
              
                parcelWeight.weight-=vehicleWeight.weightCapacity;
                
                    while(vehicleWeight.weightCapacity <= parcelWeight.weight){

                        result[vehicleWeight.type]=result[vehicleWeight.type]+1;
                        
                        parcelWeight.weight -= vehicleWeight.weightCapacity

                    }
                
            }
            
        })
        requiredVechicles.push(result)
       
    });
    return requiredVechicles;
}

const vehicles = [
    { type: 'cycle', weightCapacity: 1},
    { type: 'bike', weightCapacity: 5 },
    { type: 'tempo', weightCapacity: 100 },
    { type: 'auto', weightCapacity: 20 },
    { type: 'ace', weightCapacity: 50 }
    
  ];
  const parcels = [
    { location: 'velachery', weight: 30 },
    { location: 'madipakkam', weight: 17 },
    { location: 'sholinganallur', weight: 240 },
    { location: 'chennai', weight:5000}
  ];



   console.log(minimumVechicleRequires(vehicles,parcels));




 /* Sorting Method


    for(let index1=0;index1<vehicleType.length;index1++){
        let result={};
        for(let index2=0;index2<vehicleType.length;index2++){
    
           if(vehicleType[index1].weightCapacity > vehicleType[index2].weightCapacity){
    
              let CapacityChange = vehicleType[index1].weightCapacity;
              let typeChange = vehicleType[index1].type;
    
              vehicleType[index1].weightCapacity = vehicleType[index2].weightCapacity;
              vehicleType[index2].weightCapacity = CapacityChange;
    
              vehicleType[index1].type =  vehicleType[index2].type;
              vehicleType[index2].type  = typeChange;
    
           }
        }
      }
    */