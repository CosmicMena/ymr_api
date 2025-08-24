import { BrandService } from './brands.service';
import { BrandDto } from './dto/brand.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    create(createBrandDto: Omit<BrandDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        logoUrl: string | null;
        description: string | null;
        isActive: boolean;
    }>>;
    findAll(): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        logoUrl: string | null;
        description: string | null;
        isActive: boolean;
    }[]>>;
    findOne(id: string): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        logoUrl: string | null;
        description: string | null;
        isActive: boolean;
    }>>;
    update(id: string, updateBrandDto: Partial<Omit<BrandDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<SuccessResponseDto<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        logoUrl: string | null;
        description: string | null;
        isActive: boolean;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
