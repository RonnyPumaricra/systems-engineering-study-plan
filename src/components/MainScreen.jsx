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
      <div className="px-24 pt-20">
        <h2 className="text-[2.5rem] font-serif font-bold mb-10">
          Plan de Estudios | Ingeniería de Sistemas
        </h2>
        <div className="flex flex-row gap-16">
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