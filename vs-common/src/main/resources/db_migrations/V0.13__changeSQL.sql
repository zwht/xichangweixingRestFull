
drop table IF EXISTS t_vehicle_pick;

/*==============================================================*/
/* Table: t_vehicle_pick                                        */
/*==============================================================*/
create table t_vehicle_pick (
   id                   INT8                 not null,
   name                 VARCHAR(200)         null,
   application_reason   VARCHAR(200)         null,
   application_time     TIMESTAMP            null,
   address              varchar(200)        null,
   flight               varchar(100)        null,
   train_number         varchar(50)         null,
   train_persons        varchar(50)         null,
   vehicle_type         varchar(50)         null,
   vehicle_area         varchar(200)        null,
   phone                varchar(50)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_VEHICLE_PICK primary key (id)
);

comment on table t_vehicle_pick is
'客房预订';

comment on column t_vehicle_pick.name is
'用车人员姓名/用车单位';

comment on column t_vehicle_pick.application_reason is
'申请事由';

comment on column t_vehicle_pick.application_time is
'用车时间';

comment on column t_vehicle_pick.address is
'接送地点';

comment on column t_vehicle_pick.flight is
'航班';

comment on column t_vehicle_pick.train_number is
'车次';

comment on column t_vehicle_pick.train_persons is
'用车人数';

comment on column t_vehicle_pick.vehicle_type is
'申请车型';

comment on column t_vehicle_pick.vehicle_area is
'行驶区域';

comment on column t_vehicle_pick.phone is
'联系电话';


comment on column t_vehicle_pick.status is
'状态';

comment on column t_vehicle_pick.create_user is
'创建人';

comment on column t_vehicle_pick.create_time is
'创建时间';

comment on column t_vehicle_pick.update_user is
'修改人';

comment on column t_vehicle_pick.update_time is
'修改时间';

comment on column t_vehicle_pick.flag is
'标识';