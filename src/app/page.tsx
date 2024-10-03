import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const date = new Date();
  const fullDate = `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  return (
    <main className="grid grid-cols-[2fr_1fr] ">
      <section id="home" className="bg-white h-screen p-8">
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">{date.getFullYear()}</h1>
            <h2 className="text-lg font-medium">{fullDate}</h2>
          </div>
       
          <div className="relative text-gray8 h-fit">
            <MagnifyingGlassIcon width={24} height={24} className="absolute top-2.5 w-5 h-5 left-2"/>
            <input placeholder="Digite a cidade desejada" className="py-2 placeholder:text-gray8 text-black bg-gray2 rounded pl-9 pr-12 font-medium"/>
          </div>

          <UserIcon className="cursor-pointer" width={24} height={24} />
        </nav>

        <hr className="my-6"/>

        <div className="flex flex-row items-center justify-between">
          <h2 className="font-medium text-lg">Estatística do clima</h2>
          <a href="https://google.com" className="text-blue1 font-medium">Mais detalhes</a>
        </div>

        <div className="grid grid-cols-2 mt-3 gap-4">
          <div className="w-full h-16 bg-gray3 rounded-lg">oi</div>
          <div className="w-full h-16 bg-gray3 rounded-lg">oi</div>
          <div className="w-full h-16 bg-gray3 rounded-lg">oi</div>
          <div className="w-full h-16 bg-gray3 rounded-lg">oi</div>
        </div>
      </section>
      
      <section id='weather' className="bg-backgroundBlue h-screen p-8">teste 2</section>
    </main>
  );
}
