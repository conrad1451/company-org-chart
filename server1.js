const express = require("express");
const moduleToFetch = require("./index");
const getDatabase = moduleToFetch.getDatabase;
const newEntryToDatabase = moduleToFetch.newEntryToDatabase;
const port = 8000;

const app = express();

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

// CHQ: the endpoint of URL/users returns the database entries in JSON format
app.get("/users", async (req, res) => {
  const users = await getDatabase();
  res.json(users);
});
  
app.listen(port, console.log(`Server started on ${port}`));
