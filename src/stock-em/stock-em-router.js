require('dotenv').config()
const express = require('express')
const { uuid } = require('uuidv4')
const logger = require('../logger')
const StockRouter = express.Router()
const StockService = require('./stock-em-service')

const bodyParser = express.json()

// ENDPOINTS: 

// User - maybe if I have time, still going to add user_id to every submit
// Inventory
    // GET
    // POST
    // PATCH
StockRouter
    .route('/inventory')
    .get(bodyParser,(req,res,next)=>{})
    .post(bodyParser,(req,res,next)=>{})
    .patch(bodyParser,(req,res,next)=>{})
// Suppliers
    // GET
    // POST
    // PATCH - maybe
StockRouter
    .route('/suppliers')
    .get(bodyParser,(req,res,next)=>{})
    .post(bodyParser,(req,res,next)=>{})
    .patch(bodyParser,(req,res,next)=>{})
// Customers
    // GET
    // POST
    // PATCH
StockRouter
    .route('/customers')
    .get(bodyParser,(req,res,next)=>{})
    .post(bodyParser,(req,res,next)=>{})
    .patch(bodyParser,(req,res,next)=>{})
// Orders
    // GET
    // POST
StockRouter
    .route('/past-orders')
    .get(bodyParser,(req,res,next)=>{})
    .post(bodyParser,(req,res,next)=>{})
// SKUs
    // GET
    // POST
StockRouter
    .route('/skus')
    .get(bodyParser,(req,res,next)=>{})
    .post(bodyParser,(req,res,next)=>{})

module.exports = StockRouter;