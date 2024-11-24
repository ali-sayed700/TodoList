import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { faker } from "@faker-js/faker";

async function main() {
  await prisma.todo.createMany({
    data: Array.from({ length: 30 }, () => ({
      title: faker.book.title(),
      body: faker.lorem.text(),
      completed: faker.datatype.boolean(),
    })),
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
