import LogoUpload from './components/LogoUpload'
import WebPageGenerator from './components/WebPageGenerator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Estoni Web AI</h1>
      <LogoUpload />
      <WebPageGenerator />
    </main>
  )
}