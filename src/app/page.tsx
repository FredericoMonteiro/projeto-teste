"use client"

import { FormEvent } from "react";

const Page = () => {
  
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Formulário enviado!");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="p-2 border border-gray-400 rounded"
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="p-2 border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Page;