
function minimumVechicleRequires(vehicleType,deliveryWeight){
    
    let requiredVechicles=[];

    vehicleType=vehicleType.filter(vehicle =>{
        return(typeof vehicle.type === "string" && typeof vehicle.weightCapacity === "number" && vehicle.weightCapacity >= 0)    
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
        let parcelweightCache=parcelWeight.weight;
        vehicleType.forEach(vehicleWeight=> {
              
            if(vehicleWeight.weightCapacity <= parcelweightCache){
                if(result[vehicleWeight.type]){
                    result[vehicleWeight.type]=result[vehicleWeight.type]+1;
                }
                else{
                    result[vehicleWeight.type]=1;
                }
              
                parcelweightCache-=vehicleWeight.weightCapacity;
                
                while(vehicleWeight.weightCapacity <= parcelweightCache){

                    result[vehicleWeight.type]=result[vehicleWeight.type]+1;
                    
                    parcelweightCache -= vehicleWeight.weightCapacity

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
    { location: 'velachery', weight: 1990 },
    { location: 'madipakkam', weight: 17 },
    { location: 'sholinganallur', weight: 240 },
    { location: 'chennai', weight:5000}
  ];


  const vehicles1 = [
    { type: 'cycle', weightCapacity: 10},
    { type: 'bike', weightCapacity: 50 },
    { type: 'tempo', weightCapacity: 1 },
    { type: 'auto', weightCapacity: 100 },
    { type: 'ace', weightCapacity: 1 }
  ];
  


  console.log(minimumVechicleRequires(vehicles,parcels));
    
   
   console.log(minimumVechicleRequires(vehicles1,parcels));

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