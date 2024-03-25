const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'pug');

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("PUG TEMPLATES");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});


// app.get('/users/:id', (req, res) => {
    // const userId = req.params.id;
    // Do something with the user ID
    // res.send(User ID: ${userId});
    // });
// 
// app.get('/users/:id', (req, res) => {
        // const userId = req.params.id;
        // Do something with the user ID
        // res.render('home', { userId });
        // });