const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())
morgan.token('person', function(req) {return JSON.stringify(req.body)})

app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.person(req)
  ].join(' ')
}, {
  skip: function (req, res) { return req.method !== 'POST' }
}))

let persons = [
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  },
  {
    "name": "Mikko Savolainen",
    "number": "050-434-9292",
    "id": 5
  },
  {
    "name": "Jari Kurri",
    "number": "55-555-55555",
    "id": 6
  },
  {
    "name": "Toimiva toveri",
    "number": "55-555-666666",
    "id": 6
  }
]

app.get('/', (req, res) => {

  res.send('<h1>Phonebook</h1>')
})

app.get('/info', (request, response) => {
  const number = persons.length
  const date = Date()
  response.send(`<p> Phonebook has ${number} people.<p> <p>${date}<p>`)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {

    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})


app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  }
  if (!body.name) {
    return response.status(400).json({
      error: 'number is missing'
    })
  }

  if (persons.map(person => person.name.toLowerCase()).includes(body.name.toLowerCase())) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  if (persons.map(person => person.number.toLowerCase()).includes(body.number.toLowerCase())) {
    return response.status(400).json({
      error: 'number must be unique'
    })
  }



  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 1000)
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})