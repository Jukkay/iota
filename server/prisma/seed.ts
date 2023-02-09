import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const client1 = await prisma.client.upsert({
    where: { id: 'clientId1' },
    update: {},
    create: {
      id: 'clientId1',
      clientKey: 'clientKey1',
    },
  })
  const client2 = await prisma.client.upsert({
    where: { id: 'clientId2' },
    update: {},
    create: {
      id: 'clientId2',
      clientKey: 'clientKey2',
    },
  })
  const client3 = await prisma.client.upsert({
    where: { id: 'clientId3' },
    update: {},
    create: {
      id: 'clientId3',
      clientKey: 'clientKey3',
    },
  })
  console.log({ client1, client2, client3})
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })