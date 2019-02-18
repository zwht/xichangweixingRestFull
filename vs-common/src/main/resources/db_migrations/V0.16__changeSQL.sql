ALTER TABLE "t_reports"
	ADD COLUMN "suggestion" varchar(200);
COMMENT ON COLUMN "t_reports"."suggestion" IS '处理意见';
