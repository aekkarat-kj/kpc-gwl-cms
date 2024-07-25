import type { Block } from 'payload/types'

export const ProductCard: Block = {
  slug: 'productCard',
  labels: {
    singular: 'ProductCard',
    plural: 'ProductCard',
  },
  fields: [
    {
      name: 'product_sku', // required
      type: 'textarea', // required
      required: true,
    },
    {
      name: 'title', // required
      type: 'text', // required
      required: true,
    },
    {
      name: 'link_url', // required
      type: 'text', // required
      required: true,
      maxLength: 255,
    },
    {
      name: 'link_target', // required
      type: 'select', // required
      // hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: 'Same Tab',
          value: '',
        },
        {
          label: 'Same Tab',
          value: 'New Tab',
        },
      ],
    },
  ],
}
