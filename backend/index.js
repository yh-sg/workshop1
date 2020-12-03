//load libs
const express = require("express");
const morgan = require("morgan");
const fortuneCookie = require("fortune-cookie");
const cors = require('cors');

const cookies = () => {
    const idx = Math.floor(Math.random() * fortuneCookie.length);
    return fortuneCookie[idx];
}

//configurion
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

//create an instance of express
const app = express();

//use morgan to log all request. Use the combined format
app.use(morgan('combined'))
app.use(cors())

//resources

// GET /api/cookie -> application/json (cookie: 'cookie text')
app.get('/api/cookie', (req,res)=>{
    const count = parseInt(req.query['count']) || 1
    res.status(200)
    res.type('application/json')

    if (count == 1){
        res.json({cookie: cookies()})
    }else{
        const c = [];
        for(let i=0;i<count;i++){
            c.push({cookie: cookies()})
        }
        res.json(c)
    }
    // res.send({'cookie': fortuneCookie})
})

// serve frontend 
app.use(express.static(__dirname + '/frontend'))

//start the server
app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT} at ${new Date()}`);
})