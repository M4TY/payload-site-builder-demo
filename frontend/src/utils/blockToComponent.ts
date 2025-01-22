import { Text } from "~/components/blocks/Text";
import { Heading } from "~/components/blocks/Heading";

const blockToComponent: Record<string, React.ComponentType<{ data: any }>> = {
  text: Text,
  heading: Heading,
};

export default blockToComponent;
