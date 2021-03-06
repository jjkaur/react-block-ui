/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';

import BlockUiExample from '../examples/BlockUi';
const BlockUiExampleSource = require('!!raw!../examples/BlockUi.js');
import BlockUiNoChildrenExample from '../examples/BlockUiNoChildren';
const BlockUiNoChildrenExampleSource = require('!!raw!../examples/BlockUiNoChildren.js');

export default class BlockUiPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="BlockUi" />
        <h3>BlockUi</h3>
        <p>
          This is the basic ability. Wrap a section with the <code>BlockUi</code> component and set the <code>blocking</code>
          prop to <code>true</code> to block the UI/children (and show the loader) or <code>false</code> to allow user interaction
          with the UI/children.
        </p>
        <div className="docs-example">
          <BlockUiExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BlockUiExampleSource}
          </PrismCode>
        </pre>

        <h3>Do not render children while blocking</h3>
        <p>
          Setting the <code>renderChildren</code> prop to <code>false</code> will prevent the children from rendering while
          blocking. This is useful when the children depend on information which is still loading and would provide a poor
          user experience if rendered without the data which is still being requested/loading.
        </p>
        <div className="docs-example">
          <BlockUiNoChildrenExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BlockUiNoChildrenExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
