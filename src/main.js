import koa from 'koa'
import route from 'koa-route'

const server = koa()

server.use(route.get('/', function * () {
    this.body = 'hi'
}))

server.listen(3000)
