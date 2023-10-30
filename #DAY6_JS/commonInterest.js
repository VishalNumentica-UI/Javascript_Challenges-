function commonInterestOfStudents(items){
  const studentRecords={},nameCounter={};

  items.forEach(studentData => {
  
    studentData.books.forEach(bookName => {
    
        if(studentRecords[bookName]){
          studentRecords[bookName].push(studentData.name);
        }
        else{
          studentRecords[bookName]=[studentData.name];
        }
       
    })
  });

  //find the common interests
  Object.keys(studentRecords).forEach(interestedBook =>{

    if(studentRecords[interestedBook].length>1){

      studentRecords[interestedBook].forEach(nameField =>{

        if(nameCounter[nameField]){
          nameCounter[nameField]++;
        }
        else{
          nameCounter[nameField]=1;
        }

      })
    }
  })
  
  let max=0,commonInterest="";
  Object.keys(nameCounter).filter(iterator => {
        if(nameCounter[iterator]>max){
          max=nameCounter[iterator]
          commonInterest=iterator;
        }
  })
  console.log(`user who shares most interest with other users is ${commonInterest}`)

  return studentRecords;

}


const students = [
    {
      id: 0,
      name: "Arun",
      books: ["Wings of Fire", "Chakra"],
    },
    {
      id: 1,
      name: "Ashok",
      books: ["Chakra", "War and Peace", "The Shining"]
    },
    {
      id: 2,
      name: "Balu",
      books: ["Wings of Fire", "All about Cricket"],
    },
    {
      id: 3,
      name: "Cathi",
      books: ["Against the wind", "The Shining", "War and Peace"]
    },
  ];

  console.log(commonInterestOfStudents(students));

  

  