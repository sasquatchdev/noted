import { GenericBlock } from "../../Block";

export interface ParagraphBlock extends GenericBlock {
  type: "paragraph";
  content: string;
}

export const Paragraph: React.FC<{ block: ParagraphBlock }> = ({ block }) => {
  return <p className="block paragraph">
    {block.content}
  </p>;
}