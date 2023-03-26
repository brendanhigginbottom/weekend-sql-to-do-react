CREATE TABLE "weekend-to-do-app" (
	"id" SERIAL PRIMARY KEY,
	"date" DATE DEFAULT CURRENT_DATE,
	"task_name" VARCHAR (100) NOT NULL,
	"task_desc" VARCHAR (180) NOT NULL,
	"complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "weekend-to-do-app" ("task_name", "task_desc")
VALUES ('Groceries', 'Buy bread and cheese'),
		('Laundry', 'Wash towels and dish rags');