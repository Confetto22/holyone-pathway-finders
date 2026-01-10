import { IsObject, IsOptional, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  serviceId: string;

  @IsObject()
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;

    country?: string;
  };

  @IsObject()
  @IsOptional()
  serviceDetails?: {
    destination?: string;
    travelDate?: string;
    passportNumber?: string;
    nationality?: string;
    purposeOfTravel?: string;
    additionalNotes?: string;
  };

  // @IsObject()
  // @IsOptional()
  // serviceSnapshot?: {
  //   destination?: string;
  //   travelDate?: string;
  //   passportNumber?: string;
  //   nationality?: string;
  //   purposeOfTravel?: string;
  //   additionalNotes?: string;
  // };
}
