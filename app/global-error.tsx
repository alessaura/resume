'use client'

export default function GlobalError({
  reset,
}: {
  reset: () => void
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          <h1>Algo deu errado</h1>
          <p>Não foi possível carregar esta página.</p>
          <button type="button" onClick={() => reset()}>
            Tentar novamente
          </button>
        </main>
      </body>
    </html>
  )
}
