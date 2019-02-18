ALTER TABLE "t_data_download"
	ADD COLUMN "file_url" VARCHAR(500);
COMMENT ON COLUMN "t_data_download"."file_url" IS '附件';