import styled from 'styled-components';

export const HomeContainer = styled.div`
      display: flex;
      flex-direction: column;
      background-color: ${props => props.theme.colors.background};
      min-height: 100vh;
    `;

export const TopBar = styled.header`
      width: 100%;
      height: 40px;
      background-color: ${props => props.theme.colors.primary};
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 40px;
      text-align: center;
      font-size: 30px;
      padding-left: 30px;
      padding-right: 30px;
      margin-top: -10px;
      margin-left: -10px;
      margin-right: -5px;
      padding-top: 30px;
      padding-bottom: 30px;
    `;

export const Content = styled.main`
      padding: 10px 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;

export const GreetingSection = styled.div`
      
    `;

export const UserName = styled.h2`
      font-size: 22px;
      font-weight: 800;
      color: ${props => props.theme.colors.textPrimary};
    `;

export const BalanceCard = styled.div`
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
      border-radius: 22px;
      padding: 22px;
      position: relative;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    `;

export const BalanceLabel = styled.p`
      font-size: 14px;
      color: #a8c8f0;
      font-weight: 600;
      margin-bottom: 4px;
    `;

export const BalanceValue = styled.div`
      font-size: 38px;
      font-weight: 800;
      margin-bottom: 4px;
    `;

export const EyeButton = styled.button`
      position: absolute;
      top: 22px;
      right: 22px;
      background: rgba(255, 255, 255, 0.15);
      border: none;
      border-radius: 10px;
      padding: 8px;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
    `;

export const AlertBar = styled.div`
      background-color: #fff8e8;
      border: 1.5px solid ${props => props.theme.colors.warning};
      border-radius: 16px;
      padding: 14px;
      display: flex;
      gap: 12px;
      align-items: center;
    `;

export const ActionGrid = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 8px;
    `;

export const ActionCard = styled.button`
      background: #fff;
      border: 1.5px solid ${props => props.theme.colors.border};
      border-radius: 20px;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.2s;
   
      &:active {
        background-color: #eef4fd;
        border-color: ${props => props.theme.colors.primary};
        transform: scale(0.95);
      }
    `;

export const ActionIcon = styled.span`
      font-size: 32px;
    `;

export const ActionLabel = styled.span`
      font-size: 15px;
      font-weight: 700;
      color: ${props => props.theme.colors.textPrimary};
    `;