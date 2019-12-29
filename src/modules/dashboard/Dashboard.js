import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import {actions as UsersActions} from '../../state/slices/users';

const DashboardContainer = styled.main`
    padding: ${p => p.theme.unit(2)}px;
`;

const DashboardTitle = styled.h2`
    font-size: ${p => p.theme.typography.h2.size}px;
    font-weight: ${p => p.theme.typography.h2.weight};

    margin-bottom: ${p => p.theme.unit(2)}px;
`;

class Dashboard extends Component {
    render() {
        const {getUsersIDs} = this.props;

        return (
            <DashboardContainer>
                <DashboardTitle>Dashboard</DashboardTitle>
                <button onClick={getUsersIDs}>Load</button>
            </DashboardContainer>
        );
    }
}

function extract(state) {
    const {users = []} = state;
    return {users};
}

export default connect(extract, {...UsersActions})(Dashboard);
