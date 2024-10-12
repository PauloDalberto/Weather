import { XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function Modal(){
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null;

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if(event.target === event.currentTarget){
      closeModal()
    }
  }

  return(
    <section className="absolute w-screen h-screen bg-[rgba(0,0,0,0.6)] flex items-center justify-center" onClick={handleClose}>
      <div className="h-96 w-96 bg-red-50 rounded p-6 flex flex-col gap-4">
        <XMarkIcon width={24} height={24} className="cursor-pointer text-red-600" onClick={closeModal}/>
        <h1 className="text-lg text-red-950 font-bold">
          Ocorreu um erro para realizar a pesquisa!
        </h1>
          Verifique os dados e insira uma cidade válida
          OBS: lembre apenas de digitar o nome da cidade, estado não é necessário
      </div>
    </section>
  )
}