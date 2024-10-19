'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function LogoUpload() {
  const [logo, setLogo] = useState<string | null>(null)

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogo(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Carga tu logo</h2>
      {logo ? (
        <Image src={logo} alt="Logo de la empresa" width={200} height={200} className="mb-4" />
      ) : (
        <div className="w-48 h-48 bg-gray-200 flex items-center justify-center mb-4">
          <span className="text-gray-500">Sin logo</span>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>
  )
}