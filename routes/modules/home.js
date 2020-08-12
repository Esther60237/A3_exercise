const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurant => {
      res.render('index', { restaurant })
    })
    .catch(error => console.error(error))
})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  Restaurant.find()
    .lean()
    .then(restaurants => {
      const restaurantSearched = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(keyword) || restaurant.name_en.toLowerCase().includes(keyword)
      )
      return res.render('index', { restaurant: restaurantSearched, keyword })
    })
    .catch(error => console.log(error))
})


module.exports = router