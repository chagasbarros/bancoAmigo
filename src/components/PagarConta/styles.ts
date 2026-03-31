import styled from 'styled-components';

export const PagarContainer = styled.div`
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

export const StepperContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 16px 10px;
      gap: 8px;
    `;

export const StepDots = styled.div`
      display: flex;
      gap: 8px;
    `;

export const Dot = styled.div<{ active?: boolean; done?: boolean }>`
      width: ${props => (props.active ? '24px' : '10px')};
      height: 10px;
      border-radius: 5px;
      background-color: ${props => (props.active || props.done ? props.theme.colors.primary : '#c8d8e8')};
      transition: all 0.3s;
    `;

export const StepText = styled.p`
      font-size: 14px;
      font-weight: 700;
      color: ${props => props.theme.colors.textSecondary};
    `;

export const Content = styled.main`
      padding: 10px 16px 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;

export const InputCard = styled.div`
      background: #fff;
      border-radius: 20px;
      padding: 20px;
      border: 1.5px solid ${props => props.theme.colors.border};
    `;

export const CameraButton = styled.button`
      background: #f4f8fd;
      border: 2px dashed ${props => props.theme.colors.border};
      border-radius: 20px;
      padding: 24px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      width: 100%;
      text-align: left;
   
      &:active {
        background-color: #e8f0fb;
      }
    `;

export const LargeTextArea = styled.textarea`
      width: 100%;
      border: 2px solid ${props => props.theme.colors.border};
      border-radius: 14px;
      padding: 16px;
      font-size: 18px;
      font-family: 'Nunito', sans-serif;
      color: ${props => props.theme.colors.textPrimary};
      resize: none;
      margin-top: 10px;
   
      &:focus {
        border-color: ${props => props.theme.colors.primary};
        outline: none;
      }
    `;

export const SecurityAlert = styled.div`
      background-color: #fff8e8;
      border: 1.5px solid ${props => props.theme.colors.warning};
      border-radius: 16px;
      padding: 14px;
      display: flex;
      gap: 12px;
      align-items: center;
    `;

export const SuccessContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
      animation: fadeIn 0.5s ease-in;
   
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;

export const SuccessIcon = styled.div`
      font-size: 80px;
      margin-bottom: 20px;
    `;

export const SuccessTitle = styled.h2`
      font-size: 26px;
      font-weight: 800;
      color: ${props => props.theme.colors.success};
      margin-bottom: 12px;
    `;

export const SuccessBox = styled.div`
      background-color: #e8f5ee; // Verde bem clarinho
      border-radius: 20px;
      padding: 20px;
      width: 100%;
      margin: 24px 0;
      border: 1px solid #c0e0d0;
    `;

export const SuccessRow = styled.div`
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
   
      &:last-child { margin-bottom: 0; }
    `;
export const ConfirmCard = styled.div`
      background: #fff;
      border-radius: 22px;
      padding: 24px 20px;
      border: 1.5px solid ${props => props.theme.colors.border};
      display: flex;
      flex-direction: column;
      gap: 16px;
    `;

export const ConfirmRow = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid #eef2f7;
   
      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    `;

export const ConfirmLabel = styled.span`
      font-size: 15px;
      color: ${props => props.theme.colors.textSecondary};
      font-weight: 600;
    `;

export const ConfirmValue = styled.span`
      font-size: 16px;
      color: ${props => props.theme.colors.textPrimary};
      font-weight: 700;
      text-align: right;
    `;

export const BigValue = styled.div`
      font-size: 32px;
      font-weight: 800;
      color: ${props => props.theme.colors.danger}; // Vermelho para saída de dinheiro
      text-align: center;
      margin: 10px 0;
    `;

export const HelpBox = styled.div`
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
      background-color: #eef4fd;
      border-radius: 16px;
      border: 1px solid ${props => props.theme.colors.primary};
    `;