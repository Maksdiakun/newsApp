import React, { useState } from 'react';
import { connect } from 'react-redux';
import changeSort from '../store/actions/changeSort';

const NewsSort = ({ changeSort }) => {
    const [state, setState] = useState('Newest');
    const сhangeHandler = (event) => {
        const val = event.target.value;
        setState(val);
        changeSort(val);
    }
    return (
        <div className="news_header_sort">
            <p>
                Sort by date :
            </p>
            <select value={state} onChange={сhangeHandler} >
                <option value='publishedAt'>Newest</option>
                <option value='popularity'>Popular</option>
            </select>
        </div>
    )
};
const mapDispatchToProps = dispatch => {
    return {
        changeSort: srotBy => dispatch(changeSort(srotBy))
    };
};
export default connect(null, mapDispatchToProps)(NewsSort);