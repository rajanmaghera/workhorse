var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

try {
    await mongo.connect('mongodb://localhost:27017/workhorse', { useNewUrlParser: true });
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Connected to ' + mongo.connection.db);
  }

var app = express()
app.use(bodyParser())
app.use(bodyParser.json({limit:'5mb'}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var EmployeesSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    role: { type: String },
},{ versionKey: false });

var model = mongo.model('users', EmployeesSchema, 'users');

app.post("/api/saveUser",function(req,res){
    var mod = new model(req.body);
    if(req.body.mode == "Save")
    {
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been inserted"});
            }
        });
    }
    else
    {
        model.findByIdAndUpdate(req.body.id, { firstName: req.body.firstName, lastName: req.body.lastName, role: req.body.role }, function(err,data) {
            if (err) {
                res.send(err);
            }
            else{
                res.send({data: "Record has been updated"});
            }

        });
    }

})

app.get("/api/getUser",function(req,res){
    model.find({},function(err,data){
        if(err){
            res.send(err);
        }
        else {
            res.send(data);
        }
    })
});

app.listen(8080, function() {
    console.log("Application is listening on port 8080")
})