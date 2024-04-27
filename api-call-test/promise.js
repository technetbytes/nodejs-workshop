let countValue = new Promise(function (resolve, reject) {
  let x = {"status_code":200,"msg":"Created"}
  let y = {"status_code":404,"msg":"Resource not found"}
  let final_msg = null;
  let random_number = Math.floor(Math.random() * 3);
  if (random_number == 1)
    {
      final_msg = x;
      resolve(JSON.stringify(final_msg));
    }
  else if(random_number == 2){
    final_msg = y;
    resolve(JSON.stringify(final_msg));
  }
  else if(random_number == 3){
    reject();
  }  
});

// executes when promise is resolved successfully


// countValue
//   .then(function ioyiohohiohoi(result) {
//     if(result.status_code == 200){
//       console.log(result)
//     }
//   })
//   .then(function forY(result){
//     if(result.status_code == 404){
//     console.log("result_Y")
//     }
//   })
//   .catch(function(){console.log("error")})


// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
//     let y = 1;
  
//   // The producing code (this may take some time)
//     let xs  = {"status":"OK", call_from_resolve : "X Condition", value_of_x : x};
//     let ys  = {"status":"OK", call_from_resolve : "X Condition", value_of_y : y};
//     if (x != 0) {
//      // myResolve(JSON.stringify(xs));
//       if (y == 1){
//         7let pro 
//         myResolve(JSON.stringify(ys));
//       }
//     } else {
//       myReject("Error");
//     }
//   });
  


//   myPromise.then(data => {
//     console.log(data)
//   }).then
//   .catch(error => {
//     console.error('Error:', error);
//   })

// // const promise = new Promise(resolve => setTimeout(() => resolve('Alan'), 100));

// // promise.then(res => {
// //   return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
// // }).then((res) => {
// //   console.log(res)
// // }, (err) => {
// //   console.log(err)
// // });