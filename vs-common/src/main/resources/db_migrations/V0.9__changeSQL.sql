ALTER TABLE "t_equipment"
	ADD COLUMN "model" varchar(50);
COMMENT ON COLUMN "t_equipment"."model" IS '型号';