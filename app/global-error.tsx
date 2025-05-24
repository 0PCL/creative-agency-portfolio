"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">Algo deu muito errado!</h2>
          <Button
            onClick={() => reset()}
            variant="outline"
          >
            Tentar novamente
          </Button>
        </div>
      </body>
    </html>
  )
} 