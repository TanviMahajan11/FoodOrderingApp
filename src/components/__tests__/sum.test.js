import {sum} from "../sum";

// we write a function called test which takes two paraments 
//     1) string ( description of the test )
//     2) callback function ( implementaion of test case )

test ( "Sum function should calculate the sum of 2 numbers " , ()=>{

   const result =  sum(3,4);

   // Assertion
   expect(result).toBe(7);

})