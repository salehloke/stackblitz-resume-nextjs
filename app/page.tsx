import Image from 'next/image'
import ResumeHeader from './components/header'
import ResumeIntro from './components/intro'

export default function Home() {
  return (
    <main>
      <ResumeHeader />
      <div className='divider'>

      </div>
      <ResumeIntro />
    </main>
  )
}
