import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export const Extrato: React.FC = () => {
    const navigate = useNavigate();
    return (
        <S.ExtratoContainer>
            <S.Header>
                <S.BackButton onClick={() => navigate('/home')}>←</S.BackButton>
                <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>Meu extrato</h2>
            </S.Header>

            <S.SummaryCard>
                <p style={{ fontSize: '14px', color: '#a8c8f0', margin: '0 0 4px 0' }}>Saldo atual</p>
                <div style={{ fontSize: '32px', fontWeight: 800 }}>R$ 1.847,50</div>
            </S.SummaryCard>

            <S.TransactionList>
                <div>
                    <S.DateHeader>Hoje, 31 de Março</S.DateHeader>
                    <S.TransactionCard>
                        <S.TransactionItem>
                            <S.TxIcon>💵</S.TxIcon>
                            <S.TxInfo>
                                <S.TxDescription>Aposentadoria INSS</S.TxDescription>
                                <S.TxTime>Recebido às 08:00</S.TxTime>
                            </S.TxInfo>
                            <S.TxValue isPositive>+ R$ 1.412,00</S.TxValue>
                        </S.TransactionItem>
                    </S.TransactionCard>
                </div>

                <div>
                    <S.DateHeader>Ontem, 30 de Março</S.DateHeader>
                    <S.TransactionCard>
                        <S.TransactionItem>
                            <S.TxIcon>🛒</S.TxIcon>
                            <S.TxInfo>
                                <S.TxDescription>Supermercado Ideal</S.TxDescription>
                                <S.TxTime>Gasto às 15:32</S.TxTime>
                            </S.TxInfo>
                            <S.TxValue>- R$ 98,40</S.TxValue>
                        </S.TransactionItem>

                        <S.TransactionItem>
                            <S.TxIcon>💊</S.TxIcon>
                            <S.TxInfo>
                                <S.TxDescription>Farmácia Pague Menos</S.TxDescription>
                                <S.TxTime>Gasto às 10:15</S.TxTime>
                            </S.TxInfo>
                            <S.TxValue>- R$ 52,30</S.TxValue>
                        </S.TransactionItem>
                    </S.TransactionCard>
                </div>

                <div>
                    <S.DateHeader>27 de Março</S.DateHeader>
                    <S.TransactionCard>
                        <S.TransactionItem>
                            <S.TxIcon>💡</S.TxIcon>
                            <S.TxInfo>
                                <S.TxDescription>Enel Energia</S.TxDescription>
                                <S.TxTime>Pago às 09:00</S.TxTime>
                            </S.TxInfo>
                            <S.TxValue>- R$ 134,60</S.TxValue>
                        </S.TransactionItem>
                    </S.TransactionCard>
                </div>
            </S.TransactionList>
        </S.ExtratoContainer>
    );
}