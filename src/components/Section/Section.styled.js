import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.text}
`;