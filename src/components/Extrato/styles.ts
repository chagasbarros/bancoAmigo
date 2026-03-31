import styled from 'styled-components';

export const ExtratoContainer = styled.div`
      display: flex;
      flex-direction: column;
      background-color: ${props => props.theme.colors.background};
      min-height: 100vh;
    `;

export const Header = styled.header`
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      gap: 16px;
    `;

export const BackButton = styled.button`
      background: rgba(255, 255, 255, 0.18);
      border: none;
      border-radius: 12px;
      color: #fff;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 800;
    `;

export const SummaryCard = styled.div`
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
      padding: 20px;
      border-radius: 0 0 24px 24px; // Arredondado só embaixo para "conectar" com o topo
      margin-bottom: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    `;

export const TransactionList = styled.div`
      padding: 0 16px 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;

export const DateHeader = styled.h3`
      font-size: 15px;
      color: ${props => props.theme.colors.textSecondary};
      font-weight: 700;
      margin-bottom: 8px;
      padding-left: 4px;
    `;

export const TransactionCard = styled.div`
      background: #fff;
      border-radius: 20px;
      padding: 16px;
      border: 1.5px solid ${props => props.theme.colors.border};
    `;

export const TransactionItem = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #eef2f7;
   
      &:last-child {
        border-bottom: none;
      }
    `;

export const TxIcon = styled.span`
      font-size: 24px;
      margin-right: 12px;
      background: #f0f4f8;
      padding: 8px;
      border-radius: 12px;
    `;

export const TxInfo = styled.div`
      flex: 1;
    `;

export const TxDescription = styled.p`
      font-size: 16px;
      font-weight: 700;
      color: ${props => props.theme.colors.textPrimary};
      margin: 0;
    `;

export const TxTime = styled.span`
      font-size: 13px;
      color: ${props => props.theme.colors.textSecondary};
    `;

export const TxValue = styled.div<{ isPositive?: boolean }>`
   font-size: 17px;
   font-weight: 800;
   color: ${props => (props.isPositive ? props.theme.colors.success : props.theme.colors.danger)};
   text-align: right;
    `;