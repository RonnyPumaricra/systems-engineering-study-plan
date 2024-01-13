import { RadioWrapper } from "./RadioWrapper";


export function MainScreen() {
  return (
    <div className="px-24 pt-20">
      <h2 className="text-[2.5rem] font-serif font-bold mb-10">
        Plan de Estudios | Ingeniería de Sistemas
      </h2>
      <div className="flex flex-row gap-16">
        <RadioWrapper color="amber-500">Estudios Generales</RadioWrapper>
        <RadioWrapper color="sky-500">Ciencias Básicas</RadioWrapper>
        <RadioWrapper color="green-600">Ingeniería de Sistemas</RadioWrapper>
        {/* 
        <RadioWrapper color="yellow">Estudios Generales</RadioWrapper>
        <RadioWrapper color="blue">Ciencias Básicas</RadioWrapper>
        <RadioWrapper color="green">Ingeniería de Sistemas</RadioWrapper> */}
      </div>
    </div>
  )
}