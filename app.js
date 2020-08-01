const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000



app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)


app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurantInfo = restaurant.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurantInfo })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurantSearch = restaurant.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurantSearch, keyword: keyword })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})