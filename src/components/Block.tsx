import React from "react";
import { Paragraph, ParagraphBlock } from "./blocks/Paragraph/Paragraph";
import { Document, DocumentBlock } from "./blocks/Document/Document";
import { Heading, HeadingBlock } from "./blocks/Heading/Heading";

export interface GenericBlock {
  type: string;
  uuid: string;
  content?: any;
}

export type Block =
  | DocumentBlock
  | ParagraphBlock
  | HeadingBlock;

/**
 * Renders a single block.
 * @param param0 Any generic block object. 
 * @returns JSX element.
 */
export const Block: React.FC<{ block: Block }> = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return <Paragraph data-uuid={block.uuid} block={block} />
    case "document":
      return <Document data-uuid={block.uuid} block={block} />
    case "heading":
      return <Heading data-uuid={block.uuid} block={block} />
  }
}

/**
 * Renders a list of blocks.
 * @param param0 An array of blocks.
 * @returns JSX element.
 */
export const Blocks: React.FC<{ blocks: Block[] }> = ({ blocks }) => {
  return <div className="blocks">
    {blocks.map((block, index) => <Block key={index} block={block} />)}
  </div>;
}