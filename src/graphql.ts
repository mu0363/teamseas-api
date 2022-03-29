
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateDonationInput {
    exampleField?: Nullable<number>;
}

export class Donation {
    id: number;
    count: number;
    displayName: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract donations(): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

    abstract donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;
}

export type DateTime = any;
type Nullable<T> = T | null;
