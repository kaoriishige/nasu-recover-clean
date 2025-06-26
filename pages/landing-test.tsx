'use client'

import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

type LandingData = {
  title: string
  subtitle: string
  campaign: string
  cta: string
  benefits: string[]
  referralNote: string
  companyName: string
}

export default function LandingV2() {
  const [data, setData] = useState<LandingData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'settings', 'landingV2')
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const fetched = docSnap.data() as LandingData
        console.log('✅ Firestoreから取得:', fetched)
        setData(fetched)
      } else {
        console.error('❌ Firestoreに landingV2 が存在しません')
      }
    }
    fetchData()
  }, [])

  if (!data) return <p className="p-6 text-red-600">読み込み中… Firestore確認中</p>

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">{data.title}</h1>
      <h2 className="text-2xl font-bold mb-2">{data.subtitle}</h2>
      <p className="text-xl text-red-600 font-semibold mb-4">{data.campaign}</p>

      <a href="#register" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow hover:bg-blue-700 transition text-lg">
        {data.cta}
      </a>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">✅ ベネフィット</h3>
        <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
          {data.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">💡 紹介制度の説明</h3>
        <p className="text-gray-700">{data.referralNote}</p>
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        <div dangerouslySetInnerHTML={{ __html: data.companyName }} />
      </footer>
    </div>
  )
}




