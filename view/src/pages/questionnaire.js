
import React from 'react';
import Header from '../components/header';

import Link from '@material-ui/core/Link';


function questionnaire() {
    return (
      <div>
        <Header></Header>
          <h>Questionnaire for the elderly!</h>
          <Link href="results" variant="body2">
									{"Submit"}
								</Link>
          </div>  
          );
}
export default questionnaire;