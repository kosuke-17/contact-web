import React from 'react'

const BackBoard = ({children}) => {
  return (
    <div className="inline-block ml-10 mt-10 px-4 py-4 bg-white rounded-md shadow-md border border-gray-200">
      {children}
    </div>
  )
}

export default BackBoard
