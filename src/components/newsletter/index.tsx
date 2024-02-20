import useNewsletter from "../../hooks/useNewsletter";

export default function Newsletter() {
  const { email, isAnError, handleContentChange, handleSaveEmail } =
    useNewsletter();

  return (
    <section className="py-6 md:py-[40px] px-[31px] md:px-0 border-grey border-y-2 md:mb-[80px] ">
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-2 mx-auto max-w-[937px]">
        <h2 className="text-black text-2xl font-bold">
          Recebe Nossa Newsletter
        </h2>
        <form
          className={`flex h-[26px] gap-[15px] md:gap-0 md:h-10 max-w-[640px] w-full md:border md:border-lightBlack md:rounded md:relative ${
            isAnError ? "border border-red-600" : ""
          }`}
        >
          <input
            className="pl-6 rounded border border-lightBlack placeholder:text-sm placeholder:text-lightBlack w-[69%] md:w-4/5"
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={handleContentChange}
          />
          <button
            type="button"
            onClick={handleSaveEmail}
            className="bg-yellow w-[79px] md:w-[131px] h-[26px] md:h-10 rounded text-sm/[21px] text-white md:absolute md:z-10 md:right-[-1px] md:top-[-1px] focus-visible:outline-none"
          >
            Enviar
          </button>
          <span
            className={`absolute -bottom-6 text-red-600 text-xs ${
              isAnError ? "block" : "hidden"
            }`}
          >
            Verifique se e-mail está correto
          </span>
        </form>
      </div>
    </section>
  );
}
