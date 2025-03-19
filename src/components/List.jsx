import { Item } from "./Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <ul>
      {emojis.map((emoji) => (
        <Item key={emoji} emoji={emoji} />
      ))}
    </ul>
  );
}
