let express = require("express");
let app = express();

const path = require("path");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/dist'));


let morgan = require("morgan");
app.use(morgan('dev'));

// public name: string = "",
// public description: string = "",
// public price: number = 0,
// public qty: number = 0,
// public editable: boolean = false,
// public created_at: Date = new Date(),
// public updated_at: Date = new Date()

var widgets = [
    {
         name: "First Widget",
         description: "First widget description",
         price: 100,
         qty: 10,
         editable: false,
         created_at: Date.now(),
         updated_at: Date.now()
    },
    {
         name: "Second Widget",
         description: "Second widget description",
         price: 200,
         qty: 20,
         editable: false,
         created_at: Date.now(),
         updated_at: Date.now()
    }
]

// Create
app.post('/widgets', (req, res, next)=>{
    console.log(req.body);
    widgets.push(req.body);
    res.json(true);
})

// Read (1)
app.get('/widgets/:id', (req, res, next)=>{
    
})
// Read (all)
app.get('/widgets', (req, res, next)=>{
    res.json(widgets);
})

// Update
app.put('/widgets/:id', (req, res, next)=>{
    
})

// Destroy
app.delete('/widgets/:id', (req, res, next)=>{
    
})
app.listen(1337);