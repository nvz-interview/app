import React from 'react';

import styled from 'styled-components';

const Title = styled.h1`
    font-size: ${p => p.theme.typography.h1.size}px;
    font-weight: ${p => p.theme.typography.h1.weight};

    padding: ${p => p.theme.unit(2)}px;
`;

export default function Header() {
    return <Title>Header</Title>;
}
