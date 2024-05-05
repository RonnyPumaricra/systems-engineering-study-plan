export function TitleScreen() {


  return (
    <div
      className={
        `absolute z-50 inset-0
        max-md:px-3 max-md:pt-0 max-md:flex flex-col justify-center
        max-xl:px-6
        max-2xl:pt-36 max-2xl:px-12
        pt-48 px-24
        bg-white
        animate-[title-screen_2s_ease-in_forwards]`}
    >
      <h1
        className="font-serif max-md:text-4xl max-xl:text-6xl text-8xl font-black pb-16 animate-fade-to-left animate-delay-[900ms]"
      >PLAN DE ESTUDIOS</h1>
      <p className="font-serif max-md:text-2xl max-xl:text-4xl text-5xl italic pb-16 animate-fade-to-left animate-delay-[1000ms]">Ingenería de sistemas</p>
    </div>
  )
}