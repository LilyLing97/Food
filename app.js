// app.js
// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require handlebars in the project
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use (express.static('public'))
// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurantList.results})
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurantDescription: restaurant})
})
// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})