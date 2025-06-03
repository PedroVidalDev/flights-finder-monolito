import { PrismaClientSingleton } from "../PrismaClientSingleton";

import flightsData from "../seeders/mock_flights_100.json"; 

const prisma = PrismaClientSingleton.getInstance();

async function main() {
  for (const flight of flightsData) {
    const { id, ...flightDataWithoutId } = flight; 

    await prisma.flight.create({
        data: {
            ...flightDataWithoutId,
        }
    });
    console.log('Flight seeding finished.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });