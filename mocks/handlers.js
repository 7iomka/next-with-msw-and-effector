import { rest } from 'msw'
import { getAbsoluteApiUrl } from './helpers'

export const handlers = [
  rest.get(getAbsoluteApiUrl('/categories'), (req, res, ctx) => {
    return res(
      ctx.json({
        total: 9,
        items: [
          {
            id: '1',
            name: 'Стекло',
            pluralName: 'Стекла',
            order: 1,
            slug: 'steklo',
          },
          {
            id: '2',
            name: 'Зеркало',
            pluralName: 'Зеркала',
            order: 2,
            slug: 'zerkalo',
          },
          {
            id: '3',
            name: 'Триплекс',
            pluralName: 'Триплекс',
            order: 3,
            slug: 'tripleks',
          },
          {
            id: '4',
            name: 'Фурнитура для зеркал',
            pluralName: 'Фурнитура для зеркал',
            order: 4,
            slug: 'furnitura-dlya-zerkal',
          },
        ],
      }),
    );
  }),
 
  rest.get(getAbsoluteApiUrl('/reviews'), (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          author: 'John Maverick',
          text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
        },
      ])
    )
  }),

  rest.get(getAbsoluteApiUrl('/xxxx'), (req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lord of the Rings',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      })
    )
  }),
]
