import { ListProps } from "../type";
import { Item } from "./Item"

export const ListItems: React.FC<ListProps> = ({ levels }) => {
    return (
      <>
        {levels.map((level, index) => (
          <Item card={level} key={index} item={level} />
        ))}
      </>
    );
  };
  