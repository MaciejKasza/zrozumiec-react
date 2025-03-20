import { Item } from "../item/Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];
const WIDTH = 120;

export function List() {
  return (
    <>
      <button
        className={`cursor-pointer rounded-[5px] border border-solid border-current bg-transparent p-3 w-[${WIDTH}px] text-salmon hover:bg-salmon m-[30px] transition-colors hover:text-white`}
        onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
      >
        Pokaż liczbę emoji
      </button>
      <ul className="flex list-none flex-col gap-[30px] p-[30px]">
        {emojis.map((emoji) => (
          <Item key={emoji} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
