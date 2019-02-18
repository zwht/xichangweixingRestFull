drop table IF EXISTS t_notice;

/*==============================================================*/
/* Table: t_notice                                      */
/*==============================================================*/
create table t_notice (
   id                   INT8                 not null,
   title                VARCHAR(200)         null,
   top                  BOOL                 null,
   content              TEXT                 null,
   read_count           INT8                 null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_T_NOTICE primary key (id)
);

comment on table t_notice is
'通知公告';

comment on column t_notice.title is
'标题';

comment on column t_notice.top is
'置顶';

comment on column t_notice.content is
'内容';

comment on column t_notice.read_count is
'阅读量';

comment on column t_notice.status is
'状态';

comment on column t_notice.create_user is
'创建人';

comment on column t_notice.create_time is
'创建时间';

comment on column t_notice.update_user is
'修改人';

comment on column t_notice.update_time is
'修改时间';

comment on column t_notice.flag is
'标识';



drop table IF EXISTS t_notice_attachment;
/*==============================================================*/
/* Table: t_notice_attachment                                                */
/*==============================================================*/
create table t_notice_attachment (
   id                   INT8                 not null,
   quality_notice_id               INT8                 null,
   file_id              VARCHAR(200)         null,
   status               INT4                 null,
   create_user          INT8                 null,
   create_time          TIMESTAMP            null,
   update_user          INT8                 null,
   update_time          TIMESTAMP            null,
   flag                 BOOL                 null,
   constraint PK_t_notice_ATTACHMENT primary key (id)
);

comment on table t_notice_attachment is
'通知公告-附件';

comment on column t_notice_attachment.quality_notice_id is
'通知公告';

comment on column t_notice_attachment.file_id is
'文件';


comment on column t_notice_attachment.status is
'状态';

comment on column t_notice_attachment.create_user is
'创建人';

comment on column t_notice_attachment.create_time is
'创建时间';

comment on column t_notice_attachment.update_user is
'修改人';

comment on column t_notice_attachment.update_time is
'修改时间';

comment on column t_notice_attachment.flag is
'标识';
