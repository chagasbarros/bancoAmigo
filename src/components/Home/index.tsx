import React, { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
    const [showBalance, setShowBalance] = useState(true);
    const navigate = useNavigate();

    return (
        <S.HomeContainer>
            <S.TopBar>
                <div>🏦 Banco Amigo</div>
                <div style={{
                    backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', padding: '2px'
                }}>👤</div>
            </S.TopBar>

            <S.Content>
                <S.GreetingSection>
                    <p style={{ color: '#5a7a99', fontWeight: 600, margin: 0 }}>Boa tarde,</p>
                    <p style={{ color: '#0A2643', fontWeight: 800, margin: 0, fontSize: '22px' }}>Dona Maria 👋</p>

                </S.GreetingSection>

                <S.BalanceCard>
                    <S.BalanceLabel>💰 Seu saldo disponível</S.BalanceLabel>
                    <S.BalanceValue>
                        {showBalance ? 'R$ 1.847,50' : '••••••'}
                    </S.BalanceValue>
                    <p style={{ fontSize: '12px', color: '#7ab0e0', margin: 0 }}>Conta Corrente</p>

                    <S.EyeButton onClick={() => setShowBalance(!showBalance)}>
                        {showBalance ? '👁️' : '🙈'}
                    </S.EyeButton>
                </S.BalanceCard>

                <S.AlertBar>
                    <span style={{ fontSize: '24px' }}>⚠️</span>
                    <p style={{
                        fontSize: '14px', color: '#7a5a10', margin: 0, fontWeight: 600, lineHeight: 1.4
                    }}>
                        Conta de luz vence em 3 dias (R$ 127,00). Que tal pagar agora?
                    </p>
                </S.AlertBar>

                <h3 style={{ fontSize: '16px', color: '#5a7a99', marginBottom: '4px' }}>O que você quer
                    fazer?</h3>

                <S.ActionGrid>
                    <S.ActionCard onClick={() => navigate('/extrato')}>
                        <S.ActionIcon>📊</S.ActionIcon>
                        <S.ActionLabel>Ver extrato</S.ActionLabel>
                    </S.ActionCard>

                    <S.ActionCard onClick={() => navigate('/pagar-conta')}>
                        <S.ActionIcon>📄</S.ActionIcon>
                        <S.ActionLabel>Pagar conta</S.ActionLabel>
                    </S.ActionCard>

                    <S.ActionCard>
                        <S.ActionIcon>⚡</S.ActionIcon>
                        <S.ActionLabel>Fazer PIX</S.ActionLabel>
                    </S.ActionCard>

                    <S.ActionCard>
                        <S.ActionIcon>🤝</S.ActionIcon>
                        <S.ActionLabel>Pedir ajuda</S.ActionLabel>
                    </S.ActionCard>
                </S.ActionGrid>
            </S.Content>
        </S.HomeContainer>
    );
};