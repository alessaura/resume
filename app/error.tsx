'use client'

import { useEffect } from 'react'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('[v0] Erro de renderização da página:', error)
  }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fbfaf9] px-6 text-center text-slate-900">
      <div className="max-w-md">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-600">Ops</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Algo deu errado</h1>
        <p className="mt-3 text-slate-600">Tente carregar esta página novamente.</p>
        <button type="button" onClick={reset} className="mt-6 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-fuchsia-700">
          Tentar novamente
        </button>
      </div>
    </main>
  )
}
