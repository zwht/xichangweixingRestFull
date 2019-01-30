

drop table IF EXISTS t_system_notice;
/*==============================================================*/
/* Table: t_system_notice                                                */
/*==============================================================*/
create table t_system_notice (
   id                   INT8                 not null,
   title               VARCHAR(50)         null,
   user_id               INT8                 null,
   contents              VARCHAR(500)         null,
   send_time          TIMESTAMP            null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_t_system_notice primary key (id)
);

comment on table t_system_notice is
'系统通知';

comment on column t_system_notice.title is
'类型';

comment on column t_system_notice.user_id is
'用户';

comment on column t_system_notice.contents is
'详情';

comment on column t_system_notice.send_time is
'发送时间';

comment on column t_system_notice.status is
'状态';

comment on column t_system_notice.create_user is
'创建人';

comment on column t_system_notice.create_time is
'创建时间';

comment on column t_system_notice.update_user is
'修改人';

comment on column t_system_notice.update_time is
'修改时间';

comment on column t_system_notice.flag is
'标识';
