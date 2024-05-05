export function TitleScreen() {


  return (
    <div
      className={
        `absolute z-50 inset-0
        max-2xl:pt-36 max-2xl:ps-12
        pt-48 ps-24
        animate-[title-screen_2s_ease-in_forwards]`}
    >
      <h1
        className="font-serif text-8xl font-black mb-16 animate-fade-to-left animate-delay-[900ms]"
      >PLAN DE ESTUDIOS</h1>
      <p className="font-serif text-5xl italic animate-fade-to-left animate-delay-[1000ms]">Ingenería de sistemas</p>
    </div>
  )
}