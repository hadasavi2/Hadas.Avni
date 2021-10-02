const http = require('http');
const mysql = require ('mysql')
const express = require ("express")
const bodyParser = require ("body-parser")


const app = express()

app.get("/",(req, res)=> {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('Hello, World! - Hadas made it 2');
})

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password:'221993',
  database:'mysql'
})
connection.connect(error=>{
  if (error){
    throw error
  }
  console.log('Hadas here')
})
app.get("/customers",function(req,res){
  connection.query ("SELECT * FROM customers" ,function (err, rows, fields){
    if(err) 
      throw err
    console.log (`The solution is: ${JSON.stringify(rows)} 0 solution`)
    res.send(JSON.stringify(rows))
  })
})

app.listen(8080,()=>{
  console.log ('Hadas2')
})