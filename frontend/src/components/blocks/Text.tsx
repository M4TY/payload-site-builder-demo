import { type Block } from "~/api/queryPage";

type TextBlock = Extract<Block, { blockType: "text" }>;

export const Text = ({ data }: { data: TextBlock }) => {
  return <p>{data.text}</p>;
};
