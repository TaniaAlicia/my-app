type RepliesCounterProps = {
  count: number;
  onClick?: () => void;
};

const RepliesCounter = ({ count, onClick }: RepliesCounterProps) => {
  const className = "link-primary min-w-[160px] text-right";

  if (count === 0) {
    return (
      <div className={className} onClick={onClick}>
        Se el primero en responder
      </div>
    );
  }

  const label = count > 1 ? "Respuestas" : "Respuesta";

  return (
    <div className={className} onClick={onClick}>
      {count} {label}
    </div>
  );
};

export default RepliesCounter;
