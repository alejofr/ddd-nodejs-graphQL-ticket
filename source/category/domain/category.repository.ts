import { CategoryEntity } from './category.entity';

export interface CategoryRepository{
    create( category: { name: string, description: string }): Promise<CategoryEntity>;
    show(category_id: string): Promise<CategoryEntity | null>;
    update(category_id: string): Promise<CategoryEntity>;
    delete(category_id: string): Promise<CategoryEntity>;
}