import { SubcategoryService } from './subcategory.service';
import { SubcategoryDto, SubcategoryListQueryDto } from './dto/subcategory.dto';
import { SuccessResponseDto } from '../../common/dto/response.dto';
export declare class SubcategoryController {
    private readonly service;
    constructor(service: SubcategoryService);
    create(data: Omit<SubcategoryDto, 'id'>): Promise<SuccessResponseDto<{
        id: string;
        name: string;
        categoryId: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    findAll(query: SubcategoryListQueryDto): Promise<SuccessResponseDto<{
        data: ({
            category: {
                id: string;
                name: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                imageUrl: string | null;
                description: string | null;
            };
        } & {
            id: string;
            name: string;
            categoryId: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
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
            id: string;
            name: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            imageUrl: string | null;
            description: string | null;
        };
    } & {
        id: string;
        name: string;
        categoryId: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    update(id: string, data: Partial<Omit<SubcategoryDto, 'id'>>): Promise<SuccessResponseDto<{
        id: string;
        name: string;
        categoryId: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
