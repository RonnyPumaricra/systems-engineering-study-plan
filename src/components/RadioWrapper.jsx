import { useState } from "react"


export function RadioWrapper({color, name, children, onSelect}) {
  const [isChecked, setIsChecked] = useState(false)

  let textColor = isChecked ? "text-stone-900" : "text-stone-500"

  let colorsList = {
    border: "border-" + color,
    bg: "bg-" + color,
  };

  return (
    <label className="flex flex-row shrink-0">
      <input
        type="checkbox"
        className="hidden"
        name={name}
        onChange={ev => {
          setIsChecked(ev.target.checked)
          onSelect()
        }}
      />
      <div
        className={
          `shrink-0
          max-md:size-6 max-md:border-3 max-md:mr-2
          max-2xl:size-7 max-2xl:border-3 max-2xl:mr-2
          size-8 mr-3
          ${colorsList.border} border-4 rounded-full
          grid place-content-center`}
      >
        <div className={`size-[10px] rounded-full ${isChecked ? colorsList.bg : ""}`}></div>
      </div>

      <p className={`max-md:text-base max-2xl:text-xl text-2xl font-semibold ${textColor}`}>{children}</p>
    </label>
  )
}