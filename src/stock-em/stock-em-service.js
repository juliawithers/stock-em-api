// const bcrypt = require('bcryptjs')
const xss = require('xss')

const StockService = {
    getAllInventory(knex, user_id) {
        return knex.select('*').from('inventories').where('user_id', user_id)
    },
    insertInventory(knex, newInventory) {
        return knex 
            .insert(newInventory)
            .into('inventories')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateInventory(knex, id, newInventoryFields) {
        return knex('inventories')
            .where('id', id)
            .update(newInventoryFields)
            .returning('*')
            
    },
    cleanInventory(inventory){
        return cleanedInventory = {
            id: inventory.id,
            user_id: inventory.user_id,
            sku: xss(inventory.sku),
            quantity: xss(inventory.quantity),
            inv_description: inventory.inv_description, 
            inv_location: xss(inventory.inv_location),
            date_entered: xss(inventory.date_entered)
        }
    },
    deleteInventory(knex, id){
        return knex('inventories')
            .where('id', id)
            .delete()
    },
    getAllSuppliers(knex, user_id) {
        return knex.select('*').from('suppliers').where('user_id', user_id)
    },
    insertSuppliers(knex, newSupplier) { 
        return knex 
            .insert(newSupplier)
            .into('suppliers')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateSuppliers(knex, id, newSuppliersFields) {
        return knex('suppliers')
            .where('id', id )
            .update(newSuppliersFields)
            .returning('*')
            
    },
    cleanSupplier(supplier){
        return cleanedSupplier = {
            id: supplier.id,
            user_id: supplier.user_id,
            company: xss(supplier.company),
            contact: xss(supplier.contact),
            phone: xss(supplier.phone),
            email: xss(supplier.email),
            sup_address: xss(supplier.sup_address)
        }
    },
    getAllCustomers(knex, user_id) {
        return knex.select('*').from('customers').where('user_id', user_id)
    },
    insertCustomers(knex, newCustomer) {
        return knex 
            .insert(newCustomer)
            .into('customers')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    updateCustomers(knex, id, newCustomersFields) {
        return knex('customers')
            .where('id', id)
            .update(newCustomersFields)
            .returning('*')
            
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
        return knex 
            .insert(newOrder)
            .into('orders')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    cleanOrders(order){
        return cleanedOrder = {
            id: order.id,
            user_id: order.user_id,
            company: order.company,
            sku: order.sku,
            quantity: Number(xss(order.quantity)),
            inv_description: order.inv_description, 
            cust_order: xss(order.cust_order),
            sup_order: xss(order.sup_order),
            date_entered: order.date_entered
        }
    },
    getAllSkus(knex, user_id) {
        return knex.select('*').from('skus').where('user_id', user_id)
    },
    insertSkus(knex, newSku) { 
        return knex 
            .insert(newSku)
            .into('skus')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    cleanSkus(sku){
        return cleanedSku = {
            id: sku.id,
            user_id: sku.user_id,
            sku: xss(sku.sku),
            inv_description: xss(sku.inv_description),
            date_entered: sku.date_entered
        }
    },
}
    
module.exports = StockService