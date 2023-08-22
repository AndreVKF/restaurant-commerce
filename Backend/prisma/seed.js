const { PrismaClient } = require("@prisma/client")
const { hash } = require("bcrypt")
const env = require("../Env")

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
