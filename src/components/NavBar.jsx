import YouTubeLogo from "./YouTubeLogo";

export default function NavBar() {
  return (
    <nav className="col-start-1 col-end-3 grid grid-cols-3">
      <div className="flex flex-row items-center gap-1 pl-4">
        <YouTubeLogo height="1.8rem" width="3rem" />
        <span>YouTube</span>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 px-4 border border-gray-700 rounded-lg bg-transparent"
        />
      </div>
      <div className="flex justify-end">
        <img
          src="https://api.dicebear.com/8.x/identicon/svg?seed=Charles"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}