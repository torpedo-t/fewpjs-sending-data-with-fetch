// Add your code here

// by default fetch() verb is GET. To tell fetch() that this is a POST request
// we need to add a method property to our configurationObject

// the 2nd piece we need to include is some metadata about the actual data we want to send
// this metadata is in the form of headers
// each individual header is stored as a key/value pair inside an object

// the last thing is the data itself
// data being sent in fetch() must be stored in the body of the configurationObject
// whatever data we're assigning to the body of our request needs to be a stringify
// use JSON.stringify() to convert objects to strings

// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });

// If we split out the body of our request into a variable,
// and instead used our configuarionObject variable, our call to fetch would look like this

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   const configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });
    // the servers will send a response that might include useful info
    // to access this info, we use a series of calls to then() which are given function callbacks
    // note that the first then() is passed a callback function that takes in response as an argument
    // this is a response object, representing what the destination server sent back to us.
    // this object has a built in method, json(), that converts the body of the response from JSON to plain old JavaScript object.
    // the result of json() is returned and made available in the second then()
    // when something goes wrong in a fetch() request, 
    // Javascript will look down the chain of .then() calls for something similar to a then() called a catch()
    // this allows us to write code to handle the error. Javascript won't fail silently

    // const configObj = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(:name, :email)
    //   };

    // function submitData(configObj) {
    //     fetch('http://localhost:3000/users', configObj)
    //     .then(function(response) {
    //     return response.json();
    // })
    //     .then(function(object) {
    //     console.log(object);
    // })
    //     .catch(function(error) {
    //     alert("Bad things! Ragnarők!");
    //     console.log(error.message);
    //   });
    // }

    function submitData(name, email) {
        let formData = {
            name: name,
            email: email
        };
    
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
    
        return fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
              return response.json();
            })
            .then(function(object) {
                let h2 = document.createElement('h2');
                h2.innerHTML = object.id;
                document.body.appendChild(h2);
                console.log(object);
            })
            .catch(function(error) {
                let h3 = document.createElement('h3');
                h3.innerHTML = error.message;
                document.body.appendChild(h3);
                console.log(error.message);
            });
    }
// 