import { v4 as uuid } from 'uuid';
import { CategoryEntity } from './category.entity';

export class CategoryValue implements CategoryEntity{
    category_id: string;
    name: string;
    description: string;

    constructor({ name, description } : { name: string; description: string; }){
        this.category_id = uuid();
        this.name = name;
        this.description = description;
    }
}