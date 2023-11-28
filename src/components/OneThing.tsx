import CustomButton from "./CustomButton"

interface IhandleCompletedThing {
  (handleCompletedThing: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void>;
}

const OneThing = ({ thing, handleCompletedThing }: { thing: string, handleCompletedThing: IhandleCompletedThing }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center">{thing}</h1>
      <CustomButton text="Mark Done" handleCompletedThing={handleCompletedThing} />
    </>
  )
}

export default OneThing