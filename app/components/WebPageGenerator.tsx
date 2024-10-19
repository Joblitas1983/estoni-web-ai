'use client'

import { useState } from 'react'
import { useCompletion } from '@vercel/ai'

export default function WebPageGenerator() {
  const [prompt, setPrompt] = useState('')
  const { complete, completion, isLoading } = useCompletion({
    api: '/api/generate',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    complete(prompt)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Generador de Páginas Web</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe la página web que quieres crear..."
          className="w-full p-2 border border-gray-300 rounded-md"
          rows={4}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? 'Generando...' : 'Generar Página'}
        </button>
      </form>
      {completion && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Código Generado:</h3>
          <pre className="whitespace-pre-wrap">{completion}</pre>
        </div>
      )}
    </div>
  )
}