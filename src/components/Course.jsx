/** @type {{stroke: string, light: string, primary: string}[]} */
const courseColors = {
  "EG": {
    stroke: "bg-amber-400",
    light: "bg-amber-100",
    primary: "bg-amber-400"
  },
  "CB": {
    stroke: "bg-sky-400",
    light: "bg-sky-100",
    primary: "bg-sky-400",
  },
  "IS": {
    stroke: "bg-green-500",
    light: "bg-green-100",
    primary: "bg-green-500"
  },
}

/**
 * 
 * @param {{state: "highlighted" | "grayed" | "selected"}} 
 * @returns 
 */

export function Course({data, state, handleClick, isSelected, className}) {

  let bgColor, strokeColor;
  let colorset = courseColors[data.id.slice(0,2)]

  if (isSelected) {
    strokeColor = colorset.primary
    bgColor = colorset.primary
  } else if (state == "grayed") {
    bgColor = "bg-stone-50"
    strokeColor = "bg-stone-400"
  } else if (state == "selected") {
    strokeColor = colorset.primary
    bgColor = colorset.primary
  } else if (state == "highlighted") {
    bgColor = colorset.light
    strokeColor = colorset.stroke
  } else {
    bgColor = ""
    strokeColor = ""
  } 
  
  if (data.type == "E") {
    strokeColor = "bg-stone-400"
    bgColor = "bg-stone-50"
  }

  return (
    <li
      className={
        `text-2xl max-2xl:text-xl max-md:text-base
        p-4 max-md:p-2 relative ${bgColor} ${className}`
      }
      onClick={() => handleClick()}
    >
      {data.name}
      <div className={`absolute w-1 inset-y-0 left-0 ${strokeColor}`}></div>
      <div className={`absolute w-1 inset-y-0 right-0 ${strokeColor}`}></div>
    </li>
  )
}