import React from 'react'

let value = 0
const ListBtn = () => {
  return (
    <div>
    
      <button>-</button>
      <input disabled value={value}></input>
      <button>+</button>
    </div>
  )
}

export default ListBtn
