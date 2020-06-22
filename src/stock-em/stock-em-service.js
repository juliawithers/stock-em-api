const bcrypt = require('bcryptjs')
const xss = require('xss')

const StockService = {
    getAllInventory(knex, user_id) {
        return knex.select('*').from('inventory').where('user_id', user_id)
    },
    insertInventory(knex, newInventory) {
        // insert new inventory  
        return knex 
            .insert(newInventory)
            .into('inventory')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateInventory(knex, user_id, newInventoryFields) {
        // update inventory
        return knex('inventory')
            .where({ user_id })
            .update(newInventoryFields)
            
    },
    cleanInventory(inventory){
        return cleanedInventory = {
            id: inventory.id,
            user_id: inventory.user_id,
            sku: xss(inventory.sku),
            quantity: xss(inventory.quantity),
            description: inventory.description, 
            location: xss(inventory.location),
            date_added: xss(inventory.date_added)
        }
    },
    getAllSuppliers(knex, user_id) {
        return knex.select('*').from('suppliers').where('user_id', user_id)
    },
    insertSuppliers(knex, newSupplier) {
        // insert new user data   
        return knex 
            .insert(newSupplier)
            .into('suppliers')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateSuppliers(knex, user_id, newSuppliersFields) {
        // update inventory
        return knex('suppliers')
            .where({ user_id })
            .update(newSuppliersFields)
            
    },
    cleanSupplier(supplier){
        return cleanedSupplier = {
            id: supplier.id,
            user_id: supplier.user_id,
            company: xss(supplier.company),
            contact: xss(supplier.contact),
            phone: xss(supplier.phone),
            email: xss(supplier.email),
            address: xss(supplier.address)
        }
    },
    getAllCustomers(knex, user_id) {
        return knex.select('*').from('customers').where('user_id', user_id)
    },
    insertCustomers(knex, newCustomer) {
        // insert new user data   
        return knex 
            .insert(newCustomer)
            .into('customers')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateCustomers(knex, user_id, newCustomersFields) {
        // update inventory
        return knex('customers')
            .where({ user_id })
            .update(newCustomersFields)
            
    },
    cleanCustomers(customer){
        return cleanedCustomer = {
            id: customer.id, 
            user_id: customer.user_id,
            company: xss(customer.company),
            contact: xss(customer.contact),
            phone: xss(customer.phone),
            email: xss(customer.email),
            bill_address: xss(customer.bill_address),
            ship_address: xss(customer.ship_address)
        }
    },
    getAllOrders(knex, user_id) {
        return knex.select('*').from('orders').where('user_id', user_id)
    },
    insertOrders(knex, newOrder) {
        // insert new user data   
        return knex 
            .insert(newOrder)
            .into('suppliers')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    cleanOrders(order){
        return cleanedOrder = {
            user_id: order.user_id,
            company: order.company,
            sku: order.sku,
            quantity: xss(order.quantity),
            description: order.description, 
            order: xss(order.order),
            date_entered: order.date_entered
        }
    },
    getAllSkus(knex, user_id) {
        return knex.select('*').from('skus').where('user_id', user_id)
    },
    insertSkus(knex, newSku) {
        // insert new user data   
        return knex 
            .insert(newSku)
            .into('skus')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    cleanSkus(object){
        return object
    },
}
// ENDPOINTS: 

// User - maybe if I have time, still going to add user_id to every submit
// Inventory
    // GET
    // POST
    // PATCH
// Suppliers
    // GET
    // POST
    // PATCH - maybe
// Customers
    // GET
    // POST
    // PATCH
// Orders
    // GET
    // POST
// SKUs
    // GET
    // POST
    
    module.exports = StockService