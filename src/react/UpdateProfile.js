import React from 'react';




  function   UpdateProfile () {
    fetch(“https://kwitter-api.herokuapp.com/docs/#/Users/updateUser” 
        {
        "method": "PATCH,
        "body": JSON.stringify(
        {
          "password": "strings",
          "about": “tell me something good”,
          "displayName": “DreamTeam”
        }
        )
        })
        .then(response => response.json())
        .then(response => {
        console.log(response)
        })
        .catch(err => {
        console.log(err);
        });
        }
        
   }



export default  UpdateProfile; 