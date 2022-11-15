interface IUser
{
    name: string;
    age?: number; //same as number | undefined
    id: number;
    email: string
}

interface IEmployee extends IUser
{
    salary: number
}

let employee: IEmployee = {
    salary: 0,
    name: "",
    id: 0,
    email: ""
}

let user: IUser = {
    name: "",
    id: 0,
    email: ""
}

user.name = "bear";
let {name: userName, email: userLogin}: IUser = {name: "John", id:1, email: ""};
console.log(userLogin);
console.log(name);

let users: IUser[] = [
    {name: "jo", id: 1, email: ""},
    {name: "jo", id: 2, email: ""},
    {name: "jo", id: 3, email: ""},
    {name: "jo", id: 4, email: ""}
]

//array deconstruction
let [user1, user2, ...restUsers] = users;
let user1alt = users[0];
console.log(user1);
console.log(user1alt)


//export = can use outside of this file, basically can import.
export interface ILogin {
    login(): IUser
}

class ConcreteLogin implements ILogin
{
    login(): IUser {
        throw new Error("Method not implemented.");
    }
    
}