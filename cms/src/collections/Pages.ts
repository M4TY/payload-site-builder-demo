import type { CollectionConfig } from 'payload'
import { HeadingBlock, ImageBlock, TextBlock } from '@/fields/Blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'path',
      label: 'Path',
      type: 'text',
      unique: true,
      defaultValue: '/',
      required: true,
    },
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [TextBlock, ImageBlock, HeadingBlock],
    },
  ],
}
