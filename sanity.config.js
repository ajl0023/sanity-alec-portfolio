import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  //...
  name: 'default',
  title: 'alec profile',

  projectId: 'cuc1yznu',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'reel', S, context}),

            orderableDocumentListDeskItem({type: 'gallery', S, context}),
            orderableDocumentListDeskItem({type: 'home', S, context}),
            // orderableDocumentListDeskItem({type: 'contact', S, context}),
            // ... all other desk items
          ])
      },
    }),
  ],
  schema: {
    types: (previousTypes) => {
      return [...previousTypes, ...schemaTypes]
    },
  },
})
