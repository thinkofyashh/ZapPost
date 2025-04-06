import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{ Bindings: { DATABASE_URL: string } }>()

app.get('/api/v1/blog/:id', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text('get blog')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('bulk')
})

app.post('/api/v1/user/signup', (c) => {
  return c.text('signup route')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('signin route')
})

app.post('/api/v1/blog', (c) => {
  return c.text('post blog')
})

app.put('/api/v1/blog', (c) => {
  return c.text('put blog')
})

export default app
