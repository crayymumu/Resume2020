import Title, { ETitleType } from "../Common/Title";
import Divider from "../Common/Divider";
import SmallTitle from "../Common/SmallTitle";

import style from "./Project2/style.module.scss";

export default function Project() {
  return (
    <div className={style.project1}>
      <Title type={ETitleType.Theme}>Project</Title>
      <Divider />
      <SmallTitle>low-code platform</SmallTitle>
      <p>
        1. Based on iview-ui, a complete front-end CRUD platform is packaged, and its complex json configuration is packaged into an easy-to-use UI configuration.
      </p>
      <p>
        2. It implements form components that can be dragged and customized attributes, and also supports the rapid construction of different forms of custom code form components.
      </p>
      <p>
        3. It supports the setting of role permissions and process permissions to achieve data isolation and ensure data security.
      </p>
      <Divider />
      <SmallTitle>Custom report application platform</SmallTitle>
      <p>
        1. Customize the SQL statement, realize the automatic rendering of SQL as a table UI component, and encapsulate complex functions such as data visualization, which is convenient for users to adjust according to their own needs.
      </p>
      <p>
        2. Supports custom visualization, implements a set of report rendering life cycle rules, and dynamically loads user-defined report rendering logic to the platform in a graphical form.
      </p>
      <p>
        3. Supports custom components, realizes loading external .vue files that meet the Vue.js specification to the platform, and realizes partial page customization.
      </p>
      <Divider />
      <SmallTitle>Application Platform Base Library</SmallTitle>
      <p>
        1.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/pandora-component"
          target="_blank"
        >
            amax-vue
        </a>
        : Based on view-ui components, it encapsulates common business components in platform functions.
      </p>
      {/*<p>*/}
      {/*  2.*/}
      {/*  <a*/}
      {/*    href="https://www.npmjs.com/package/@qn-pandora/pandora-app-component"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    @qn-pandora/pandora-app-component*/}
      {/*  </a>*/}
      {/*  : Providing customized complex components.*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  3.*/}
      {/*  <a*/}
      {/*    href="https://www.npmjs.com/package/@qn-pandora/app-sdk"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    @qn-pandora/app-sdk*/}
      {/*  </a>*/}
      {/*  : Providing complex logic (such as search) and tool functions.*/}
      {/*</p>*/}
      {/*<Divider />*/}
      {/*<SmallTitle>*/}
      {/*  <a*/}
      {/*    href="https://www.npmjs.com/package/create-pandora-app"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    create-pandora-app*/}
      {/*  </a>{" "}*/}
      {/*  CLI Tool*/}
      {/*</SmallTitle>*/}
      {/*<p>*/}
      {/*  Providing multiple project creation templates, which features like local*/}
      {/*  dev, testing, previewing, etc.*/}
      {/*</p>*/}
      {/*<Divider />*/}
      {/*<SmallTitle>*/}
      {/*  <a*/}
      {/*    href="https://www.npmjs.com/package/@qn-pandora/search-editor"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    @qn-pandora/search-editor*/}
      {/*  </a>{" "}*/}
      {/*  search component*/}
      {/*</SmallTitle>*/}
      {/*<p>*/}
      {/*  Providing a search component with SPL keyword highlighting, suggesting,*/}
      {/*  and grammar checking features.*/}
      {/*</p>*/}
    </div>
  );
}
