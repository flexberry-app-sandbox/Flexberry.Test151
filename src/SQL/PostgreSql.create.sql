﻿




CREATE TABLE СоставЗаказа (
 primaryKey UUID NOT NULL,
 Номер INT NOT NULL,
 Количество INT NULL,
 Товары UUID NOT NULL,
 Заказы UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заказы (
 primaryKey UUID NOT NULL,
 КодЗаказа INT NOT NULL,
 Статус VARCHAR(9) NULL,
 Дата TIMESTAMP(3) NULL,
 Продавец UUID NOT NULL,
 Контрагент UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE МестоВыдачи (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Товары (
 primaryKey UUID NOT NULL,
 КодТовара INT NOT NULL,
 ЦенаЗаЕд DOUBLE PRECISION NULL,
 Название VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагент (
 primaryKey UUID NOT NULL,
 КодКлиента INT NOT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Номер INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ВНаличии (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Дата TIMESTAMP(3) NULL,
 Товары UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Оповещения (
 primaryKey UUID NOT NULL,
 Описание VARCHAR(255) NULL,
 Заказы UUID NOT NULL,
 МестоВыдачи UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Продавец (
 primaryKey UUID NOT NULL,
 КодПродавца INT NOT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE СоставЗаказа ADD CONSTRAINT FK520dc6fb052709fa98be456cfd592d7ef5fefff2 FOREIGN KEY (Товары) REFERENCES Товары; 
CREATE INDEX Index520dc6fb052709fa98be456cfd592d7ef5fefff2 on СоставЗаказа (Товары); 

 ALTER TABLE СоставЗаказа ADD CONSTRAINT FK5d82b6739739c5570996630d124262b6b0d7fa39 FOREIGN KEY (Заказы) REFERENCES Заказы; 
CREATE INDEX Index5d82b6739739c5570996630d124262b6b0d7fa39 on СоставЗаказа (Заказы); 

 ALTER TABLE Заказы ADD CONSTRAINT FK3e54c3f1c2feef6b514a03698e07d294e3ead1ac FOREIGN KEY (Продавец) REFERENCES Продавец; 
CREATE INDEX Index3e54c3f1c2feef6b514a03698e07d294e3ead1ac on Заказы (Продавец); 

 ALTER TABLE Заказы ADD CONSTRAINT FK5af76d2a6cc7a3980b13e176e17617ffd48f250e FOREIGN KEY (Контрагент) REFERENCES Контрагент; 
CREATE INDEX Index5af76d2a6cc7a3980b13e176e17617ffd48f250e on Заказы (Контрагент); 

 ALTER TABLE ВНаличии ADD CONSTRAINT FKc4efbe06046934fb7cb114380ad3299764c06431 FOREIGN KEY (Товары) REFERENCES Товары; 
CREATE INDEX Indexc4efbe06046934fb7cb114380ad3299764c06431 on ВНаличии (Товары); 

 ALTER TABLE Оповещения ADD CONSTRAINT FK3d6e0bc96232da662fa9836f5ca586a30b0ff77d FOREIGN KEY (Заказы) REFERENCES Заказы; 
CREATE INDEX Index3d6e0bc96232da662fa9836f5ca586a30b0ff77d on Оповещения (Заказы); 

 ALTER TABLE Оповещения ADD CONSTRAINT FK08eb3e289d981100f1a1b833c5fd96bf7210f4cc FOREIGN KEY (МестоВыдачи) REFERENCES МестоВыдачи; 
CREATE INDEX Index08eb3e289d981100f1a1b833c5fd96bf7210f4cc on Оповещения (МестоВыдачи); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

