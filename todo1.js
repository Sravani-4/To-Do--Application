var express= require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors())
const TodoSchema = new mongoose.Schema({
    task: String,
});
const Todomodel = mongoose.model("todos1",TodoSchema);

mongoose.connect("mongodb://127.0.0.1:27017/shopping");
app.post("/post",(req, res)=>{
    Todomodel.create({
        task:req.body.task
    })
    .then((result) =>res.json(result))
    .catch((err)=>res.json(err));
});
app.get("/get",function(req, res){
Todomodel.find()
.then((result) =>res.json(result))
.catch((err)=>res.json(err));
});
app.delete("/delete/:id",function(res,res){
    const{ id }= req.params;
    Todomodel.findByIdAndDelete(id,{task:req.body.task})
    .then((result) =>res.json(result))
    .catch((err)=>res.json(err));
});
app.put("/update/:id",function(res,res){
    const{ id }= req.params;
    Todomodel.findByIdAndUpdate(id,{task:req.body.task})
    .then((result) =>res.json(result))
    .catch((err)=>res.json(err));
});
let server = app.listen(8081,function(){
    console.log("server is running")
});

 