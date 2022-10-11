// Find max of two values, find of three values

// one way
 const business = 350;
 const minister = 750;
 const teacher = 950;

 if (business > minister) {
     if (business > teacher) {
         console.log("Business is bigger");
     }
     else{
        console.log("Teacher is bigger");
     }
 }
 else{
     if (minister > teacher) {
        console.log("Minister is bigger");
     }
     else{
        console.log("Teacher is bigger");
     }
 }


// three or more values another way
//  const max = Math.max(business, minister, teacher)
//  console.log(max);