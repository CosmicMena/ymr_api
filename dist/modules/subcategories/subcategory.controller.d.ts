import { SubcategoryService } from './subcategory.service';
import { SubcategoryDto, SubcategoryFilterDto } from './dto/subcategory.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class SubcategoryController {
    private readonly service;
    constructor(service: SubcategoryService);
    create(data: Omit<SubcategoryDto, 'id'>): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>>;
    findAll(pagination: PaginationDto, filter: SubcategoryFilterDto): Promise<SuccessResponseDto<{
        data: ({
            category: {
                name: string;
                description: string | null;
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                imageUrl: string | null;
            };
        } & {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
            imageUrl: string | null;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>>;
    findOne(id: string): Promise<SuccessResponseDto<{
        category: {
            name: string;
            description: string | null;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
        };
    } & {
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>>;
    update(id: string, data: Partial<Omit<SubcategoryDto, 'id'>>): Promise<SuccessResponseDto<{
        name: string;
        description: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
        imageUrl: string | null;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
