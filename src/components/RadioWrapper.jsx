import { useState } from "react"


/*
 * 
 * @param {{color: "amber" | "sky" | "green" | "stone"}}
 * @returns 
 */
/* Tailwind classes */
// border-amber-500
// bg-amber-500
// border-sky-500
// bg-sky-500
// border-green-600
// bg-green-600
// border-stone-500
// bg-stone-500
export function RadioWrapper({color, name, children}) {
  const [isChecked, setIsChecked] = useState(false)

  let textColor = isChecked ? "text-stone-900" : "text-stone-500"

  let colorsList = {
    border: "border-" + color,
    bg: "bg-" + color,
  };

  // switch (color) {
  //   case "amber":
  //     colorsList = {
  //       border: "border-amber-500",
  //       bg: "bg-amber-500",
  //     }
  //     break;
  //   case "sky":
  //     colorsList = {
  //       border: "border-sky-500",
  //       bg: "bg-sky-500",
  //     };
  //     break;
  //   case "green":
  //     colorsList = {
  //       border: "border-green-600",
  //       bg: "bg-green-600",
  //     };
  //     break;
  //   default:
  //     colorsList = {
  //       border: "border-stone-500",
  //       bg: "bg-stone-500",
  //     };
  // }

  return (
    <label className="flex flex-row">
      <input
        type="checkbox"
        className="hidden"
        name={name}
        onChange={ev => setIsChecked(ev.target.checked)}
      />
      <div className={`size-8 mr-3 ${colorsList.border} border-4 rounded-full grid place-content-center`}>
        <div className={`size-[18px] rounded-full ${isChecked ? colorsList.bg : ""}`}></div>
      </div>

      <p className={`text-2xl font-bold ${textColor}`}>{children}</p>
    </label>
  )
}