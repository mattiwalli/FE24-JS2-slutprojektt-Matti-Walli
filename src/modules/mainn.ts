import {db} from "./firebase";
import {onValue, push, ref , update} from "firebase/database"

console.log(db)



const gymRef = ref(db, '/gym');

onValue(gymRef, snapshot => {
    const gymMembers = snapshot.val();
    const container = document.querySelector('#memberContainer') as HTMLDivElement;
    container.innerHTML = '';
    // console.log(gymMembers)

    for(const firebaseID in gymMembers){
        console.log(gymMembers[firebaseID].name);
        const memberEl = document.createElement('p');
        memberEl.innerText = gymMembers[firebaseID].name;
        container.append(memberEl)
    }
})

const form = document.querySelector('form');
form?.addEventListener('submit', event =>{
    event.preventDefault();

    // Sammanställ datan från formuläret
    const formData = new FormData(form);
    const newMember = {};

    formData.forEach( (value, key) =>{
        console.log(key, value);
        newMember[key] = value;
    })
    console.log(newMember)


    // Lägg till ny medlem till firebase
    const newID = push(gymRef).key;
    const newMemberRef = ref(db, '/gym/'+newID);
    update(newMemberRef, newMember);
})

// const usersRef = ref(db, '/users');

// onValue(usersRef, snapshot=>{

//     const users = snapshot.val();
//     console.log(users);
// } )

// const removeBtn = document.querySelector('#remove') as HTMLButtonElement;

// removeBtn.addEventListener('click', ()=>{
//     const nodeToRemove = ref(db, '/users/toremove')
//     remove(nodeToRemove);
// })


// const updateBtn = document.querySelector('#update') as HTMLButtonElement;
// updateBtn.addEventListener('click', ()=>{
//     const userRef = ref(db, '/users/-reuihworhoi');

//     update(userRef, {food: 'pasta'})
// })


// const addBtn = document.querySelector('#add') as HTMLButtonElement;
// addBtn.addEventListener('click', ()=>{
    
//     const newID = push(usersRef).key
//     console.log(newID)

//     const newUserRef = ref(db, '/users/'+newID);
    

// })

