import { useState } from "react";
import CustomForm from "./components/CustomForm";
import OneThing from "./components/OneThing";

import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function getSuccessMessage() {
  const messages = ["Congrats!", "Great job!", "Don't ya feel great?!", "Up, up, and up!", "Um...okay", "Did you though?", "Don't feel like you tried your best...", "FAget about it!"];
  return messages[Math.floor(Math.random() * messages.length)];
}

function App() {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThing(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsCompleted(false)
  }

  const handleCompletedThing = async (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).setAttribute('disabled', "true")
    setThing(getSuccessMessage())
    await jsConfetti.addConfetti();
    (e.target as HTMLButtonElement).removeAttribute('disabled')
    setThing("")
    setIsCompleted(true)
  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted &&
          <>
            <CustomForm thing={thing} handleInput={handleInput} handleSubmit={handleSubmit} />
          </>
        }
        {
          !isCompleted &&
          <>
            <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
          </>
        }
      </div>
    </main>
  )
}

export default App
