import Card from '../components/Card'
import Increment from '../components/Increment'
import './App.css'


function App() {
   return(
    <>
      <h1 className=' text-white text-2xl bg-purple-600 rounded-lg max-w-sm mx-auto my-5 p-5'>React + Tailwind css</h1>
      <Card name = "Landry Ouarma" role = "Software Eng." imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FVYPfsJDl19zjGIi6Ipsns9U-IJvRF35ZQ&s" alt="Landry's face"/>
      <Card name = "Abdoul Razack" role = "Software Eng." imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5srVZ6bDAZuIwiViA4CC3odJz6iCvZfSxg&s" alt = "Razack's face"/>
      <Increment/>
    </>
   )
}

export default App
