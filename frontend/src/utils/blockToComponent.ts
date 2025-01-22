import { Text } from "~/components/blocks/Text";
import { Heading } from "~/components/blocks/Heading";
import { Image } from "~/components/blocks/Image";

const blockToComponent: Record<string, React.ComponentType<{ data: any }>> = {
  text: Text,
  heading: Heading,
  image: Image,
};

export default blockToComponent;
