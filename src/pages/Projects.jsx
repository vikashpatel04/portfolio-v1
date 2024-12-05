import SleepingImg from '../assets/images/sleeping.jpeg';

export default function Projects() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-16'>
        <h1 className="text-center font-primaryBold text-6xl max-lg:text-5xl max-md:text-4xl">This page is not ready yet, I’m working on it</h1>
        <img src={SleepingImg} alt="Sleeping Image" 
        className='h-1/2'
        />
    </div>
  )
}
