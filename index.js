const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get ('/', (req, res) => {
    res.send('my third node, wow i learn node js with nodemon to learn and express with auto start bal eto pechas kn')
});

const users = [
    {id:0, name:'sadh', email:'sadh@gmail.com'},
    {id:1, name:'sakib', email:'sakib@gmail.com'},
    {id:2, name:'mahabuba', email:'mahabuba@gmail.com'},
    {id:3, name:'salim', email:'salim@gmail.com'},
    {id:4, name:'jibon', email:'jibon@gmail.com'},
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use quary perameter
    if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
});

//app method
app.post('/users', (req, res) => {
    const newUser =  req.body;
    newUser.id = users.length;
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user  = users[id];
    res.send(user);

    // console.log(req.params.id);
})

app.get ('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'jackfruit', 'oranges'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('bal marka tok fazli aam')
})










app.listen(port, ()=> {
    console.log('Listening my third port', port);
})