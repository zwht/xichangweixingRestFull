
ALTER TABLE "t_quality_deal"
	ADD COLUMN "file_url" varchar(850);
COMMENT ON COLUMN "t_quality_deal"."file_url" IS '文件';
ALTER TABLE "t_quality_event"
	ADD COLUMN "file_url" varchar(850);
COMMENT ON COLUMN "t_quality_event"."file_url" IS '文件';