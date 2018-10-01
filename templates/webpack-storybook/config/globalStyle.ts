import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const globalStyle = () => injectGlobal`
  ${styledNormalize}
`;

export { globalStyle };
