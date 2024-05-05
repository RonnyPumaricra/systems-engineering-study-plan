import { useState } from "react";
import { RadioWrapper } from "./RadioWrapper";
import { StudyPlan } from "./StudyPlan";


function flipCategory(categ, readonly) {
  const copy = {...readonly}
  copy[categ] = !readonly[categ]
  return copy
}

export function MainScreen() {
  const [selectedCategories, setSelectedCategories] = useState({
    "EG": false,
    "CB": false,
    "IS": false,
  })

  return (
    <div className="relative">
      <div className={
        `max-md:px-6 max-md:pt-6
        max-2xl:px-12 max-2xl:pt-12
        px-24 pt-20`}>
        <h2 className="max-md:text-[1.75rem] max-2xl:text-[2rem] text-[2.5rem] font-serif font-bold max-md:mb-6 mb-10">
          Plan de Estudios | Ingeniería de Sistemas
        </h2>
        <div className="flex max-md:flex-col flex-row flex-wrap max-md:gap-6 gap-12">
          <RadioWrapper
            color="amber-500"
            onSelect={() => setSelectedCategories(flipCategory("EG", selectedCategories))}
          >
            Estudios Generales
          </RadioWrapper>
          <RadioWrapper
            color="sky-500"
            onSelect={() => setSelectedCategories(flipCategory("CB", selectedCategories))}
          >
            Ciencias Básicas
          </RadioWrapper>
          <RadioWrapper
            color="green-600"
            onSelect={() => setSelectedCategories(flipCategory("IS", selectedCategories))}
          >
            Ingeniería de Sistemas
          </RadioWrapper>
        </div>
      </div>

      <StudyPlan selectedCategories={selectedCategories} />
    </div>
  )
}