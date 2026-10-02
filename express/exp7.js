import express from "express";

const app = express();

app.use(express.json());

async function getUser(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const userData = {
        name: "amish",
        id: 41,
        email: "amish@123",
      };
      if (id == 41) {
        res(userData);
      } else {
        rej("User not found");
      }
    }, 5000);
  });
}

const asyncHandler= (fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next);
}

app.get("/profile/:id", asyncHandler(async (req, res, next) => {
    try{
        const id = Number(req.params.id);
        if(Number.isNaN(id)){
            res.status(400).send("Invalid id");
        }
        const user=await getUser(id);
        res.send(user);
    } catch(err){
        next(err);
    }
}));

app.use((err, req, res, next) => {
  console.log("Inside global error handler");
  console.log(err);
  res.status(400).send({ message: "bad request data" });
});

app.listen(6000, () => {
  console.log("Server listening on port 5000");
});
