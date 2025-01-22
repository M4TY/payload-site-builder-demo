import { type Block } from "~/api/queryPage";
import blockToComponent from "~/utils/blockToComponent";

export const renderBlock = ({ block }: { block: Block }) => {
  const BlockComponent = blockToComponent[block.blockType];
  return BlockComponent ? <BlockComponent data={block} /> : null;
};
