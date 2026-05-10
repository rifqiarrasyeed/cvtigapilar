import { type SchemaTypeDefinition } from 'sanity'
import book from './book'
import category from './category'
import collaboration from './collaboration'
import servicePackage from './servicePackage'
import siteSettings from './siteSettings'
import contactMessage from './contactMessage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [book, category, collaboration, servicePackage, siteSettings, contactMessage],
}
