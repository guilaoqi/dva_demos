import React from 'react';
import { connect } from 'dva';


const Life = ({ dispatch, products }) => {

  return (
    <div>
      <h2>这是friend页</h2>
    </div>
  );
};

// export default Products;
export default connect()(Life);


