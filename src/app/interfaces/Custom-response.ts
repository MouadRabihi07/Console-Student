import { Annonce } from "./Annonce.interface";
import { Convention } from "./Convention.interface";
import { Demande } from "./Demande.interface";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage:string;
    data: {annonces?: Annonce[] , demandes?: Demande[], demande?:Demande , conventions?: Convention[] , convention?: Convention};
     
}