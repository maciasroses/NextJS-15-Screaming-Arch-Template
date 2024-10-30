import { PrismaClient } from "@prisma/client";
import hashPassword from "@/app/shared/utils/hash-password";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@mail.com",
      password: await hashPassword("secretpass"),
      username: "admin",
      role: "ADMIN",
    },
  });

  await prisma.user.create({
    data: {
      email: "user1@example.com",
      password: await hashPassword("password1"),
      username: "user1",
    },
  });
}

main()
  .then(() => {
    console.log("Seeding finished.");
  })
  .catch((e) => {
    console.error("Seeding error: ", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
