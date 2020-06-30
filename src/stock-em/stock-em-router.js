require('dotenv').config()
const express = require('express')
// const { uuid } = require('uuidv4')
const logger = require('../logger')
const StockRouter = express.Router()
const StockService = require('./stock-em-service')
const { json } = require('express')

const bodyParser = express.json()

// ENDPOINTS: 

// User - maybe if I have time, still going to add user_id to every submit
// Inventory
    // GET
    // POST
    // PATCH
StockRouter
    .route('/inventory')
    .get(bodyParser,(req,res,next)=>{
        // the user must click on enter to open, so we will use enter as login confirmation for now. 
        // GET WORKS 6/24
        // can use select from order by date_added to organize by date. 
        const user_id = Number(req.body.user_id);

        const knexInstance = req.app.get('db');
        StockService.getAllInventory(knexInstance,user_id)
        .then(inventory => {
            res.status(200).json(inventory.map(item => {
                return StockService.cleanInventory(item)
            }))
        })
        .catch(next)
    })
    .post(bodyParser,(req,res,next)=>{
        // POST works
        const newInv = req.body;
        const knexInstance = req.app.get('db');
        StockService.insertInventory(knexInstance,newInv)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(next)
    })
    .patch(bodyParser,(req,res,next)=>{
        // PATCH works
        const updInv = req.body;
        const knexInstance = req.app.get('db');
        StockService.updateInventory(knexInstance,updInv.id,updInv)
        .then(item => {
            res.status(201).json(item[0])
        })
        .catch(next)
    })
    .delete(bodyParser,(req,res,next)=>{
        const id = req.body.id;
        const knexInstance = req.app.get('db');
        StockService.deleteInventory(knexInstance,id)
        .then( item =>{
            return res.status(204).json(item)
        })
        .catch(next)
    })

// Suppliers
    // GET
    // POST
    // PATCH - maybe
StockRouter
    .route('/suppliers')
    .get(bodyParser,(req,res,next)=>{
        // GET works
        const user_id = req.body.user_id;
        const knexInstance = req.app.get('db');
        StockService.getAllSuppliers(knexInstance,user_id)
        .then(suppliers => {
            if (!suppliers) {
                logger.error(`No suppliers listed for this user`)
                res.json([]);
            }
            res.status(200).json(suppliers.map(supplier => {
                return StockService.cleanSupplier(supplier)
            }))
        })
        .catch(next)
    })
    .post(bodyParser,(req,res,next)=>{
        // POST works
        const newSup = req.body;
        const knexInstance = req.app.get('db');
        StockService.insertSuppliers(knexInstance,newSup)
        .then(supplier => {
            res.status(201).json(supplier)
        })
        .catch(next)
    })
    .patch(bodyParser,(req,res,next)=>{
        // PATCH works
        const updSup = req.body;
        const knexInstance = req.app.get('db');
        StockService.updateSuppliers(knexInstance,updSup.id,updSup)
        .then(supplier => {
            res.status(201).json(supplier[0])
        })
        .catch(next)
    })

// Customers
    // GET
    // POST
    // PATCH
StockRouter
    .route('/customers')
    .get(bodyParser,(req,res,next)=>{
        // GET works
        const user_id = req.body.user_id;
        const knexInstance = req.app.get('db');
        StockService.getAllCustomers(knexInstance,user_id)
        .then(customers => {
            if (!customers) {
                logger.error(`No customers listed for this user`)
                res.json([]);
            }
            res.status(200).json(customers.map(customer => {
                return StockService.cleanCustomers(customer)
            }))
        })
        .catch(next)
    })
    .post(bodyParser,(req,res,next)=>{
        // POST works
        const newCust = req.body;
        const knexInstance = req.app.get('db');
        StockService.insertCustomers(knexInstance,newCust)
        .then(customer => {
            res.status(201).json(customer)
        })
        .catch(next)
    })
    .patch(bodyParser,(req,res,next)=>{
        // PATCH works
        const updCust = req.body;
        const knexInstance = req.app.get('db');
        StockService.updateCustomers(knexInstance,updCust.id,updCust)
        .then(customer => {
            res.status(201).json(customer[0])
        })
        .catch(next)
    })

// Orders
    // GET
    // POST
StockRouter
    .route('/past-orders')
    .get(bodyParser,(req,res,next)=>{
        // GET works
        const user_id = req.body.user_id;
        const knexInstance = req.app.get('db');
        StockService.getAllOrders(knexInstance,user_id)
        .then(orders => {
            if (!orders) {
                logger.error(`No customers listed for this user`)
                res.json([]);
            }
            res.status(200).json(orders.map(orders => {
                return StockService.cleanOrders(orders)
            }))
        })
        .catch(next)
    })
    .post(bodyParser,(req,res,next)=>{
        // POST works
        const newOrder = req.body;
        const knexInstance = req.app.get('db');
        StockService.insertOrders(knexInstance,newOrder)
        .then(order => {
            res.status(201).json(order)
        })
        .catch(next)
    })

// SKUs
    // GET
    // POST
StockRouter
    .route('/skus')
    .get(bodyParser,(req,res,next)=>{
        // GET works
        const user_id = req.body.user_id;
        const knexInstance = req.app.get('db');
        StockService.getAllSkus(knexInstance,user_id)
        .then(skus => {
            if (!skus) {
                logger.error(`No skus listed for this user`)
                res.json([]);
            }
            res.status(200).json(skus.map(skus => {
                return StockService.cleanSkus(skus)
            }))
        })
        .catch(next)
    })
    .post(bodyParser,(req,res,next)=>{
        // POST works
        const newSku = req.body;
        const knexInstance = req.app.get('db');
        StockService.insertSkus(knexInstance,newSku)
        .then(sku => {
            res.status(201).json(sku)
        })
        .catch(next)
    })

module.exports = StockRouter;