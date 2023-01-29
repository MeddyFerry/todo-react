import React from "react";

function FormTodo() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-slate-800 rounded-md shadow-xl shadow-gray-50/40 ring-2 ring-indigo-400 lg:max-w-xl">
        <h1 className=" text-center tpt-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-purple-400 font-bold text-lg ">
          TODO
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Faire le ménage..."
              />
            </label>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              submit
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}

export default FormTodo;
