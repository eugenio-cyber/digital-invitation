interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasCompanions: boolean;
    qtdCompanions: number;
}

interface Event {
    id: string;
    alias: string;
    password: string;
    name: string;
    date: Date;
    description: string;
    location: string;
    imageUrl: string;
    imageBackground: string;
    expectedAudience: number;
    guests: Guest[];
}

declare function complementGuest(guest: Partial<Guest>): Guest;

declare function complementEvent(partialEvent: Partial<Event>): Event;

declare function createEmptyGuest(): Partial<Guest>;

declare function createEmptyEvent(): Partial<Event>;

declare const events: Event[];

declare class Alias {
    static format(value: string): string;
}

declare class Id {
    static new(): string;
    static isValid(id: string): boolean;
}

declare class Password {
    static new(length?: number): string;
}

declare class DateParser {
    static format(date: Date): string;
    static unformat(date: string): Date;
}

export { Alias, DateParser, type Event, type Guest, Id, Password, complementEvent, complementGuest, createEmptyEvent, createEmptyGuest, events };
