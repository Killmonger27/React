import React from 'react'

const Card = ({name = "John Doe",role = "Not assigned yet",imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FVYPfsJDl19zjGIi6Ipsns9U-IJvRF35ZQ&ss",alt="Nothing"}) => {
  return (
    <>
      <div class="py-8 px-8 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 my-5" >
        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={imgUrl} alt={alt} />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
              {name}
            </p>
            <p class="text-purple-600 font-medium">
              {role}
            </p>
          </div>
          <button class="px-4 py-1 bg-white text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
    </>
    
  )
}

export default Card