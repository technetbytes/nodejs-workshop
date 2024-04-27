
// returns a promise

let countValue = new Promise(function (resolve, reject) {
    resolve(null);
  });
  
  // executes when promise is resolved successfully
  
  countValue
    .then(function successValue(result) {
        if(result == null){
            console.log("the data is null")
        }
        else{
      console.log(result);}
    })  
    .then(function x(result){
        if(result == null){
            console.log("xxx")
        }
    }).catch(){
        
    };