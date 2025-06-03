import { PrismaClient } from "@prisma/client";

import { PrismaClientSingleton } from "../PrismaClientSingleton";

import flightsData from "../json/mock_flights_100.json"; 

export class PrismaSeeder {
  private client: PrismaClient;

  constructor() {
    this.client = PrismaClientSingleton.getInstance();
  }

  public async seedFlights() {
    for (const flight of flightsData) {
      const { id, ...flightDataWithoutId } = flight; 

      await this.client.flight.create({
        data: {
          ...flightDataWithoutId,
        },
      });
    }
    console.log('Flight seeding finished.');
  }

  public async seedAll() {
    await this.seedFlights();

    console.log('All seeding finished.');

    await this.client.$disconnect();
  }
}


const seeder = new PrismaSeeder();
seeder.seedAll()
  .then(() => {
    console.log('Seeding completed successfully.');
  })
  .catch((error) => {
    console.error('Error during seeding:', error);
  });