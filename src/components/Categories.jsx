export default function Categories() {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Code",
    "Programming",
    "Life Style",
    "Sports",
  ];

  return (
    <div className="flex flex-row gap-4">
      {
        categories.map((category) => {
          return (
            <span key={`category-${category}`} className="px-4 py-2 rounded-xl bg-gray-800">
              {category}
            </span>
          );
        })
      }
    </div>
  );
}