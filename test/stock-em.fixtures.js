function makeUsersArray() {
    return [
      {
        id: 1,
        username: 'test-user-1',
        passw: 'password1!'
      },
      {
        id: 2,
        username: 'test-user-2',
        passw: 'password2!'
      },
      {
        id: 3,
        username: 'test-user-3',
        passw: 'password3!'
      },
      {
        id: 4,
        username: 'test-user-4',
        passw: 'password4!'
      },
    ]
}
  
function makeInventoriesArray() {
    return [
        {
            id: 1,
            user_id: 1,
            sku: '12345',
            quantity: 100, 
            inv_description: 'relay',
            inv_location: 'M01',
            date_entered: '2020-1-1'
        },
        {
            id: 2,
            user_id: 1,
            sku: '12345',
            quantity: 300, 
            inv_description: 'relay',
            inv_location: 'M05',
            date_entered: '2020-5-1'
        },
        {
            id: 3,
            user_id: 1,
            sku: '23456',
            quantity: 100, 
            inv_description: 'capacitor',
            inv_location: 'M02',
            date_entered: '2020-5-1'
        },
        {
            id: 4,
            user_id: 1,
            sku: '34567',
            quantity: 100, 
            inv_description: 'overload',
            inv_location: 'M03',
            date_entered: '2020-7-10'
        },
        {
            id: 5,
            user_id: 2,
            sku: '12345',
            quantity: 110, 
            inv_description: 'relay',
            inv_location: 'M01',
            date_entered: '2020-1-1'
        },
        {
            id: 6,
            user_id: 2,
            sku: '12345',
            quantity: 350, 
            inv_description: 'relay',
            inv_location: 'M05',
            date_entered: '2020-5-1'
        },
        {
            id: 7,
            user_id: 2,
            sku: '23456',
            quantity: 50, 
            inv_description: 'capacitor',
            inv_location: 'M02',
            date_entered: '2020-5-1'
        },
        {
            id: 8,
            user_id: 2,
            sku: '34567',
            quantity: 50, 
            inv_description: 'overload',
            inv_location: 'M03',
            date_entered: '2020-7-10'
        },
    ]
}

function makeCustomersArray() {
    return [
        {
            id: 1,
            user_id: 1,
            company: "Company 1",
            contact: "Jane Doe",
            phone: "111-111-1112",
            email: "111222@gmail.com",
            bill_address: "1234 Main St., Somewhere USA",
            ship_address: "1234 Main St., Somewhere USA"
        },
        {
            id: 2,
            user_id: 1,
            company: "Company 2",
            contact: "Jane Smith",
            phone: "111-111-2222",
            email: "1234@gmail.com",
            bill_address: "432 Main St., Nowhere USA",
            ship_address: "432 Main St., Nowhere USA"
        },
        {
            id: 3,
            user_id: 2,
            company: "Company 1",
            contact: "Janet Doe",
            phone: "111-111-1112",
            email: "111222@gmail.com",
            bill_address: "1234 Main St., This USA",
            ship_address: "1234 Main St., This USA"
        },
        {
            id: 4,
            user_id: 2,
            company: "Company 2",
            contact: "Janet Smith",
            phone: "111-111-2222",
            email: "1234@gmail.com",
            bill_address: "555 Main St., That USA",
            ship_address: "555 Main St., That USA"
        }
    ]
}


function makeSuppliersArray() {
    return [
        {
            id: 1,
            user_id: 1,
            company: "Company 1",
            contact: "John Doe",
            phone: "111-111-1112",
            email: "111222@gmail.com",
            sup_address: "1234 Main St., Nowhere USA"
        },
        {
            id: 2,
            user_id: 1,
            company: "Company 2",
            contact: "John Smith",
            phone: "111-111-2222",
            email: "1234@gmail.com",
            sup_address: "555 Main St., Nowhere USA"
        },
        {
            id: 3,
            user_id: 2,
            company: "Company 1",
            contact: "John Doe",
            phone: "111-111-1112",
            email: "111222@gmail.com",
            sup_address: "1234 Main St., Nowhere USA"
        },
        {
            id: 4,
            user_id: 2,
            company: "Company 2",
            contact: "John Smith",
            phone: "111-111-2222",
            email: "1234@gmail.com",
            sup_address: "555 Main St., Nowhere USA"
        }
    ]
}

function makeOrdersArray() {
    return [
        {
            id: 1,
            user_id: 1,
            company:"Some Company",
            sku: '1234',
            quantity: 100,
            inv_description: "capacitor",
            cust_order: "PO123",
            sup_order: "",
            date_entered: "2020-1-1"
        },
        {
            id: 2,
            user_id: 1,
            company:"Some Company Two",
            sku: '1234',
            quantity: 50,
            inv_description: "capacitor",
            cust_order: "PO1234",
            sup_order: "PO123",
            date_entered: "2020-1-1"
        },
        {
            id: 3,
            user_id: 1,
            company:"Some Company",
            sku: '1234',
            quantity: 100,
            inv_description: "capacitor",
            cust_order: "",
            sup_order: "SO123",
            date_entered: "2020-1-1"
        },
        {
            id: 4,
            user_id: 1,
            company:"Some Company Two",
            sku: '1234',
            quantity: 50,
            inv_description: "capacitor",
            cust_order: "",
            sup_order: "SO1234",
            date_entered: "2020-1-1"
        },
        {
            id: 5,
            user_id: 2,
            company:"Some Company",
            sku: '1234',
            quantity: 100,
            inv_description: "capacitor",
            cust_order: "PO123",
            sup_order: "",
            date_entered: "2020-1-1"
        },
        {
            id: 6,
            user_id: 2,
            company:"Some Company Two",
            sku: '1234',
            quantity: 50,
            inv_description: "capacitor",
            cust_order: "PO1234",
            sup_order: "",
            date_entered: "2020-1-1"
        }
    ]
}


function makeSkusArray() {
    return [
        {
            id: 1,
            user_id: 1,
            sku:'1234',
            inv_description: "capacitor",
            date_entered: "2020-5-5"
        },
        {
            id: 2,
            user_id: 1,
            sku:'12344',
            inv_description: "overload",
            date_entered: "2020-5-1"
        },
        {
            id: 3,
            user_id: 1,
            sku:'5555',
            inv_description: "relay",
            date_entered: "2020-5-1"
        },
        {
            id: 4,
            user_id: 1,
            sku:'12345',
            inv_description: "overload",
            date_entered: "2020-5-1"
        },
        {
            id: 5,
            user_id: 2,
            sku:'2222',
            inv_description: "relay",
            date_entered: "2020-5-5"
        },
        {
            id: 6,
            user_id: 2,
            sku:'223344',
            inv_description: "overload",
            date_entered: "2020-5-1"
        }
    ]
}

module.exports = {
    makeUsersArray,
    makeInventoriesArray,
    makeCustomersArray,
    makeSuppliersArray,
    makeOrdersArray,
    makeSkusArray
}