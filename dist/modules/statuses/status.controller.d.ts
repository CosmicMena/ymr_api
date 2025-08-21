import { StatusService } from './status.service';
import { StatusDto } from './dto/status.dto';
export declare class StatusController {
    private readonly service;
    constructor(service: StatusService);
    create(data: Omit<StatusDto, 'id'>): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
    update(id: string, data: Partial<Omit<StatusDto, 'id'>>): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
    }>;
}
