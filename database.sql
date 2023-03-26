CREATE TABLE "weekend-to-do-app" (
	"id" SERIAL PRIMARY KEY,
	"date" DATE NOT NULL,
	"task-name" VARCHAR (100) NOT NULL,
	"task-desc" VARCHAR (180) NOT NULL,
	"complete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "weekend-to-do-app" ("date", "task-name", "task-desc")
VALUES ('2023-03-28', 'Groceries', 'Buy bread and cheese'),
		('2023-03-27', 'Laundry', 'Wash towels and dish rags');