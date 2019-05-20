const expre = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./routes/api');


const { mongoose } = require('./db');
// let employeeController = require('./controllers/employeeController')


let app = expre();

app.use(expre.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use('/api',api);
app.get('*', (req, res) => {

    res.sendFile('index.html',{root:path.join(__dirname,'public')})
})

app.listen(3000, () => console.log("server started successfully...."));

// app.use("/employees",employeeController);