// generated by scripts/new-page.js
// @ts-ignore
import Doc, { frontmatter } from "../docs/helloworld.mdx";
import ssgConfig from "../mdxx-ssg.json";
import { ItemLayout } from "../components/ItemLayout";

const newProps = { ...ssgConfig, ...frontmatter } as any;

export const config = {
  amp: true,
};

export default () => (
  <ItemLayout {...newProps}>
    <Doc />
  </ItemLayout>
);
