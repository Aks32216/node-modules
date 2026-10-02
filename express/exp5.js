import express from "express";

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    res.status(400).send("username and password required");
  }
  console.log(name, password);
  res.send({ message: "Saved successfully" });
});

app.post("/echo",(req,res)=>{
    const body=req.body;
    console.log(body);
    const response={
        ...body,
        receivedAt: new Date().toISOString()
    }
    console.log(response);
    // res.send(response);

    res.send({...req.body,receivedAt: new Date().toISOString()})
})

app.listen(6000, () => {
  console.log("Server listening on port 5000");
});
