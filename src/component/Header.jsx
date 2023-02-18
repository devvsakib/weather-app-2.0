import React from 'react'

const Header = ({value, isThemeOn, theme, setValue}) => {
  return (
    <div className='md:px- m-0.55 flex justify-between'>
        <input type="text"
          className={`outline-none px-3 md:px-5 py-2 w-52 md:w-auto  rounded-md text-white`}
          placeholder='Search...'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className={`${theme ? "text-black bg-white" : "text-white bg-black"}`}
          onClick={isThemeOn}
        >{theme ? "Dark" : "Light"}</button>
      </div>
  )
}

export default Header