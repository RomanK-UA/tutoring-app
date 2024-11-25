type GameContainerProps = {
  children: React.ReactNode;
  flashColor?: string;
};

const GameContainer: React.FC<GameContainerProps> = ({
  children,
  flashColor,
}) => (
  <div
    className={`h-full w-full flex flex-col items-center gap-10 justify-center transition-all duration-500 ${flashColor}`}
  >
    {children}
  </div>
);

export default GameContainer;
