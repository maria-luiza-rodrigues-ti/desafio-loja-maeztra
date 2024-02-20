import * as Dialog from "@radix-ui/react-dialog";
import useNewsletter from "../../hooks/useNewsletter";

export default function Modal() {
  const { email, isAnError, handleContentChange, handleSaveEmail } =
    useNewsletter();

  setTimeout(() => {}, 1000);

  return (
    <Dialog.Root defaultOpen>
      <Dialog.DialogTrigger asChild={true}>
        <div className="flex bg-lightBlack justify-center">
          <p className="text-xs/[18px] text-slate-200">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </p>
        </div>
      </Dialog.DialogTrigger>
      <Dialog.DialogPortal>
        <Dialog.Overlay className="inset-0 fixed z-20 bg-black/70"></Dialog.Overlay>
        <Dialog.Content className="fixed overflow-hidden z-30  inset-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[848px] flex flex-col">
          <Dialog.Close className="mr-[31px] md:mr-0 ml-auto  text-right text-slate-300 hover:text-white md:mb-[6px] focus-visible:outline-none">
            FECHAR
          </Dialog.Close>
          <div className="flex w-full justify-center">
            <img
              src="./src/assets/modal.png"
              alt="Fundo Modal"
              className="hidden md:block"
            />
            <div className="bg-white w-[calc(100%-62px)] md:w-full flex flex-col items-center pt-10 px-5 pb-6 md:pt-[122px] md:px-[51px]">
              <img
                src="./src/assets/icon-email.svg"
                alt="E-mail"
                className="mb-[13px]"
              />
              <span className="mb-[13px] text-xs/[20px] text-darkGrey">
                BEM VINDO À MAEZTRA
              </span>
              <h2 className="text-mediumGrey text-base/[23px] md:text-xl/[23px] max-w-[260px] text-center mb-[26px]">
                Receba em Primeira mão{" "}
                <strong className="block">desconto e ofertas exclusivas</strong>
              </h2>
              <form className="flex flex-col w-full relative">
                <input
                  type="text"
                  placeholder="Digite eu e-mail"
                  className={`border border-borderGrey rounded-[10px] py-[10px] px-[13px] h-10 placeholder:text-xs/[20px] placeholder:mediumGrey ${
                    isAnError ? "border border-red-600 " : "mb-[13px]"
                  }`}
                  value={email}
                  onChange={handleContentChange}
                />
                <span
                  className={` text-red-600 text-xs ${
                    isAnError ? "block mb-[3px]" : "hidden"
                  }`}
                >
                  Verifique se e-mail está correto
                </span>
                <button
                  type="button"
                  onClick={handleSaveEmail}
                  className="bg-yellow h-10 text-xs/[20px] md:text-base text-white flex items-center justify-center gap-1 md:gap-[1px] rounded-[10px] py-[10px] focus-visible:outline-none"
                >
                  ENVIAR <img src="./src/assets/icon-send.svg" alt="Enviar" />
                </button>
              </form>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
