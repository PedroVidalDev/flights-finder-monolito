export class FlightDTO {
    id: number;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departure: Date;
    arrival: Date;
    price: number;

    constructor(
        id: number,
        flightNumber: string,
        airline: string,
        origin: string,
        destination: string,
        departure: Date,
        arrival: Date,
        price: number
    ) {
        this.id = id;
        this.flightNumber = flightNumber;
        this.airline = airline;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
        this.price = price;
    }
}