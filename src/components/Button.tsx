import styled from 'styled-components';

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
width: 100%;
padding: 18px;
font-size: ${props => props.theme.fontSize.medium};
font-weight: 700;
border-radius: ${props => props.theme.borderRadius};
border: none;
cursor: pointer;
diplay: flex;
align-items: center;
justify-content: center;
gap: 10px;
transition: transform 0.1s active;

background-color: ${props => {
        if (props.variant === 'secondary') return props.theme.colors.secondary;
        if (props.variant === 'danger') return props.theme.colors.danger;
        return props.theme.colors.primary;
    }};

color: ${props => props.variant === 'secondary' ? props.theme.colors.primary : '#fff'};
border: ${props => props.variant === 'secondary' ? `2px solid ${props.theme.colors.primary}` : 'none'};

&:active {
    transform: scale(0.98); 
}
`
