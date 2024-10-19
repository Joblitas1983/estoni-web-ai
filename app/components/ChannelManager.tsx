'use client'

import { useState } from 'react'
import { useCompletion } from '@vercel/ai'

export default function ChannelManager() {
  const [airbnbToken, setAirbnbToken] = useState('')
  const [bookingToken, setBookingToken] = useState('')
  const [message, setMessage] = useState('')
  const { complete, completion, isLoading } = useCompletion({
    api: '/api/respond',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!airbnbToken || !bookingToken) {
      setMessage('Por favor, ingresa ambos tokens')
      return
    }
    // Aquí normalmente enviarías los tokens al backend para almacenarlos de forma segura
    setMessage('Tokens guardados. Generando respuesta automática...')
    await complete('Genera una respuesta para un huésped que pregunta sobre disponibilidad')
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Channel Manager</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="airbnb" className="block text-sm font-medium text-gray-700">Token de Airbnb</label>
          <input
            type="text"
            id="airbnb"
            value={airbnbToken}
            onChange={(e) => setAirbnbToken(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="booking" className="block text-sm font-medium text-gray-700">Token de Booking</label>
          <input
            type="text"
            id="booking"
            value={bookingToken}
            onChange={(e) => setBookingToken(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? 'Procesando...' : 'Guardar y Generar Respuesta'}
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {completion && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Respuesta Generada:</h3>
          <p>{completion}</p>
        </div>
      )}
    </div>
  )
}