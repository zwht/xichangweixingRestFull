ALTER TABLE "t_equipment"
	ADD COLUMN "leading_pserson" varchar(50);
COMMENT ON COLUMN "t_equipment"."leading_pserson" IS '采购负责人';