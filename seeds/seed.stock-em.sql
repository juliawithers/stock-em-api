INSERT INTO users (username, passw)
VALUES
('user1','user1!'),
('user2','user2!')
;

INSERT INTO inventories (user_id, sku, quantity, inv_description, inv_location, date_entered)
VALUES
  (1,12345, 400, 'relay', 'M01','2020-1-1'),
  (1,23456, 400, 'capacitor', 'M02','2020-1-1'),
  (1,34567, 400, 'overload', 'M03','2020-1-1'),
  (2,12345, 300, 'relay', 'M01','2020-1-1'),
  (1,12345, 400, 'relay', 'M01','2020-1-5'),
  (2,12345, 400, 'relay', 'M01','2020-3-1'),
  (1,23456, 400, 'capacitor', 'M02','2020-7-7')
;
    
INSERT INTO suppliers (user_id, company, contact, phone, email, sup_address)
VALUES
(1, 'John Deer', 'John Doe', '111-111-1111', 'john.doe@gmail.com', '1234 Main St. Nowhere USA'),
(1, 'Jane Deer', 'Jane Doe', '111-111-2222', 'jane.doe@gmail.com', '4321 Main St. Nowhere USA'),
(1, 'This Company LLC', 'Some Person', '111-222-2222', 'someone@gmail.com', '4321 Main St. Somewhere USA'),
(1, 'That Company LLC', 'That Person', '222-222-2222', 'notsomeone@gmail.com', '1234 Main St. Somewhere USA'),
(2, 'John Deer', 'John Doe', '111-111-1111', 'john.doe@gmail.com', '1234 Main St. Nowhere USA'),
(2, 'Jane Deer', 'Jane Doe', '111-111-2222', 'jane.doe@gmail.com', '4321 Main St. Nowhere USA'),
(2, 'This Company LLC', 'Some Person', '111-222-2222', 'someone@gmail.com', '4321 Main St. Somewhere USA'),
(2, 'That Company LLC', 'That Person', '222-222-2222', 'notsomeone@gmail.com', '1234 Main St. Somewhere USA')
;

INSERT INTO customers (user_id, company, contact, phone, email, bill_address,ship_address)
VALUES
(1, 'Joe Deer', 'Joe Doe', '111-111-1111', 'joe.doe@gmail.com', '1234 Main St. Nowhere USA','1234 Main St. Nowhere USA'),
(1, 'Janet Deer', 'Janet Doe', '111-111-2222', 'janet.doe@gmail.com', '4321 Main St. Nowhere USA','4321 Main St. Nowhere USA'),
(1, 'This INC LLC', 'This Person', '111-222-2222', 'this@gmail.com', '4321 Main St. Somewhere USA', '4321 Main St. Somewhere USA'),
(1, 'That INC LLC', 'Areal Person', '222-222-2222', 'areal@gmail.com', '4321 Main St. Somewhere USA', '4321 Main St. Somewhere USA'),
(2, 'Joe Deer', 'Joe Doe', '111-111-1111', 'joe.doe@gmail.com', '1234 Main St. Nowhere USA','1234 Main St. Nowhere USA'),
(2, 'Janet Deer', 'Janet Doe', '111-111-2222', 'janet.doe@gmail.com', '4321 Main St. Nowhere USA','4321 Main St. Nowhere USA'),
(2, 'This INC LLC', 'This Person', '111-222-2222', 'this@gmail.com', '4321 Main St. Somewhere USA', '4321 Main St. Somewhere USA'),
(2, 'That INC LLC', 'Areal Person', '222-222-2222', 'areal@gmail.com', '4321 Main St. Somewhere USA', '4321 Main St. Somewhere USA')
;

INSERT INTO orders (user_id, company, sku, quantity, inv_description, cust_order, sup_order, date_entered)
VALUES
(1,'Company 1', 12345, 200, 'relay', 'PO01','', '2019-7-1'),
(1,'Company 1', 23456, 200, 'capacitor', 'PO02','', '2019-4-9'),
(1,'Company 2', 12345, 100, 'relay', 'PO03','', '2019-10-7'),
(1,'Company 2', 34567, 200, 'overload', 'PO04','', '2019-8-12'),
(2,'Company 1', 12345, 200, 'relay', 'PO01','', '2019-7-10'),
(2,'Company 1', 23456, 200, 'capacitor', 'PO02','', '2019-9-7'),
(2,'Company 2', 34567, 200, 'overload', 'PO03','', '2019-12-7'),
(1,'Company 12', 12345, 200, 'relay', '','SO01', '2019-12-7'),
(1,'Company 12', 23456, 200, 'capacitor', '','SO02', '2019-3-7'),
(1,'Company 11', 12345, 100, 'relay', '','SO03', '2019-3-3'),
(1,'Company 11', 34567, 200, 'overload', '','SO04', '2019-7-10'),
(2,'Company 11', 12345, 200, 'relay', '','SO01', '2019-7-7'),
(2,'Company 12', 23456, 200, 'capacitor', '','SO02', '2019-1-7'),
(2,'Company 11', 34567, 200, 'overload', '','SO03', '2019-10-7')
;

INSERT INTO skus (user_id, sku, inv_description, date_entered)
VALUES
(1, 12345, 'relay','2020-1-1'),
(1, 23456, 'capacitor','2020-1-2'),
(1, 34567, 'overload','2020-5-1'),
(1, 45678, 'compressor','2020-7-7'),
(2, 12345, 'relay','2020-1-1'),
(2, 23456, 'capacitor','2020-1-2'),
(2, 34567, 'overload','2020-5-1'),
(2, 45678, 'compressor','2020-7-7')
;
