/*

 A website designed to present projects and skills related to website development, including:
 * HTML
 * CSS
 * EJS
 * ExpressJS
 * Javascript
 * Nodejs
 * Bootstrap


*/

const express = require('express')
const app = express()
const port = 3000

// Used for setting the engine to prevent error
app.set('view engine', 'ejs');

// Enables accessing static files (Javascript, css, images, etc.) in the "public" folder
// http://expressjs.com/en/starter/static-files.html
/* If running the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve: 
 const path = require('path')
 app.use('/static', express.static(path.join(__dirname, 'public')))
*/

app.use(express.static("public"));


// Routing
// http://expressjs.com/en/starter/basic-routing.html

// Request methods: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

app.get('/', (req, res) => {
  res.render("pages/home", {
    title:"Homepage"
  })
})

app.get('/about', (req, res) => {
  res.render("pages/template", {
    title:"About"
  })
})

app.listen(port, () => {
  console.log(`Initializing website...`)
  console.log(`Web Router is listening on port ${port}.`)
  console.log(`Connection can now be established on browser.`)
  console.log(`Connect with: http://localhost:${port}`)
})







