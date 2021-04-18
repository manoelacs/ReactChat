import React from 'react';
import {Span} from './styles';

const StyledStar = ( {children}, props) => {
    return(
        <Span {...props }>{children}</Span>
    )
}; export default StyledStar;