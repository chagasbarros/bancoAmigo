import styled from 'styled-components';

export const LoginContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 20px;
      min-height: 100vh;
      background-color: ${props => props.theme.colors.background};
    `;

export const LogoArea = styled.div`
      width: 100%;
      height: 50px;
      background-color: ${props => props.theme.colors.primary};
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      text-align: center;
      font-size: 40px;
      margin-left: -30px;
      margin-right: -30px;
      padding-left: 30px;
      padding-right: 30px;
      margin-top: -50px;
      padding-top: 30px;
      padding-bottom: 30px;
    `;

export const Greeting = styled.h1`
      font-size: 26px;
      font-weight: 800;
      color: ${props => props.theme.colors.textPrimary};
      margin-bottom: 8px;
      text-align: center;
    `;
export const SubGreeting = styled.p`
      font-size: 16px;
      color: ${props => props.theme.colors.textSecondary};
      margin-bottom: 32px;
      text-align: center;
    `;

export const InputGroup = styled.div`
      width: 100%;
      margin-bottom: 24px;
    `;

export const Label = styled.label`
      display: block;
      font-size: 16px;
      font-weight: 700;
      color: ${props => props.theme.colors.textPrimary};
      margin-bottom: 10px;
    `;

export const LargeInput = styled.input`
      width: 100%;
      padding: 18px;
      font-size: 22px; // Fonte bem grande para leitura fácil
      border-radius: 14px;
      border: 2px solid ${props => props.theme.colors.border};
      color: ${props => props.theme.colors.textPrimary};
      font-family: 'Nunito', sans-serif;
      box-sizing: border-box;
   
      &:focus {
        border-color: ${props => props.theme.colors.primary};
        outline: none;
      }
   
      &::placeholder {
        color: #acc1d6;
      }
    `;
export const SecurityHint = styled.div`
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background-color: #fff;
      padding: 16px;
      border-radius: 16px;
      border: 1.5px solid #f0c060;
      margin-top: 80px; // Empurra para o final da tela
      margin-bottom: 20px;
    `;