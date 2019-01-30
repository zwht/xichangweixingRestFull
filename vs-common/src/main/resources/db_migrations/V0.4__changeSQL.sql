-- 原始数据插入sql记录表 记录清洗后的尚未入库的数据
DROP TABLE IF EXISTS "c_admin_division";
CREATE TABLE "c_admin_division" (
"id" int8 NOT NULL,
"province_code" int8,
"province_name" varchar(50) COLLATE "default",
"city_code" int8,
"city_name" varchar(50) COLLATE "default",
"county_code" int8,
"county_name" varchar(50) COLLATE "default",
"town_code" int8,
"town_name" varchar(50) COLLATE "default",
"village_code" int8,
"village_name" varchar(50) COLLATE "default",
"level" int4,
"city_town_classify_code" int4,
CONSTRAINT "c_admin_division_pkey" PRIMARY KEY ("id")
)
WITH (OIDS=FALSE)
;
COMMENT ON TABLE "c_admin_division" IS '全国地区表';
COMMENT ON COLUMN "c_admin_division"."province_code" IS '省代码';
COMMENT ON COLUMN "c_admin_division"."province_name" IS '省名';
COMMENT ON COLUMN "c_admin_division"."city_code" IS '市代码';
COMMENT ON COLUMN "c_admin_division"."city_name" IS '市名';
COMMENT ON COLUMN "c_admin_division"."county_code" IS '区县代码';
COMMENT ON COLUMN "c_admin_division"."county_name" IS '区县名';
COMMENT ON COLUMN "c_admin_division"."town_code" IS '乡镇代码';
COMMENT ON COLUMN "c_admin_division"."town_name" IS '乡镇名';
COMMENT ON COLUMN "c_admin_division"."village_code" IS '村代码';
COMMENT ON COLUMN "c_admin_division"."village_name" IS '村名';
COMMENT ON COLUMN "c_admin_division"."level" IS '地区级别';
COMMENT ON COLUMN "c_admin_division"."city_town_classify_code" IS '城市分类';



-- 区划表
DROP TABLE IF EXISTS "t_division";
CREATE TABLE "t_division" (
	id bigint NOT NULL,
	code bigint NOT NULL,
	name varchar(60) COLLATE "default",
	full_name varchar(200) COLLATE "default",
	parent_id bigint,
	level int2,
	district_id bigint,
	town_id bigint,
  CONSTRAINT t_division_pkey PRIMARY KEY (id)
)WITH (OIDS=FALSE);
COMMENT ON TABLE "t_division" IS '区划表';
COMMENT ON COLUMN "t_division"."code" IS '行政区划代码';
COMMENT ON COLUMN "t_division"."name" IS '名称';
COMMENT ON COLUMN "t_division"."full_name" IS '完整名称';
COMMENT ON COLUMN "t_division"."parent_id" IS '父级id';
COMMENT ON COLUMN "t_division"."level" IS '层级';
COMMENT ON COLUMN "t_division"."district_id" IS '区县id';
COMMENT ON COLUMN "t_division"."town_id" IS '乡镇ID';

-- 系统日志
DROP TABLE IF EXISTS "t_systemlog";
CREATE TABLE "t_systemlog" (
	id bigint NOT NULL,
	user_id bigint,
	ip_address varchar(50) COLLATE "default",
	create_time timestamp(6) DEFAULT CURRENT_TIMESTAMP,
	log_type int4,
  CONSTRAINT t_systemlog_pkey PRIMARY KEY (id)
)WITH (OIDS=FALSE);
COMMENT ON TABLE "t_systemlog" IS '系统日志';
COMMENT ON COLUMN "t_systemlog"."user_id" IS '用户id';
COMMENT ON COLUMN "t_systemlog"."ip_address" IS 'ip地址';
COMMENT ON COLUMN "t_systemlog"."create_time" IS '创建时间';
COMMENT ON COLUMN "t_systemlog"."log_type" IS '日志类型';

delete from t_supplier_type;

insert into "t_supplier_type" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '1', '一级供应商', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_supplier_type" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '2', '二级供应商', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_supplier_type" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '3', '三级供应商', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;

delete from t_industry;

insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '1', '制造业', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '2', '能源供应', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '3', '建筑业', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '4', '交运仓储', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '5', '信息软件', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '6', '农林牧渔', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '7', '采矿业', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '8', '科学技术', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '9', '金融业', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '10', '文体娱乐', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_industry" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '11', '其他', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;

delete from t_subject;

insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '1', '工学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '2', '农学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '3', '医学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '4', '军事学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '5', '管理学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '6', '理学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '7', '哲学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '8', '经济学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '9', '法学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '10', '文学', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;
insert into "t_subject" ( "id", "name", "status", "create_user", "create_time", "update_user", "update_time", "flag") values ( '11', '其他', '1', '1', '2018-12-26 10:55:33', '1', '2018-12-26 10:55:36', 't') RETURNING *;


drop table IF EXISTS t_news_attachment;
/*==============================================================*/
/* Table: t_news_attachment                                                */
/*==============================================================*/
create table t_news_attachment (
   id                   INT8                 not null,
   new_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_NEWS_ATTACHMENT primary key (id)
);

comment on table t_news_attachment is
'新闻-附件';

comment on column t_news_attachment.new_id is
'新闻';

comment on column t_news_attachment.file_id is
'文件';


comment on column t_news_attachment.status is
'状态';

comment on column t_news_attachment.create_user is
'创建人';

comment on column t_news_attachment.create_time is
'创建时间';

comment on column t_news_attachment.update_user is
'修改人';

comment on column t_news_attachment.update_time is
'修改时间';

comment on column t_news_attachment.flag is
'标识';




drop table IF EXISTS t_party_attachment;
/*==============================================================*/
/* Table: t_party_attachment                                               */
/*==============================================================*/
create table t_party_attachment (
   id                   INT8                 not null,
   party_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_PARTY_ATTACHMENT primary key (id)
);

comment on table t_party_attachment is
'党建新闻附件';

comment on column t_party_attachment.party_id is
'党建';

comment on column t_party_attachment.file_id is
'文件';

comment on column t_party_attachment.status is
'状态';

comment on column t_party_attachment.create_user is
'创建人';

comment on column t_party_attachment.create_time is
'创建时间';

comment on column t_party_attachment.update_user is
'修改人';

comment on column t_party_attachment.update_time is
'修改时间';

comment on column t_party_attachment.flag is
'标识';





drop table IF EXISTS t_arms_attachment;
/*==============================================================*/
/* Table: t_arms_attachment                                               */
/*==============================================================*/
create table t_arms_attachment (
   id                   INT8                 not null,
   arms_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_ARMS_ATTACHMENT primary key (id)
);

comment on table t_arms_attachment is
'强军新闻附件';

comment on column t_arms_attachment.arms_id is
'党建';

comment on column t_arms_attachment.file_id is
'文件';

comment on column t_arms_attachment.status is
'状态';

comment on column t_arms_attachment.create_user is
'创建人';

comment on column t_arms_attachment.create_time is
'创建时间';

comment on column t_arms_attachment.update_user is
'修改人';

comment on column t_arms_attachment.update_time is
'修改时间';

comment on column t_arms_attachment.flag is
'标识';


ALTER TABLE "t_equipment"
	ALTER COLUMN "images" TYPE varchar(300);



ALTER TABLE "t_supplier"
	ALTER COLUMN "logo" TYPE varchar(300);


ALTER TABLE "t_work_dynamics"
	ALTER COLUMN "face" TYPE varchar(300);


drop table IF EXISTS t_quality_notice_attachment;
/*==============================================================*/
/* Table: t_quality_notice_attachment                                                */
/*==============================================================*/
create table t_quality_notice_attachment (
   id                   INT8                 not null,
   quality_notice_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_QUALITY_NOTICE_ATTACHMENT primary key (id)
);

comment on table t_quality_notice_attachment is
'质量通知公告-附件';

comment on column t_quality_notice_attachment.quality_notice_id is
'质量通知公告';

comment on column t_quality_notice_attachment.file_id is
'文件';


comment on column t_quality_notice_attachment.status is
'状态';

comment on column t_quality_notice_attachment.create_user is
'创建人';

comment on column t_quality_notice_attachment.create_time is
'创建时间';

comment on column t_quality_notice_attachment.update_user is
'修改人';

comment on column t_quality_notice_attachment.update_time is
'修改时间';

comment on column t_quality_notice_attachment.flag is
'标识';



drop table IF EXISTS t_work_dynamics_attachment;
/*==============================================================*/
/* Table: t_work_dynamics_attachment                                                */
/*==============================================================*/
create table t_work_dynamics_attachment (
   id                   INT8                 not null,
   work_dynamics_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_t_work_dynamics_attachment primary key (id)
);

comment on table t_work_dynamics_attachment is
'质量通知公告-附件';

comment on column t_work_dynamics_attachment.work_dynamics_id is
'质量通知公告';

comment on column t_work_dynamics_attachment.file_id is
'文件';


comment on column t_work_dynamics_attachment.status is
'状态';

comment on column t_work_dynamics_attachment.create_user is
'创建人';

comment on column t_work_dynamics_attachment.create_time is
'创建时间';

comment on column t_work_dynamics_attachment.update_user is
'修改人';

comment on column t_work_dynamics_attachment.update_time is
'修改时间';

comment on column t_work_dynamics_attachment.flag is
'标识';



drop table IF EXISTS t_market_information_attachment;
/*==============================================================*/
/* Table: t_market_information_attachment                                                */
/*==============================================================*/
create table t_market_information_attachment (
   id                   INT8                 not null,
   market_information_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_MARKET_INFORMATION_ATTACHMENT primary key (id)
);

comment on table t_market_information_attachment is
'市场信息-附件';

comment on column t_market_information_attachment.market_information_id is
'市场信息';

comment on column t_market_information_attachment.file_id is
'文件';


comment on column t_market_information_attachment.status is
'状态';

comment on column t_market_information_attachment.create_user is
'创建人';

comment on column t_market_information_attachment.create_time is
'创建时间';

comment on column t_market_information_attachment.update_user is
'修改人';

comment on column t_market_information_attachment.update_time is
'修改时间';

comment on column t_market_information_attachment.flag is
'标识';





drop table IF EXISTS t_management_regulation_attachment;
/*==============================================================*/
/* Table: t_management_regulation_attachment                                                */
/*==============================================================*/
create table t_management_regulation_attachment (
   id                   INT8                 not null,
   management_regulation_attachment_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_MANAGEMENT_REGULATION_ATTACHMENT primary key (id)
);

comment on table t_management_regulation_attachment is
'管理规定-附件';

comment on column t_management_regulation_attachment.management_regulation_attachment_id is
'管理规定';

comment on column t_management_regulation_attachment.file_id is
'文件';


comment on column t_management_regulation_attachment.status is
'状态';

comment on column t_management_regulation_attachment.create_user is
'创建人';

comment on column t_management_regulation_attachment.create_time is
'创建时间';

comment on column t_management_regulation_attachment.update_user is
'修改人';

comment on column t_management_regulation_attachment.update_time is
'修改时间';

comment on column t_management_regulation_attachment.flag is
'标识';



ALTER TABLE "t_news"
	ALTER COLUMN "face" TYPE varchar(300);