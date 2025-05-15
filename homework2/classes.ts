export class User{
    username:string;
    email:string;
    password:string;
}

const newUser = new User();
newUser.username = "Gio"
newUser.email = "gio.com"
newUser.password= "123";
console.log(newUser);

//using constructor

export class gameList{
    username:string;
    email:string;
    password:string;
 constructor(username:string, email:string, password:string) {
     this.username = username;
     this.email= email;
     this.password = password;

 }
}

let gameList2 = new gameList("gio", "gio.com", "sass");
console.log(gameList2);
