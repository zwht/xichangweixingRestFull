ALTER TABLE "t_reports"
	ADD COLUMN "content" varchar(1000);

COMMENT ON COLUMN "t_reports"."content" IS '举报内容';