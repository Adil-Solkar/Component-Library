function Badges({ 
    text="Badge",
    shape="square",
    textColor="#1F2937",
    bgColor="#F3F4F6"}) {
  return (
    <p className={`badge badge-${shape}`} style={{color:textColor, background: bgColor}}>
        {text}
    </p>
  )
}

export default Badges