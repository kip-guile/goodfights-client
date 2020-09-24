import React from 'react'
import { Input } from 'antd'

const Strip = () => {
  const { Search } = Input
  return (
    <div
      style={{
        minHeight: '7vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <span>Home</span>
      <Search
        placeholder='input search text'
        onSearch={(value) => console.log(value)}
        style={{ width: 200, height: 30 }}
      />
      <span>Profile</span>
    </div>
  )
}

export default Strip
