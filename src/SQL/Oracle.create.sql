



CREATE TABLE "СоставЗаказа"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Товары" RAW(16) NOT NULL,

	"Заказы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Заказы"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодЗаказа" NUMBER(10) NOT NULL,

	"Статус" NVARCHAR2(9) NULL,

	"Дата" DATE NULL,

	"Продавец" RAW(16) NOT NULL,

	"Контрагент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "МестоВыдачи"
(

	"primaryKey" RAW(16) NOT NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Товары"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодТовара" NUMBER(10) NOT NULL,

	"ЦенаЗаЕд" FLOAT(126) NULL,

	"Название" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контрагент"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКлиента" NUMBER(10) NOT NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"Номер" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВНаличии"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Товары" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Оповещения"
(

	"primaryKey" RAW(16) NOT NULL,

	"Описание" NVARCHAR2(255) NULL,

	"Заказы" RAW(16) NOT NULL,

	"МестоВыдачи" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Продавец"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодПродавца" NUMBER(10) NOT NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СоставЗаказа"
	ADD CONSTRAINT "СоставЗаказа__9034" FOREIGN KEY ("Товары") REFERENCES "Товары" ("primaryKey");

CREATE INDEX "СоставЗаказа_I_705" on "СоставЗаказа" ("Товары");

ALTER TABLE "СоставЗаказа"
	ADD CONSTRAINT "СоставЗаказа__4527" FOREIGN KEY ("Заказы") REFERENCES "Заказы" ("primaryKey");

CREATE INDEX "СоставЗаказа__5602" on "СоставЗаказа" ("Заказы");

ALTER TABLE "Заказы"
	ADD CONSTRAINT "Заказы_FПродав_757" FOREIGN KEY ("Продавец") REFERENCES "Продавец" ("primaryKey");

CREATE INDEX "Заказы_IПродавец" on "Заказы" ("Продавец");

ALTER TABLE "Заказы"
	ADD CONSTRAINT "Заказы_FКонтр_8313" FOREIGN KEY ("Контрагент") REFERENCES "Контрагент" ("primaryKey");

CREATE INDEX "Заказы_IКонтр_4952" on "Заказы" ("Контрагент");

ALTER TABLE "ВНаличии"
	ADD CONSTRAINT "ВНаличии_FТов_5362" FOREIGN KEY ("Товары") REFERENCES "Товары" ("primaryKey");

CREATE INDEX "ВНаличии_IТовары" on "ВНаличии" ("Товары");

ALTER TABLE "Оповещения"
	ADD CONSTRAINT "Оповещения_FЗ_3743" FOREIGN KEY ("Заказы") REFERENCES "Заказы" ("primaryKey");

CREATE INDEX "Оповещения_IЗ_3019" on "Оповещения" ("Заказы");

ALTER TABLE "Оповещения"
	ADD CONSTRAINT "Оповещения_FМ_3508" FOREIGN KEY ("МестоВыдачи") REFERENCES "МестоВыдачи" ("primaryKey");

CREATE INDEX "Оповещения_IМ_9306" on "Оповещения" ("МестоВыдачи");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


