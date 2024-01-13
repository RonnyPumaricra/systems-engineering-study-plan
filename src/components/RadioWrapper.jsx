import { useState } from "react"


export function RadioWrapper({color, name, children}) {
  const [isChecked, setIsChecked] = useState(false)

  let textColor = isChecked ? "text-stone-900" : "text-stone-500"

  let colorsList = {
    border: "border-" + color,
    bg: "bg-" + color,
  };

  return (
    <label className="flex flex-row">
      <input
        type="checkbox"
        className="hidden"
        name={name}
        onChange={ev => setIsChecked(ev.target.checked)}
      />
      <div
        className={
          `size-8 mr-3
          ${colorsList.border} border-4 rounded-full
          grid place-content-center`}
      >
        <div className={`size-[18px] rounded-full ${isChecked ? colorsList.bg : ""}`}></div>
      </div>

      <p className={`text-2xl font-bold ${textColor}`}>{children}</p>
    </label>
  )
}