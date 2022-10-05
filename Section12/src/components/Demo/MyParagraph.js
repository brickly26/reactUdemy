import React from 'react'

const MyParagraph = (props) => {
  console.log("Paragraph Running")
  return (
    <p>{props.children}</p>
  )
}

export default MyParagraph