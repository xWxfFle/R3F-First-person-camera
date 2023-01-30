export const Navigation = () => {
  return (
    <nav className="bg-indigo-900 fixed top-0 left-0 h-10 w-screen z-0">
      <ul className="flex flex-row  justify-around text-slate-100 text-xl font-bold">
        <li>
          <a href="#">Main</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
