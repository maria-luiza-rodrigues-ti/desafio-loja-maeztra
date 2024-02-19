import { ChangeEvent, MouseEvent, useState } from "react";
import { toast } from "sonner";

export default function useNewsletter() {
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

  return { email, isAnError, handleContentChange, handleSaveEmail };
}
