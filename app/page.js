import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <h1>Esta es la home</h1>
    </div>
  )
}
