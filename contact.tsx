"use client"

import type React from "react"

import { useState } from "react"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const webhookUrl =
        "https://discord.com/api/webhooks/1453640058484822087/YgHaWqGzsQ5RMEdgvsYdiFX7yCAe95RN5_oCLayDxOFHgdFgR2j9Uy5V66PTkCXVbnMs"

      const embed = {
        embeds: [
          {
            title: "📬 Novo Contato - silva777only",
            color: 0x5865f2,
            fields: [
              {
                name: "👤 Nome",
                value: formData.name || "Não informado",
                inline: true,
              },
              {
                name: "📧 Email",
                value: formData.email,
                inline: true,
              },
              {
                name: "📝 Assunto",
                value: formData.subject,
                inline: false,
              },
              {
                name: "💬 Mensagem",
                value: formData.message,
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "silva777only Portfolio",
            },
          },
        ],
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(embed),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ email: "", name: "", subject: "", message: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 px-4 bg-card">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{"Entre em Contato"}</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          {"Interessado em trabalhar comigo? Envie uma mensagem!"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{"Nome"}</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{"Email"} *</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">{"Motivo do Contato"} *</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Ex: Desenvolvimento de site, projeto Lua, etc."
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{"Mensagem"} *</Label>
            <Textarea
              id="message"
              placeholder="Conte-me sobre seu projeto..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-background resize-none"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {"Enviando..."}
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                {"Mensagem Enviada!"}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {"Enviar Mensagem"}
              </>
            )}
          </Button>

          {isSuccess && <p className="text-center text-accent text-sm">{"Obrigado! Responderei em breve."}</p>}
        </form>
      </div>
    </section>
  )
}
