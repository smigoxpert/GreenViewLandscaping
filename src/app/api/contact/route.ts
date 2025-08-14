import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(10),
  honeypot: z.string().max(0),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Check honeypot field
    if (validatedData.honeypot) {
      return NextResponse.json(
        { message: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email via Resend
    // 2. Store in your CRM
    // 3. Send notifications

    // For now, we'll simulate a successful email send
    // In production, you would use Resend like this:
    /*
    import { Resend } from 'resend'
    
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const { data, error } = await resend.emails.send({
      from: 'Green View Landscaping <noreply@yourdomain.com>',
      to: ['info@yourdomain.com'],
      subject: `New Contact Form Submission - ${validatedData.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Service:</strong> ${validatedData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `
    })
    
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      )
    }
    */

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Log the submission (in production, you'd store this in a database)
    console.log('Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      service: validatedData.service,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
