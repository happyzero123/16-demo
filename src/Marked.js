import React, { PropTypes } from 'react';
import marked from 'marked';

class Marked extends React.Component {
  render () {

    let xx = marked('### I am using __markdown__.');
    let zz = marked('# marked');
    return(
    <div>
      <p dangerouslySetInnerHTML={{__html:xx}}></p>
      <p dangerouslySetInnerHTML={{__html:zz}}></p>
    </div>

    )
  }
}

export default Marked;
