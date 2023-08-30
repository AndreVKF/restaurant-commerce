-- CreateTable
CREATE TABLE "Dish_Categories" (
    "id_dish_category" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dish_Receipe" (
    "id_dish" INTEGER NOT NULL,
    "id_ingredient" INTEGER NOT NULL,
    CONSTRAINT "Dish_Receipe_id_dish_fkey" FOREIGN KEY ("id_dish") REFERENCES "Dishes" ("id_dish") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Dish_Receipe_id_ingredient_fkey" FOREIGN KEY ("id_ingredient") REFERENCES "Ingredients" ("id_ingredient") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dishes" (
    "id_dish" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_dish_category" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT,
    "price" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Dishes_id_dish_category_fkey" FOREIGN KEY ("id_dish_category") REFERENCES "Dish_Categories" ("id_dish_category") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id_ingredient" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Purchase_Items" (
    "id_purchase_item" TEXT NOT NULL PRIMARY KEY,
    "id_purchase" INTEGER NOT NULL,
    "id_dish" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "Purchase_Items_id_purchase_fkey" FOREIGN KEY ("id_purchase") REFERENCES "Purchases" ("id_purchase") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_Items_id_dish_fkey" FOREIGN KEY ("id_dish") REFERENCES "Dishes" ("id_dish") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Purchase_Status" (
    "id_purchase_status" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Purchase_Status_History" (
    "id_purchase" INTEGER NOT NULL,
    "id_purchase_status" INTEGER NOT NULL,
    "status_init_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id_purchase", "id_purchase_status"),
    CONSTRAINT "Purchase_Status_History_id_purchase_fkey" FOREIGN KEY ("id_purchase") REFERENCES "Purchases" ("id_purchase") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchase_Status_History_id_purchase_status_fkey" FOREIGN KEY ("id_purchase_status") REFERENCES "Purchase_Status" ("id_purchase_status") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Purchases" (
    "id_purchase" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_user" INTEGER NOT NULL,
    "id_purchase_status" INTEGER NOT NULL,
    "purchased_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Purchases_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Purchases_id_purchase_status_fkey" FOREIGN KEY ("id_purchase_status") REFERENCES "Purchase_Status" ("id_purchase_status") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_Types" (
    "id_user_type" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Users" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT,
    "id_user_type" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Users_id_user_type_fkey" FOREIGN KEY ("id_user_type") REFERENCES "User_Types" ("id_user_type") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Dish_Categories_name_key" ON "Dish_Categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_Receipe_id_dish_id_ingredient_key" ON "Dish_Receipe"("id_dish", "id_ingredient");

-- CreateIndex
CREATE UNIQUE INDEX "Dishes_name_key" ON "Dishes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Dishes_id_dish_id_dish_category_key" ON "Dishes"("id_dish", "id_dish_category");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_Items_id_dish_id_purchase_key" ON "Purchase_Items"("id_dish", "id_purchase");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_Status_status_key" ON "Purchase_Status"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Purchases_id_purchase_id_purchase_status_key" ON "Purchases"("id_purchase", "id_purchase_status");

-- CreateIndex
CREATE UNIQUE INDEX "User_Types_type_key" ON "User_Types"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
