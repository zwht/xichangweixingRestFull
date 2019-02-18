ALTER TABLE "t_room_reservation"
	ADD COLUMN "leaving_date" TIMESTAMP;
COMMENT ON COLUMN "t_room_reservation"."leaving_date" IS '离开时间';

ALTER TABLE "t_room_reservation"
	ADD COLUMN "rooms_type" varchar(50);
COMMENT ON COLUMN "t_room_reservation"."rooms_type" IS '住房类型 1 单间 2 标间 3 小套间 4 大套房';

ALTER TABLE "t_room_reservation"
	ADD COLUMN "is_arm" int2;
COMMENT ON COLUMN "t_room_reservation"."is_arm" IS '是否是军人';


ALTER TABLE "t_room_reservation"
	ADD COLUMN "arm_num" varchar(50);
COMMENT ON COLUMN "t_room_reservation"."arm_num" IS '军官证';


ALTER TABLE "t_room_reservation"
	ADD COLUMN "with_arm" varchar(50);
COMMENT ON COLUMN "t_room_reservation"."with_arm" IS '与军人关系';


ALTER TABLE "t_room_reservation"
	ADD COLUMN "allotment" TIMESTAMP;
COMMENT ON COLUMN "t_room_reservation"."allotment" IS '留房时间';


ALTER TABLE "t_room_reservation"
	ADD COLUMN "phone" varchar(50);
COMMENT ON COLUMN "t_room_reservation"."phone" IS '手机号';


ALTER TABLE "t_room_reservation"
	ALTER COLUMN "rooms" TYPE varchar(50);