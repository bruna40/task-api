import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from './utils/regexPath.js'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query
            const searchData = search ? {
                title:search,
                description:search
            } : null
            const tasks = database.select('tasks', searchData )

            return res.end(JSON.stringify(tasks))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {      
            const { title, description } = req.body

            if(!title || !description) return res.writeHead(400).end(
                JSON.stringify({ error: 'Title and description are required' })
            )

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: new Date(),
                updated_at: new Date(),
            }

            database.insert('tasks', task)
            return res.writeHead(201).end()
        }
    }
]