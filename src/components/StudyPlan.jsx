import { useState } from "react"
import { studyPlanData } from "../data"
import { Course } from "./Course"



export function StudyPlan({selectedCategories}) {

  
  const [selected, setSelected] = useState([null, null])
  // const [selected, setSelected] = useState([0, 0])

  return (
    <div className="overflow-x-auto">
      <div
        className={
          `flex flex-row gap-x-32
          pt-8 px-20 mt-12 w-max`}
      >
        {studyPlanData.map((el, i) => (
          <nav key={i}>
            <h3 className="font-bold text-[2rem] min-w-[432px] max-w-[432px] px-4">{el.name}</h3>
            <ul>
              {el.courses.map((course, ii) => {
                if (course.type == "E") return null
                // Is highlighted
                let isHighlighted = selectedCategories[course.id.slice(0, 2)]
                let courseState = isHighlighted
                  ? selected[0] == null && selected[1] == null
                    ? "highlighted"
                    : "grayed"
                  : "none"
                // If selected, highlight if related
                let selectedCourse
                if (!(selected[0] == null && selected[1] == null)) {
                  selectedCourse = studyPlanData[selected[0]].courses[selected[1]]
                  
                  if (
                    selectedCourse.requisites.some(req => req == course.id)
                    || course.requisites.some(req => req == selectedCourse.id)
                  ) {
                    console.log(course.name)
                    courseState = "highlighted"
                  }
                }
                
                return (
                  <Course
                    className="min-w-[432px] max-w-[432px] truncate"
                    key={ii}
                    data={course}
                    state={courseState}
                    isSelected={selected[0] == i && selected[1] == ii}
                    handleClick={() => {
                      if (selected[0] == i && selected[1] == ii) {
                        setSelected([null, null])
                      } else setSelected([i, ii])
                    }}
                  />
                )

              })}
            </ul>
          </nav>
        ))}
      </div>
    </div>
    
  )
}

