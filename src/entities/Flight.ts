import { FlightDTO } from "../dtos/flight/FlightDTO";

export class Flight {
    private id: number;
    private flightNumber: string;
    private airline: string;
    private origin: string;
    private destination: string;
    private departure: Date;
    private arrival: Date;
    private price: number;

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

    public getId(): number {
        return this.id;
    }

    public getFlightNumber(): string {
        return this.flightNumber;
    }

    public getAirline(): string {
        return this.airline;
    }

    public getOrigin(): string {
        return this.origin;
    }

    public getDestination(): string {
        return this.destination;
    }

    public getDeparture(): Date {
        return this.departure;
    }

    public getArrival(): Date {
        return this.arrival;
    }

    public getPrice(): number {
        return this.price;
    }

    public toDto(): FlightDTO {
        return new FlightDTO(
            this.id,
            this.flightNumber,
            this.airline,
            this.origin,
            this.destination,
            this.departure,
            this.arrival,
            this.price
        );
    }
}