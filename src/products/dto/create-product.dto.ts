import { IsString, IsNotEmpty, IsNumber, Min, IsInt } from 'class-validator';

//added validation methods
export class CreateProductDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @Min(0)
    @IsNumber()
    @IsNotEmpty()
    price: number;


    @Min(1)
    @IsInt()
    @IsNotEmpty()
    categoryId: number;
}
