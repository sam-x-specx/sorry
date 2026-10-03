import { client } from '@/sanity/client'
import SorryFlow from '@/components/SorryFlow'

const query = `*[_type == "sorryPage"][0]{
  recipientName,
  openingMessage,
  heroImage,
  apologyHeading,
  apologyMessage,
  angerQuestion,
  nahiBataogiMessage,
  nahiBataogiImage,
  chupHoHeading,
  chupHoMessage,
  chupHoImage,
  chupHoNote,
  friendsHeading,
  friendsSubtext,
  friendsNote,
  finalMessage,
  yayHeading,
  yayMessage,
  yayImage,
}`

export default async function Home() {
  const data = await client.fetch(query, {}, { next: { revalidate: 0 } })

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-pink-100">
        <p className="text-pink-600">No sorryPage document found yet — go to /studio and create one.</p>
      </main>
    )
  }

  return <SorryFlow data={data} />
}
