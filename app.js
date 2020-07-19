const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const restaurant = require('./restaurant.json')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.get('/', (req, res) => {

  res.render('index', { restaurants: restaurant.results })
})
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurantInfo = restaurant.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurantInfo })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})