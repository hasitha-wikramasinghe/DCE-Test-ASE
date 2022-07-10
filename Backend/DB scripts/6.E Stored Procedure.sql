create procedure GetActiveOrdersByCustomer @CustomerId uniqueidentifier
as
select Orders.*, Product.*, Supplier.* from Orders 
inner join Product on Orders.ProductId = Product.ProductId
inner join Supplier on Product.SupplierId = Supplier.SupplierId
where Orders.OrderBy = @CustomerId
and Orders.IsActive = '1'

--To execute this sql stored procedure
exec GetActiveOrdersByCustomer @CustomerId = '3FA85F54-5717-4562-B3FC-2C963F66AFA7'



