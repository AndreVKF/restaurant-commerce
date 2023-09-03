/*
  Warnings:

  - Added the required column `id_favorite` to the `Favorites` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Favorites" (
    "id_favorite" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_dish" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    CONSTRAINT "Favorites_id_dish_fkey" FOREIGN KEY ("id_dish") REFERENCES "Dishes" ("id_dish") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorites_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Favorites" ("id_dish", "id_user") SELECT "id_dish", "id_user" FROM "Favorites";
DROP TABLE "Favorites";
ALTER TABLE "new_Favorites" RENAME TO "Favorites";
CREATE UNIQUE INDEX "Favorites_id_dish_id_user_key" ON "Favorites"("id_dish", "id_user");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
