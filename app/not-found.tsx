import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Página não encontrada</h2>
      <p className="text-muted-foreground">Não foi possível encontrar a página que você está procurando.</p>
      <Button asChild variant="outline">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </div>
  )
} 