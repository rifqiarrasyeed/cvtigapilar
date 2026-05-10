import { getAllBooks, getAllCategories } from '@/lib/data';
import KatalogContent from './KatalogContent';

export default async function KatalogPage() {
  const [books, categories] = await Promise.all([
    getAllBooks(),
    getAllCategories(),
  ]);

  return <KatalogContent books={books} categories={categories} />;
}
