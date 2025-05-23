"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const parceiros = [
  { id: 1, nome: "USP São Carlos", logo: "/placeholder.svg?height=80&width=160" },
  { id: 2, nome: "Empresa A", logo: "/placeholder.svg?height=80&width=160" },
  { id: 3, nome: "Empresa B", logo: "/placeholder.svg?height=80&width=160" },
  { id: 4, nome: "Empresa C", logo: "/placeholder.svg?height=80&width=160" },
  { id: 5, nome: "Empresa D", logo: "/placeholder.svg?height=80&width=160" },
  { id: 6, nome: "Empresa E", logo: "/placeholder.svg?height=80&width=160" },
]

export default function Parceiros() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Parceiros</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quem apoia o NEU-USP São Carlos
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Contamos com o apoio de empresas e instituições que acreditam no potencial empreendedor dos estudantes da
            USP São Carlos.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {parceiros.map((parceiro, index) => (
            <motion.div
              key={parceiro.id}
              className="col-span-1 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={parceiro.logo || "/placeholder.svg"}
                alt={parceiro.nome}
                width={160}
                height={80}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
