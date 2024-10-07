--Insertar listas de precios

INSERT INTO [beta].[PriceListCustomers] (
      ,[BusinessCode]
      ,[CustomerCode]
      ,[FkAppUserId]
      ,[FkPointOfSalesId])
VALUES 
(1, '0500222508', '18915886', 30000101)
;


--Insertar configuraciones de carrito asíncrono
/*
Id	BusinessCode	CustomerCode	FkAppUserId	      FkPointOfSalesId
125	1	            0500222508	      18915886	      11000
*/

INSERT INTO [dbo].[CmsConfigsSalesOffice]
      ([Id]
      ,[CountryId]
      ,[BusinessUnitId]
      ,[SalesOfficeId]
      ,[Key]
      ,[Value]
      ,[DateCreated])
	VALUES 
	(NEWID(),1,1,'09','ASYNC_SHOPPING_CART','true',SYSDATETIME()),
	(NEWID(),1,1,'13','ASYNC_SHOPPING_CART','true',SYSDATETIME()),
	(NEWID(),1,1,'12','ASYNC_SHOPPING_CART','true',SYSDATETIME()),
	(NEWID(),1,1,'37','ASYNC_SHOPPING_CART','true',SYSDATETIME()),
	(NEWID(),1,1,'43','ASYNC_SHOPPING_CART','true',SYSDATETIME());

--- Actualizar moneda de Perú

 UPDATE [dbo].[CmsConfigs] SET Currency = 'S/' WHERE [CountryId] = 2 ;