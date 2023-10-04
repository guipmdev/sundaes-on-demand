// src/mocks/handlers.js
import { rest } from 'msw'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const handlers = [
  // Handles a GET /scoops request
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ]),
    )
  }),

  // Handles a GET /toppings request
  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Cherries', imagePath: '/images/cherries.png' },
        { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
        { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
      ]),
    )
  }),

  // Handles a GET /toppings request
  rest.post('http://localhost:3030/order', async (req, res, ctx) => {
    await sleep(100)
    return res(ctx.json({ orderNumber: 123455676 }))
  }),
]
