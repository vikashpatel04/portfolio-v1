import './App.css'
import HomeBox1 from './components/HomeBox1'
import HomeBox2 from './components/HomeBox2'
import HomeBox3 from './components/HomeBox3'
import HomeBox4 from './components/HomeBox4'

function App() {

  return (
    <>
    <div className='flex flex-col gap-3'>

    <div className='flex flex-col gap-3'>
      <div className="w-full">
      <HomeBox1/>
      </div>
      <div className="w-full">
      <HomeBox2/>
      </div>
    </div>
    <div className='flex flex-col gap-3'>
    <div className="w-full">
      <HomeBox3/>
    </div>
    <div className="w-full">
      <HomeBox4/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
