USE [DCE_BackendTest]
GO
INSERT [dbo].[Customer] ([UserId], [Username], [Email], [FirstName], [LastName], [CreatedOn], [IsActive]) VALUES (N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'Hasithawiky', N'hasitha@gmail.com', N'Hasitha', N'Wikramasinghe', CAST(N'2022-07-08' AS Date), 1)
INSERT [dbo].[Customer] ([UserId], [Username], [Email], [FirstName], [LastName], [CreatedOn], [IsActive]) VALUES (N'3fa85f54-5717-4562-b3fc-2c963f66afa7', N'Hasitha2', N'hasitha2@gmail.com', N'Wikramasinghe2', N'Sasikalau', CAST(N'2022-09-07' AS Date), 0)
INSERT [dbo].[Customer] ([UserId], [Username], [Email], [FirstName], [LastName], [CreatedOn], [IsActive]) VALUES (N'3fa85f64-5717-4562-b3fc-2c963f66afa7', N'Hasitha98', N'hasitha@gmail.com', N'Hasitha', N'Wikramasinghe', CAST(N'2022-07-08' AS Date), 1)
GO
INSERT [dbo].[Supplier] ([SupplierId], [SupplierName], [CreatedOn], [IsActivate]) VALUES (N'3fa85f64-5717-4512-b3fc-2b963f36afa6', N'KPMG', CAST(N'2022-07-08' AS Date), 1)
INSERT [dbo].[Supplier] ([SupplierId], [SupplierName], [CreatedOn], [IsActivate]) VALUES (N'3fa85f64-5717-4512-b3fc-2c963f36afa6', N'Brown & Company', CAST(N'2022-07-08' AS Date), 0)
GO
INSERT [dbo].[Product] ([ProductId], [ProductName], [UnitPrice], [SupplierId], [CreatedOn], [IsActive]) VALUES (N'3fa85f64-5717-4512-b3fc-2c963f64afa6', N'Anchor Milk Packet', CAST(1070 AS Decimal(18, 0)), N'3fa85f64-5717-4512-b3fc-2b963f36afa6', CAST(N'2022-09-08' AS Date), 1)
INSERT [dbo].[Product] ([ProductId], [ProductName], [UnitPrice], [SupplierId], [CreatedOn], [IsActive]) VALUES (N'3fa85f64-5717-4512-b3fc-2c963f66afa6', N'Viva Milk Packet', CAST(970 AS Decimal(18, 0)), N'3fa85f64-5717-4512-b3fc-2c963f36afa6', CAST(N'2022-07-08' AS Date), 1)
GO
INSERT [dbo].[Orders] ([OrderId], [ProductId], [OrderStatus], [OrderType], [OrderBy], [OrderedOn], [ShippedOn], [IsActive]) VALUES (N'3fa85f54-5717-4512-b3fc-2c963f66afa6', N'3fa85f64-5717-4512-b3fc-2c963f66afa6', 1, 1, N'3fa85f54-5717-4562-b3fc-2c963f66afa7', CAST(N'2022-07-08' AS Date), CAST(N'2022-07-08' AS Date), 1)
GO
