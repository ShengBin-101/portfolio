"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Download, Github, Linkedin} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showForm, setShowForm] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message (in a real app)
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Feel free to reach out if you have any questions or would like to work together.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <Button className="flex-1" asChild>
            <a href="https://drive.google.com/file/d/1p4nZXdpTC1srV1a0GNf2cANz7kAaFLL3/view?usp=sharing" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Hide Form" : "Show Form"}
          </Button>
        </div>

        {showForm && (
          <div className="bg-card border rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:shengbin.chan@gmail.com"
            className="flex flex-col items-center p-6 bg-card border rounded-lg hover:shadow-md transition-shadow"
          >
            <Mail className="h-8 w-8 text-primary mb-4" />
            <span className="text-lg font-medium">Email</span>
          </a>
          <a
            href="https://github.com/ShengBin-101"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card border rounded-lg hover:shadow-md transition-shadow"
          >
            <Github className="h-8 w-8 text-primary mb-4" />
            <span className="text-lg font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shengbinchan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card border rounded-lg hover:shadow-md transition-shadow"
          >
            <Linkedin className="h-8 w-8 text-primary mb-4" />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}

