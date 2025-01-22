import type {Block} from 'payload'

export const TextBlock: Block = {
    slug: 'text',
    labels: {
        singular: 'Text',
        plural: 'Text',
    },
    fields: [
        {
            name: 'text',
            label: 'Text',
            type: 'text',
        }
    ],
}

export const ImageBlock: Block = {
    slug: 'image',
    labels: {
        singular: 'Image',
        plural: 'Images',
    },
    fields: [
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
        }
    ],
}

export const HeadingBlock: Block = {
    slug: 'heading',
    labels: {
        singular: 'Heading',
        plural: 'Headings',
    },
    fields: [
        {
            name: 'text',
            label: 'Text',
            type: 'text',
        }
    ],
}