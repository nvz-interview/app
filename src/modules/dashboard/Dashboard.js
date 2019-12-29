import React from 'react';

import styled from 'styled-components';

const DashboardContainer = styled.h1`
    padding: ${p => p.theme.unit(2)}px;
`;

export default function Dashboard() {
    return <DashboardContainer>Dashboard</DashboardContainer>;
}
