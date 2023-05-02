import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from './Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Form />
    </>
  )
}
