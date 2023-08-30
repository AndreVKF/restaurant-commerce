const { PrismaClient } = require("@prisma/client")
const { hash } = require("bcrypt")
const env = require("../Env")

const ingredients = require("./data/ingredients")
const categories = require("./data/dishCategories")

const prisma = new PrismaClient()

async function main() {
  // user types
  await prisma.User_Types.upsert({
    where: { id_user_type: 1 },
    create: { id_user_type: 1, type: "ADMIN" },
    update: {},
  })

  await prisma.User_Types.upsert({
    where: { id_user_type: 2 },
    create: { id_user_type: 2, type: "CLIENT" },
    update: {},
  })

  // admin user
  await prisma.Users.upsert({
    where: { id_user: 1 },
    create: {
      id_user: 1,
      name: "ADMIN",
      email: "admin@admin.com",
      password: await hash(env.ADMIN_PASSWORD, Number(env.BCRYPT_SALT)),
      id_user_type: 1,
    },
    update: {},
  })

  // payment status
  await prisma.Purchase_Status.upsert({
    where: { id_purchase_status: 1 },
    create: { id_purchase_status: 1, status: "AWAITING_PAYMENT" },
    update: {},
  })

  await prisma.Purchase_Status.upsert({
    where: { id_purchase_status: 2 },
    create: { id_purchase_status: 2, status: "AWAITING_PAYMENT_AT_SHOP" },
    update: {},
  })

  await prisma.Purchase_Status.upsert({
    where: { id_purchase_status: 3 },
    create: { id_purchase_status: 3, status: "PAYMENT_APPROVED" },
    update: {},
  })

  await prisma.Purchase_Status.upsert({
    where: { id_purchase_status: 4 },
    create: { id_purchase_status: 4, status: "ORDER_DELIVERED" },
    update: {},
  })

  let idx = 1
  for (let ingredient of ingredients) {
    await prisma.Ingredients.upsert({
      where: { id_ingredient: idx },
      create: { id_ingredient: idx, name: ingredient.name },
      update: {},
    })
    idx++
  }

  idx = 1
  for (let category of categories) {
    await prisma.Dish_Categories.upsert({
      where: { id_dish_category: idx },
      create: { id_dish_category: idx, name: category.name },
      update: {},
    })
    idx++
  }

  await prisma.$executeRaw`
  CREATE VIEW IF NOT EXISTS v_Dishes_Ingredients AS 
  WITH cte_dishes_ingredients AS (
    SELECT 
      dr.id_dish AS id_dish,
      dr.id_ingredient AS id_ingredient,
      i.name AS ingredient
    FROM 
      dish_receipe dr
    LEFT JOIN Ingredients i ON dr.id_ingredient = i.id_ingredient 
    ) 
  SELECT 
      id_dish,
      GROUP_CONCAT(ingredient) AS ingredients 
  FROM 
    cte_dishes_ingredients
  GROUP BY
    id_dish 
  `

  await prisma.$executeRaw`
  CREATE VIEW IF NOT EXISTS v_Dish_Details AS
  SELECT
    d.id_dish AS id_dish,
    d.id_dish_category AS id_dish_category,
    dc.name AS dish_category,
    d.name AS dish_name,
    d.description AS dish_description,
    vdi.ingredients AS ingredients,
    d.image_url AS dish_image_url,
    d.price AS dish_price,
    d.created_at AS created_at,
    d.updated_at AS updated_at
  FROM 
    Dishes AS d
  LEFT JOIN Dish_Categories AS dc ON d.id_dish_category = dc.id_dish_category
  LEFT JOIN v_Dishes_Ingredients AS vdi ON d.id_dish = vdi.id_dish
  `
}

main()
  .then(async () => {
    await prisma.$disconnect()
    console.log("Db seeding successuful")
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })
