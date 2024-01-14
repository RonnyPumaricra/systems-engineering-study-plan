import { studyPlanData } from "../data"
import { Course } from "./Course"



export function StudyPlan() {



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

                return (
                  <Course key={ii} data={course} state="selected" />
                )

              })}
            </ul>
          </nav>
        ))}
      </div>
    </div>
    
  )
}

