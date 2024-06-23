export default function Menu() {
  // list rendering
  const menuItems = [
    { icon: "🏠", text: "Home" },
    { icon: "🩳", text: "Shorts" },
    { icon: "⏰", text: "Subscriptions" },
    { icon: "🤩", text: "Favs" },
  ];

  return (
    <aside id="menu" className="grid-cols-1/2 grid-rows-2/3 px-4 pr-0">
      {menuItems.map((item) => {
        return (
          <div key={`menu-item-${item.text}`} className="menu-item bg-dark hover:bg-neutral-800 p-4 rounded-2xl flex flex-row gap-0.5 items-center">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </aside>
  );
}