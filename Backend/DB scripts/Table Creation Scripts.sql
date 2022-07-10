create table Customer (
	UserId uniqueidentifier primary key default newid(),
	Username varchar(30),
	Email varchar(20),
	FirstName varchar(20),
	LastName varchar(20),
	CreatedOn Date,
	IsActive bit default 'false'
)

create table Supplier (
	SupplierId uniqueidentifier primary key default newid(),
	SupplierName varchar(50),
	CreatedOn date,
	IsActivate bit default 'false'
)

create table Product (
	ProductId uniqueidentifier primary key default newid(),
	ProductName varchar(50),
	UnitPrice decimal,
	SupplierId uniqueidentifier foreign key references Supplier(SupplierId),
	CreatedOn date,
	IsActive bit default 'false'
)

create table Orders (
	OrderId uniqueidentifier primary key default newid(),
	ProductId uniqueidentifier foreign key references Product(ProductId),
	OrderStatus int default '1',
	OrderType int default '1',
	OrderBy uniqueidentifier foreign key references Customer(UserId),
	OrderedOn date,
	ShippedOn date,
	IsActive bit default '1'
)