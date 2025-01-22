import { type Block } from "~/api/queryPage";

type HeadingBlock = Extract<Block, { blockType: "heading" }>;

export const Heading = ({ data }: { data: HeadingBlock }) => {
  return <p className={"text-xl font-bold"}>{data.text}</p>;
};
