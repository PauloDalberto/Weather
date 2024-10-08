'use client'

export const GetDate = () => {
  const date = new Date()

  const fullYear = date.getFullYear();
  const fullDate = `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  
  return {
    fullYear, 
    fullDate, 
  }
}