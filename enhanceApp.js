import { Tooltip } from "@informalsystems/tendermint-vue-ui";
import MarkdownIt from "markdown-it";

export default ({ Vue }) => {
  Vue.component("df", Tooltip);
  Vue.mixin({
    methods: {
      md: string => {
        const md = new MarkdownIt({ html: true, linkify: true });
        return `<div>${md.renderInline(string)}</div>`;
      },
    }
  })
  require("./styles/palette.styl");
};
