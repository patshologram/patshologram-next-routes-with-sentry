'use client'

export default function Page() {
  const handleOnClick = () => {
    throw new Error('SYNTHETIC TEST ERROR')
  }

  return <button onClick={handleOnClick}>throw it!</button>
}
