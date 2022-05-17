import {v4 as uuidv4} from 'uuid';

let users =  [
    {
        "name" : "mario",
        "surname" : "jon",
        "age" : 34
    }
];

export const getUsers =  (req,res)=>{ 
    res.send(users)
}
export const createUser = (req,res) => { 
    let user = req.body;

    users.push({...user, id:  uuidv4()});
    res.send(`User with the username ${user.name} added to the database`);
}
export const getUser = (req,res) =>{
    const {id} = req.params;
    const foundUser =  users.find((user)=> user.id===id)
    console.log(foundUser);
    res.send(foundUser)
}
export const deleteUser = (req,res) => {
    const {id} = req.params;
    
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} deleted`)
}
export const updateUser =  (req, res) =>{
    const {id} = req.params;
    const {name, surname, age } = req.body;
    const user = users.find((user) => user.id === id);

    if(name) user.name = name;
    if(surname) user.surname = surname;
    if(age) user.age = age;

    console.log(`user with the id ${id} is updated`);
}