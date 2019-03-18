
ALTER TABLE "t_quality_deal"
	ADD COLUMN "handle" varchar(850);
COMMENT ON COLUMN "t_quality_deal"."handle" IS '处理状态';
ALTER TABLE "t_quality_event"
	ADD COLUMN "handle" varchar(850);
COMMENT ON COLUMN "t_quality_event"."handle" IS '处理状态';