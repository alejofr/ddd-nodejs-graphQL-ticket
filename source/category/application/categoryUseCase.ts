import { CategoryRepository } from '../domain/category.repository';
import { CategoryValue } from '../domain/category.value';

export class CategoryUseCase{
    constructor(private readonly categoryRepository: CategoryRepository){}
    
    createCategory = async(data: { name: string, description: string }) => {
        const categoryValue =  new CategoryValue(data);
        const categoryCreated = await this.categoryRepository.create(categoryValue);
        return categoryCreated;
    }
}