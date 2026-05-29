import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  fields: [
    {
      name: 'Hero',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'background',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'sous_titre',
          type: 'textarea',
          required: true,
        },
        {
          name: 'premier_cta',
          type: 'text',
          required: true,
        },
        {
          name: 'deuxieme_cta',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'services',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'nom_section',
          type: 'text',
          required: true,
        },
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_titre',
          type: 'textarea',
          required: true,
        },
        {
          name: 'cards',
          type: 'group',
          required: true,
          fields: [
            {
              name: 'premiere_card',
              type: 'group',
              required: true,
              fields: [
                {
                  name: 'titre',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'background',
                  type: 'relationship',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              name: 'deuxieme_card',
              type: 'group',
              required: true,
              fields: [
                {
                  name: 'titre',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'background',
                  type: 'relationship',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              name: 'troisieme_card',
              type: 'group',
              required: true,
              fields: [
                {
                  name: 'titre',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'background',
                  type: 'relationship',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              name: 'quatrieme_card',
              type: 'group',
              required: true,
              fields: [
                {
                  name: 'titre',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'background',
                  type: 'relationship',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              name: 'cinquieme_card',
              type: 'group',
              required: true,
              fields: [
                {
                  name: 'titre',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'background',
                  type: 'relationship',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'histoire',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'nom_section',
          type: 'text',
          required: true,
        },
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraphe',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'avis',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'nom_section',
          type: 'text',
          required: true,
        },
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_titre',
          type: 'textarea',
          required: true,
        },
        {
          name: 'avis_clients',
          type: 'array',
          required: true,
          fields: [
            { name: 'avis', type: 'textarea', required: true },
            { name: 'nom_client', type: 'text', required: true },
            {
              name: 'source_avis',
              type: 'select',
              options: ['Avis Google', 'Avis Facebook', 'Avis Pages Jaunes', 'Avis Truspilot'],
            },
          ],
        },
      ],
    },
    {
      name: 'Etapes',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'nom_section',
          type: 'text',
          required: true,
        },
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_titre',
          type: 'textarea',
          required: true,
        },
        {
          name: 'etapes',
          maxRows: 4,
          type: 'array',
          required: true,
          fields: [
            { name: 'icone', type: 'relationship', relationTo: 'media', required: true },
            { name: 'titre', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },
    {
      name: 'faq',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'titre',
          type: 'text',
          required: true,
        },
        {
          name: 'sous_titre',
          type: 'textarea',
          required: true,
        },
        {
          name: 'questions',
          type: 'array',
          required: true,
          maxRows: 6,
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'reponse', type: 'textarea', required: true },
          ],
        },
      ],
    },
  ],
}
