export interface Booking {

    id:number;
    city:string;
    hote:string;
    checkIn:Date;
    checkOut:Date;
    adults:number;
    children:number;
    customerName:string;
    country:string;
    dateOfBirth:Date;
    roomType:string;
    gender:string;
    phone:number;
    status:string;
    guest1Name:string;
    guest1Age:number;
    guest1Gender:string;
    guest2Name:string;
    guest2Age:number;
    guest2Gender:string;
    extraBed:false;
    dineIn:boolean[];
    food:any[];
}
