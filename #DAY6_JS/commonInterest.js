function commonInterestOfStudents(items){
  const studentRecord={};
  for(let item of students){
       for(let index=0;index<(item.books.length);index++){
          studentRecord[item.books[index]]=item.name;
       }
  // studentRecord[item.]
 }
     return studentRecord;
     console.log(studentRecord)
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

  