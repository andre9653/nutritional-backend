export type Tables =
  | 'category'
  | 'food'
  | 'preparation'
  | 'nutritional_data'
  | 'nutritional_types';

export interface CategoryModel {
  id: string;
  name: string;
}
