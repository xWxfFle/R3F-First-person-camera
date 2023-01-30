import { RefObject, useRef, useState } from "react";
const inputStyles =
  "mt-2 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500";

export const Input = (props:any) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const input = useRef<HTMLInputElement>(null)
  const onSubmitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age)
    props.addNewUser(name, +age)
    setAge("")
    setName("")
  };

  return (
    <div className="bg-slate-700 h-48 p-6" >
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <input
          ref={input}
          className={inputStyles}
          type="string"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className={inputStyles}
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button
          className={inputStyles}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
