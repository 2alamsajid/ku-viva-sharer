CREATE TABLE "viva" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"year" integer NOT NULL,
	"subject" text NOT NULL,
	"content" text NOT NULL,
	"teacher_name" text NOT NULL,
	"college" text NOT NULL,
	"date" text NOT NULL
);
