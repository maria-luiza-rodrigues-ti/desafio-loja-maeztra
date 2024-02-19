import * as Dialog from "@radix-ui/react-dialog";

export default function Modal() {
  return (
    <Dialog.Root>
      <Dialog.DialogTrigger asChild={true}>
        <div className="flex bg-lightBlack justify-center">
          <p className="text-xs/[18px] text-slate-200">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </p>
        </div>
      </Dialog.DialogTrigger>
      <Dialog.DialogPortal>
        <Dialog.Overlay className="inset-0 fixed z-20 bg-black/70"></Dialog.Overlay>
        <Dialog.Content className="fixed overflow-hidden z-30 inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-[848px] flex flex-col outline-none">
          <Dialog.Close className="ml-auto text-slate-300 hover:text-white mb-[6px]">
            FECHAR
          </Dialog.Close>
          <div className="flex w-full">
            <img src="./src/assets/modal.png" alt="Fundo Modal" />
            <div className="bg-white w-full flex flex-col items-center pt-[122px] px-[51px]">
              <img
                src="./src/assets/icon-email.svg"
                alt="E-mail"
                className="mb-[13px]"
              />
              <span className="mb-[13px] text-xs/[20px] text-darkerGrey">
                BEM VINDO À MAEZTRA
              </span>
              <h2 className="text-mediumGrey text-xl/[23px] max-w-[260px] text-center mb-[26px]">
                Receba em Primeira mão{" "}
                <strong>desconto e ofertas exclusivas</strong>
              </h2>
              <form className="flex flex-col gap-[12px] w-full">
                <input
                  type="text"
                  placeholder="Digite eu e-mail"
                  className="border border-borderGrey rounded-[10px] py-[10px] px-[13px] placeholder:text-xs/[20px] placeholder:mediumGrey"
                />
                <button
                  type="button"
                  className="bg-yellow text-white flex items-center justify-center gap-[1px] rounded-[10px] py-[10px]"
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
