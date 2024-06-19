import React from 'react'

const html = () => {

    const arr = ['dd','ee','rr']
    const arr2 =[]

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        arr2.push(<li key={index}>{element}</li>)
        
    }
  return (
    <div>
      <ul>
        {arr2}
      </ul>
    </div>
  )
}

export default html
