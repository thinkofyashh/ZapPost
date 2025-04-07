import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'



const app = new Hono<{ Bindings: { DATABASE_URL: string ,JWT_SECRET: string} }>()

app.get('/api/v1/blog/:id', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text('get blog')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('bulk')
})

// sign up route for the user 
app.post('/api/v1/user/signup', async(c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{

  const body = await c.req.json();

  const user =await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password:body.password
      }
    })
    const token =await sign({id:user.id},c.env.JWT_SECRET);

    return c.json({jwt:token})
    

  }catch(e){
    return c.status(500)
  }
}
)

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
