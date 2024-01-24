
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'; 
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.post('/server', function(req, res){
    
    console.log(req.body)
  });
//create a server object:

app.get('/server', (req, res)=> {
    console.log(__dirname);
      res.sendFile(path.join(__dirname, 'views/server.html'));
     
    });
  
  
  app.get('/home', (req, res)=> {
    console.log(__dirname)
      res.sendFile(path.join(__dirname, 'views/home.html'))
     
    });

    app.get('/mansi', (req, res)=> {
        console.log(__dirname)
          res.render("mansi.ejs", {"name":"mansi"})
         
        });


app.listen(5000, function(req,res){
    console.log("server start")
    
});