import { type Block } from "~/api/queryPage";

type ImageBlock = Extract<Block, { blockType: "image" }>;

export const Image = ({ data }: { data: ImageBlock }) => {
  console.log(data);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return (
    <img className={"w-1/4"} src={"http://localhost:3000" + data.image?.url} />
  );
};
