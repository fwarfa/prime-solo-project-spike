require('dotenv').config();

const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const { resetWarningCache } = require('prop-types');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('req.query is ',req.query);

    console.log('api key', process.env.MAP_API_KEY);
    
    `https://maps.googleapis.com/maps/api/place/textsearch/json?input=${name}%20near%20${(city_name, state_name)}&key= ${process.env.GOOGLE_API_KEY}`
    axios({
      method: 'GET',
      url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=`,
      params: {
        key: process.env.MAP_API_KEY,
        companyName: req.query.companyName,
        companyCity: req.query.companyCity,
        companyState: req.query.companyState
      }
    })
    .then((response) => {
      console.log('api response ', response.data.data);
      res.send(response.data.data)
    })
    .catch(err => {
      console.log('giphy err', err.response.data);
      res.sendStatus(500);
    });
  
  });

  module.exports = router;