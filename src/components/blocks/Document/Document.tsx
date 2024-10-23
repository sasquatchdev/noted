import { Block, Blocks, GenericBlock } from "../../Block";

export interface DocumentBlock extends GenericBlock {
  type: "document";
  content: Block[];
}

export const Document: React.FC<{ block: DocumentBlock }> = ({ block }) => {
  return <div className="block document">
    <Blocks blocks={block.content} />
  </div>;
}