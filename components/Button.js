'use client'

function Button({black, onCLick, label, icon}) {
  
  return (
    <button onClick={onCLick} className= {`flex justify-between px-1 pl-4 items-center gap-4 py-[5px] rounded-full ${black ? 'bg-black text-white' : 'bg-gray-300'}`}>
      {label}
      {icon}
    </button>
  )
}

export default Button
