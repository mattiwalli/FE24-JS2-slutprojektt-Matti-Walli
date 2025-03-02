import { options } from "./function";
import { getAllNames } from "./getallnames";

const base_url = "https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main";

// Add name to main
(document.querySelector('#addName') as HTMLButtonElement).addEventListener('click', async ()=>{

    const url = base_url + '.json';

    const body = {

        matti: {
            test: 'hej'

        }
    }

    const options = {
        method: "PATCH",
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(url,options);
    const data = await res.json(); 


});

(document.querySelector('#postMovie') as HTMLButtonElement).addEventListener('click', async ()=>{

    const url = base_url + '/matti.json';

    const body = {
        
        title: 'Lord of the rings',
        year: 1999

    }

    const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)

});

// Add name to main
(document.querySelector('#addName') as HTMLButtonElement).addEventListener('click', async ()=>{

    const url = base_url + '.json';

    const body = {

        matti: {
            test: 'hej'

        }
    }

    const options = {
        method: "PATCH",
        body: JSON.stringify(body),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(url,options);
    const data = await res.json(); 


});

(document.querySelector('#patchMovie') as HTMLButtonElement).addEventListener('click', async ()=>{

    const url = base_url + '/matti/-OIKiLZvHTtu5RmTTq7U.json';

    const body = {
        
        title: 'Game Of Thrones',
        year: 1999

    }

    const options = {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)

})

getAllNames(base_url+'.json')
.then(names =>{
    console.log(names);
    
    for(const key in names){


        console.log(key);

        console.log(names[key]);
        
        
    }
})
 

