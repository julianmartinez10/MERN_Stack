const express = require("express");
const cors = require("cors");           //  if our server doesn't have the correct headers set and isn't configured to accept the correct sorts of request, then when go to visit this server using javascript and ajax with it, then we're going to get cors exceptions, meaning we can't make requests to this server from the browser, we'd have to make it from somewhere else
const faker = require("faker");
const port = 8000;
const app = new express();

app.use(cors());
app.use(express.json());                //  allows app to work with json

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country(),
        }

    }
} 


//  CREATING ROUTES HERE
//  creating our api endpoints now
//  need a string(route) , and callback function with 2 params = 1) req -> represents the info for request 2) res -> represents the info for response
app.get("/api/hello", (req, res)=>{
    res.json({message:"Wazzzzzzzzup World!!!!!"});
})

app.get("/api/users/new", (req, res)=>{
    const user1 = new User()
    // console.log(user1)
    return res.json({result:user1})
})

app.get("/api/companies/new", (req, res)=>{
    const company1 = new Company()
    // console.log(company1)
    return res.json({result: company1})
})

app.get("/api/user/company", (req, res)=>{
    const user1 = new User();
    const company1 = new Company();
    return res.json({company: company1, user: user1})
})


//  make it so that server can listen for request on port 8000
app.listen(port, ()=> console.log(`Listening on port ${port}`));