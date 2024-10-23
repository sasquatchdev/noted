import { GenericBlock } from "../../Block";

export interface HeadingBlock extends GenericBlock {
  type: "heading";
  content: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading: React.FC<{ block: HeadingBlock }> = ({ block }) => {
  const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
  return <Tag className="block heading">
    {block.content}
  </Tag>;
}