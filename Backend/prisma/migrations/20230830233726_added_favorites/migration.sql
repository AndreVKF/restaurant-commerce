-- CreateTable
CREATE TABLE "Favorites" (
    "id_dish" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    CONSTRAINT "Favorites_id_dish_fkey" FOREIGN KEY ("id_dish") REFERENCES "Dishes" ("id_dish") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Favorites_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_id_dish_id_user_key" ON "Favorites"("id_dish", "id_user");
