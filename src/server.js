import http from 'node:http';
import { routes } from './routes.js';
import { extractQueryParams } from './utils/extractParams.js';
import { json } from './middlewares/json.js'

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req,res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })
    if(route) {
        const routerParams = req.url.match(route.path)

        const { query, ...params } = routerParams.groups

        req.params = params
        req.query =  query ? extractQueryParams(query) : {}

        return route.handler(req,res)
    }
    return res.writeHead(404).end('Not found')
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});