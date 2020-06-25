const knex = require('knex')
const app = require('../src/app')
// const { makeUsersArray } = require('./stock-em.fixtures')
const { makeInventoriesArray } = require('./stock-em.fixtures')
const { makeCustomersArray } = require('./stock-em.fixtures')
const { makeSuppliersArray } = require('./stock-em.fixtures')
const { makeOrdersArray } = require('./stock-em.fixtures')
const { makeSkusArray } = require('./stock-em.fixtures')
const supertest = require('supertest')


describe.only('Stock-Em! Endpoints', function () {
    let db;
    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the users table', () => db('users').truncate())
    before('clean the inventories table', () => db('inventories').truncate())
    before('clean the customers table', () => db('customers').truncate())
    before('clean the suppliers table', () => db('suppliers').truncate())
    before('clean the orders table', () => db('orders').truncate())
    before('clean the skus table', () => db('skus').truncate())

    afterEach('cleanup', () => db('users').truncate())
    afterEach('cleanup', () => db('inventories').truncate())
    afterEach('cleanup', () => db('customers').truncate())
    afterEach('cleanup', () => db('suppliers').truncate())
    afterEach('cleanup', () => db('orders').truncate())
    afterEach('cleanup', () => db('skus').truncate())

    // ----------------------------------------
    // Inventory: 
    describe(`GET /inventory`, () => {
        context(`gets all inventory related to user_id`, () => {
            const testInventory = makeInventoriesArray()

            beforeEach('insert inventory', () => {
                return db
                    .into('inventories')
                    .insert(testInventory)
            })

            it(`responds with 200 and the full list of inventory`, () => {
                const expectedInventory = testInventory.filter(item => item.user_id === 1);

                return supertest(app)
                    .get(`api/stock-em/inventory`)
                    .send({ user_id: 1 })
                    .expect(200)
                    .expect(expectedInventory)
            })
        })
    })

    describe(`POST /inventory`, () => {
        context(`given data in the database`, () => {
            const testInventory = makeInventoriesArray()

            beforeEach('insert inventories', () => {
                return db
                    .into('inventories')
                    .insert(testInventory)
            })

            it(`responds with 201 and returns item object after insertion`, () => {
                const testLineItem = {
                    id: 9,
                    user_id: 1,
                    sku: 12345,
                    quantity: 100,
                    inv_description: 'relay',
                    inv_location: 'M10',
                    date_entered: '2020-1-1'
                }

                return supertest(app)
                    .post(`api/stock-em/inventory`)
                    .send(testLineItem)
                    .expect(201)
                    .expect(testLineItem)
            })
        })
    })

    describe(`PATCH /inventory`, () => {
        context(`given data in the database`, () => {
            const testInventory = makeInventoriesArray()

            beforeEach('insert inventories', () => {
                return db
                    .into('inventories')
                    .insert(testInventory)
            })

            it(`responds with 200 and returns updated item object after insertion`, () => {
                const testId = testInventory[0].id;
                const testUser_id = testInventory[0].user_id;
                const testLineItem = {
                    id: testId,
                    user_id: testUser_id,
                    sku: 12345,
                    quantity: 100,
                    inv_description: 'relay',
                    inv_location: 'M10',
                    date_entered: '2020-1-1'
                }

                return supertest(app)
                    .patch(`api/stock-em/inventory`)
                    .send(testLineItem)
                    .expect(200)
                    .expect(testLineItem)
            })
        })
    })

    // ----------------------------------------
    // Suppliers: 
    describe(`GET /suppliers`, () => {
        context(`given data in the database`, () => {
            const testSuppliers = makeSuppliersArray();
            beforeEach('insert suppliers', () => {
                return db
                    .into('suppliers')
                    .insert(testSuppliers)
            })

            it(`responds with 200 and returns the suppliers associated with the given user_id`, () => {
                const expectedSuppliers = testSuppliers.filter(item => item.user_id === 1);

                return supertest(app)
                    .get(`api/stock-em/suppliers`)
                    .send({ user_id: 1 })
                    .expect(200)
                    .expect(expectedSuppliers)
            })
        })
    })

    describe(`POST /suppliers`, () => {
        const testSuppliers = makeSuppliersArray();
        beforeEach('insert suppliers', () => {
            return db
                .into('suppliers')
                .insert(testSuppliers)
        })

        context(`Given data in the database`, () => {
            it(`responds with 204 and returns the supplier object that was inserted`, ()=> {
                const testSupplier = {
                    id: 5,
                    user_id: 1,
                    company: "Newly inserted company",
                    contact: "John Doe",
                    phone: "111-111-1112",
                    email: "111222@gmail.com",
                    sup_address: "1234 Main St., Nowhere USA"
                }
                    
                return supertest(app)
                    .post('/api/stock-em/suppliers')
                    .send(testSupplier)
                    .expect(201)
                    .expect(testSupplier)    
            })  
        })
    })

    describe(`PATCH /suppliers`, () => {
        const testSuppliers = makeSuppliersArray();
        beforeEach('insert suppliers', () => {
            return db
                .into('suppliers')
                .insert(testSuppliers)
        })

        context(`Given data in the database`, () => {
            it(`responds with 201 and returns the supplier object that was updated`, ()=> {
                const testId = testSuppliers[0].id;
                const testUser_id = testSuppliers[0].user_id;
                const testSupplier = {
                    id: testId,
                    user_id: testUser_id,
                    company: "Newly UPDATED company",
                    contact: "John Doe",
                    phone: "111-111-1112",
                    email: "111222@gmail.com",
                    sup_address: "1234 Main St., Nowhere USA"
                }
                    
                return supertest(app)
                    .patch('/api/stock-em/suppliers')
                    .send(testSupplier)
                    .expect(201)
                    .expect(testSupplier)    
            })
        })
    })

    // -----------------------------------------------
    // Customers: 
    describe(`GET /customers`, () => {
        context(`given data in the database`, () => {
            const testCustomers = makeCustomersArray();
            beforeEach('insert customers', () => {
                return db
                    .into('customers')
                    .insert(testCustomers)
            })


            it(`responds with 200 and returns the customers associated with the given user_id`, () => {
                const expectedCustomers = testCustomers.filter(item => item.user_id === 1);

                return supertest(app)
                    .get(`api/stock-em/customers`)
                    .send({ user_id: 1 })
                    .expect(200)
                    .expect(expectedCustomers)
            })
        })
    })

    describe(`POST /customers`, () => {
        const testCustomers = makeCustomersArray();
        beforeEach('insert customers', () => {
            return db
                .into('customers')
                .insert(testCustomers)
        })

        context(`Given data in the database`, () => {
            it(`responds with 204 and returns the customer object that was inserted`, ()=> {
                const testCustomer = {
                    id: 5,
                    user_id: 1,
                    company: "Test inserted company",
                    contact: "John Doe",
                    phone: "111-111-1112",
                    email: "111222@gmail.com",
                    bill_address: "1234 Main St., Nowhere USA",
                    ship_address: "1234 Main St., Nowhere USA"
                }
                    
                return supertest(app)
                    .post('/api/stock-em/customers')
                    .send(testCustomer)
                    .expect(201)
                    .expect(testCustomer)    
            })
        })
    })

    describe(`PATCH /customers`, () => {
        const testCustomers = makeCustomersArray();
        beforeEach('insert customers', () => {
            return db
                .into('customers')
                .insert(testCustomers)
        })

        context(`Given data in the database`, () => {
            it(`responds with 201 and returns the customer object that was updated`, ()=> {
                const testId = testCustomers[0].id;
                const testUser_id = testCustomers[0].user_id;
                const testCustomer = {
                    id: testId,
                    user_id: testUser_id,
                    company: "Newly UPDATED company",
                    contact: "John Does",
                    phone: "111-111-1112",
                    email: "111222@gmail.com",
                    bill_address: "1234 Main St., Nowhere USA",
                    ship_address: "1234 Main St., Nowhere USA"
                }
                    
                return supertest(app)
                    .patch('/api/stock-em/customers')
                    .send(testCustomer)
                    .expect(201)
                    .expect(testCustomer)    
            })
        })
    })

    // -----------------------------------------------
    // Orders: 
    describe(`GET /orders`, () => {
        context(`given data in the database`, () => {
            const testOrders = makeOrdersArray();
            beforeEach('insert orders', () => {
                return db
                    .into('orders')
                    .insert(testOrders)
            })


            it(`responds with 200 and returns the orders associated with the given user_id`, () => {
                const expectedOrders = testOrders.filter(item => item.user_id === 1);

                return supertest(app)
                    .get(`api/stock-em/orders`)
                    .send({ user_id: 1 })
                    .expect(200)
                    .expect(expectedOrders)
            })
        })
    })

    describe(`POST /orders`, () => {
        const testOrders = makeOrdersArray();
        beforeEach('insert orders', () => {
            return db
                .into('orders')
                .insert(testOrders)
        })

        context(`Given data in the database`, () => {
            it(`responds with 204 and returns the order object that was inserted`, ()=> {
                const testOrder = {
                    id: 7,
                    user_id: 1,
                    company: "Test inserted company",
                    sku: 12345,
                    quantity: 100,
                    inv_description: "capacitor",
                    cust_order: "PO200",
                    sup_order: "SO10",
                    date_entered: "2020-7-7"
                }
                    
                return supertest(app)
                    .post('/api/stock-em/orders')
                    .send(testOrder)
                    .expect(201)
                    .expect(testOrder)    
            })
        })
    })

    // -----------------------------------------------
    // SKUs: 
    describe(`GET /skus`, () => {
        context(`given data in the database`, () => {
            const testSkus = makeSkusArray;
            beforeEach('insert skus', () => {
                return db
                    .into('skus')
                    .insert(testSkus)
            })


            it(`responds with 200 and returns the skus associated with the given user_id`, () => {
                const expectedSkus = testSkus.filter(item => item.user_id === 1);

                return supertest(app)
                    .get(`api/stock-em/skus`)
                    .send({ user_id: 1 })
                    .expect(200)
                    .expect(expectedSkus)
            })
        })
    })

    describe(`POST /skus`, () => {
        const testSkus = makeSkusArray();
        beforeEach('insert skus', () => {
            return db
                .into('skus')
                .insert(testSkus)
        })

        context(`Given data in the database`, () => {
            it(`responds with 204 and returns the sku object that was inserted`, ()=> {
                const testSku = {
                    id: 7,
                    user_id: 1,
                    sku: 223344,
                    inv_description: "overload",
                    date_entered: "2020-5-1"
                }
                    
                return supertest(app)
                    .post('/api/stock-em/sku')
                    .send(testSku)
                    .expect(201)
                    .expect(testSku)    
            })
        })
    })
})