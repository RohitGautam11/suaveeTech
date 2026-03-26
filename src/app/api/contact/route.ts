import { NextRequest, NextResponse } from 'next/server'

// Placeholder for sending emails
// In production, you would use a service like SendGrid, Mailgun, or AWS SES
async function sendEmail(data: any) {
  // TODO: Implement actual email sending logic
  console.log('Email would be sent:', data)
  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, projectDescription } = body
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare email data
    const emailData = {
      to: process.env.CONTACT_EMAIL || 'info@suaveeTech.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
        ${body.service ? `<p><strong>Service Interested In:</strong> ${body.service}</p>` : ''}
        <p><strong>Project Description:</strong></p>
        <p>${body.projectDescription.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    }

    // Send email (implement your actual email service here)
    await sendEmail(emailData)

    // TODO: Save to database if needed
    // You might want to store contact submissions in your database

    // Send confirmation email to user
    const confirmationEmail = {
      to: email,
      subject: 'We Received Your Message - suaveeTech',
      html: `
        <h2>Thank You for Your Interest!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you as soon as possible, typically within 2 business hours.</p>
        <p>In the meantime, feel free to explore our website or check out our blog for more information about our services.</p>
        <p>Best regards,<br>The suaveeTech Team</p>
      `,
    }

    await sendEmail(confirmationEmail)

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
