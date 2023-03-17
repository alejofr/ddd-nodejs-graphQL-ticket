import { Schema, model } from 'mongoose';
import { CategoryEntity } from '../../domain/category.entity';

const CategorySchema = new Schema<CategoryEntity>({
    category_id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
}, {
    virtuals: true,
    toObject: {
        transform: (doc, converted) => {
            delete converted._id;
            delete converted.__v;
        }
    }
});

const CategoryModel = model('Category', CategorySchema);

export default CategoryModel;