type RepliesCounterProps = {
    count: number 
  }
  
  const RepliesCounter = ({count}: RepliesCounterProps) => {
      const label =count > 1 ? "Respuestas" : "Respuesta"
    return (
      <div>
          {count} {label}
      </div>
    )
  }
  
  export default RepliesCounter