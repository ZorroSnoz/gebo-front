import React from 'react';
import { connect } from 'react-redux';
import AdItem from './ad_item';

let AdItemCon = (props) => {
    let { ad, login } = props;
    let adItems = ad.map(item => <AdItem item={item} />);
    return (
        <>
{adItems}
        </>
    );
};

let mapStateToProps = (state) => {
    return {
        ad: state.adReduser,
        login: state.loginReduser
    }
};

export default connect(mapStateToProps, null)(AdItemCon);