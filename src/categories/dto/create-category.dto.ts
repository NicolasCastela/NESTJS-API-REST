import { IsNotEmpty, IsString } from "class-validator";
export class CreateCategoryDto {
   // added validation methods  
    
    @IsString()
    @IsNotEmpty()
    name: string;
}
