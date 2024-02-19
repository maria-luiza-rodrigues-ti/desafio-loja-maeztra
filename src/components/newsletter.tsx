import useNewsletter from "../hooks/useNewsletter";

export default function Newsletter() {
  const { email, isAnError, handleContentChange, handleSaveEmail } =
    useNewsletter();

  return (
    <section className="py-[40px] border-grey border-y-2  mb-[80px] ">
      <div className="flex justify-between items-center mx-auto max-w-[937px]">
        <h2 className="text-black text-2xl font-bold">
          Recebe Nossa Newsletter
        </h2>
        <form
          className={`flex h-10 max-w-[640px] w-full border border-lightBlack rounded relative ${
            isAnError ? "border border-red-600" : ""
          }`}
        >
          <input
            className="pl-6 rounded placeholder:text-sm placeholder:text-lightBlack w-4/5"
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={handleContentChange}
          />
          <button
            type="button"
            onClick={handleSaveEmail}
            className="bg-yellow w-[131px] h-10 rounded text-sm/[21px] text-white absolute z-10 right-[-1px] top-[-1px]"
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
