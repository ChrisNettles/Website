const express = require('express')
const app = express()
const port = 3000

// Used for setting the engine to prevent error
app.set('view engine', 'ejs');

// Needed for accessing javascripts + css
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render("pages/template", {
    title:"Template"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})