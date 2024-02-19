import { ChangeEvent, MouseEvent, useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isAnError, setisAnError] = useState(false);

  function handleContentChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSaveEmail(event: MouseEvent) {
    event.preventDefault();

    if (email === "") {
      return;
    }

    const error =
      !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
        email
      );

    if (error) {
      setisAnError(true);

      toast.error("E-mail não foi cadastrado!");
    } else {
      setisAnError(false);
      localStorage.setItem("email", JSON.stringify(email));
      toast.success("E-mail cadastrado com sucesso");
    }
  }

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
