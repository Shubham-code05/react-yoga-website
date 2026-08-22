import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 5000
const mongoUri = process.env.MONGO_URI

app.use(cors())
app.use(express.json())

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: String, default: 'All levels' },
}, { timestamps: true })

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  message: { type: String, required: true, trim: true },
}, { timestamps: true })

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
}, { timestamps: true })

const Class = mongoose.model('Class', classSchema)
const Inquiry = mongoose.model('Inquiry', inquirySchema)
const NewsletterSubscriber = mongoose.model('NewsletterSubscriber', newsletterSchema)

const fallbackClasses = [
  { name: 'Hot Yoga', description: 'Build strength and release tension in a warm, energizing flow.', level: 'All levels' },
  { name: 'Yin Yoga', description: 'Slow down with longer holds designed to restore body and mind.', level: 'Beginner friendly' },
  { name: 'Hatha Yoga', description: 'Find steady alignment through foundational poses and breathwork.', level: 'All levels' },
]

app.get('/api/health', (_request, response) => response.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'fallback' }))

app.get('/api/classes', async (_request, response) => {
  try {
    const classes = mongoose.connection.readyState === 1 ? await Class.find().sort({ createdAt: 1 }).lean() : fallbackClasses
    response.json(classes)
  } catch {
    response.json(fallbackClasses)
  }
})

app.post('/api/inquiries', async (request, response) => {
  const { name, email, message } = request.body
  if (!name || !email || !message) return response.status(400).json({ message: 'Name, email, and message are required.' })
  if (mongoose.connection.readyState === 1) await Inquiry.create({ name, email, message })
  response.status(201).json({ message: 'Inquiry received.' })
})

app.post('/api/newsletter', async (request, response) => {
  const { email } = request.body
  if (!email) return response.status(400).json({ message: 'Email is required.' })
  if (mongoose.connection.readyState === 1) await NewsletterSubscriber.updateOne({ email }, { email }, { upsert: true })
  response.status(201).json({ message: 'You are on the list.' })
})

async function start() {
  if (mongoUri) {
    try {
      await mongoose.connect(mongoUri)
      console.log('MongoDB connected')
    } catch (error) {
      console.error(`MongoDB unavailable: ${error.message}`)
      console.log('Starting with in-memory fallback data')
    }
  } else {
    console.log('MONGO_URI not set; starting with in-memory fallback data')
  }

  app.listen(port, () => console.log(`API listening on http://localhost:${port}`))
}

start()
