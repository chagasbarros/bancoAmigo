import React, { useState } from 'react';
import * as S from './styles';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

export const PagarConta: React.FC = () => {
    // Estado para controlar qual passo estamos mostrando (1, 2 ou 3)
    const [step, setStep] = useState(1);
    const [codigo, setCodigo] = useState('');
    const navigate = useNavigate();

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate('/home');
        }
    };

    const handleFinish = () => {
        navigate('/home');
    };
    // --- RENDEREIZAÇÃO DO PASSO 1 ---
    const renderPasso1 = () => (
        <>
            <S.StepperContainer>
                <S.StepDots>
                    <S.Dot active />
                    <S.Dot />
                    <S.Dot />
                </S.StepDots>
                <S.StepText>Passo 1 de 3 — Identificar conta</S.StepText>
            </S.StepperContainer>

            <S.Content>
                <S.CameraButton onClick={() => setStep(2)}> {/* Simula leitura e vai pro passo 2 */}
                    <span style={{ fontSize: '40px' }}>📷</span>
                    <div>
                        <p style={{ fontSize: '18px', fontWeight: 800, color: '#1a3a5c', margin: 0 }}>Usar a
                            câmera</p>
                        <p style={{ fontSize: '14px', color: '#7a9ab8', margin: 0 }}>Aponte para o código de
                            barras</p>
                    </div>
                </S.CameraButton>

                <div style={{ textAlign: 'center', color: '#9aacbc', fontWeight: 700 }}>OU</div>

                <S.InputCard>
                    <label style={{ fontSize: '16px', fontWeight: 700, color: '#1a3a5c' }}>
                        Digite os números do boleto:
                    </label>
                    <S.LargeTextArea
                        rows={3}
                        placeholder="Ex: 00190.00009 02332..."
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                </S.InputCard>

                <Button onClick={() => setStep(2)}>
                    Continuar para o Passo 2 ➜
                </Button>
            </S.Content>
        </>
    );

    // --- RENDEREIZAÇÃO DO PASSO 2 ---
    const renderPasso2 = () => (
        <>
            <S.StepperContainer>
                <S.StepDots>
                    <S.Dot done />
                    <S.Dot active />
                    <S.Dot />
                </S.StepDots>
                <S.StepText>Passo 2 de 3 — Conferir dados</S.StepText>
            </S.StepperContainer>

            <S.Content>
                <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '48px' }}>📑</span>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1a3a5c', margin: '10px 0 4px' }}>
                        Está tudo correto?
                    </h3>
                </div>

                <S.ConfirmCard>
                    <S.ConfirmRow>
                        <S.ConfirmLabel>Quem recebe:</S.ConfirmLabel>
                        <S.ConfirmValue>Enel Energia CE</S.ConfirmValue>
                    </S.ConfirmRow>
                    <S.BigValue>R$ 127,00</S.BigValue>
                    <S.ConfirmRow>
                        <S.ConfirmLabel>Seu saldo após pagar:</S.ConfirmLabel>
                        <S.ConfirmValue style={{ color: '#1a7a40' }}>R$ 1.720,50</S.ConfirmValue>
                    </S.ConfirmRow>
                </S.ConfirmCard>

                <Button
                    style={{ backgroundColor: '#1a7a40' }}
                    onClick={() => setStep(3)} // Aqui iremos pro Passo 3 depois
                >
                    ✅ Pagar agora — R$ 127,00
                </Button>

                <button
                    onClick={handleBack} // Volta para o passo anterior
                    style={{
                        background: 'none', border: 'none', color: '#b03030', fontWeight: 800, padding:
                            '10px'
                    }}
                >
                    ✖ Cancelar e voltar
                </button>
            </S.Content>
        </>
    );
    const renderPasso3 = () => (
        <S.SuccessContainer>
            <S.SuccessIcon>🎉</S.SuccessIcon>
            <S.SuccessTitle>Conta paga com sucesso!</S.SuccessTitle>
            <p style={{ fontSize: '16px', color: '#5a7a99', lineHeight: 1.5 }}>
                Ótimo trabalho, Dona Maria! Seu pagamento para a <b>Enel Energia</b> foi realizado com segurança.
            </p>

            <S.SuccessBox>
                <S.SuccessRow>
                    <span style={{ color: '#3a8050', fontWeight: 600 }}>Valor pago:</span>
                    <span style={{ fontWeight: 800, color: '#155a30' }}>R$ 127,00</span>
                </S.SuccessRow>
                <S.SuccessRow>
                    <span style={{ color: '#3a8050', fontWeight: 600 }}>Data:</span>
                    <span style={{ fontWeight: 800, color: '#155a30' }}>31/03/2026</span>
                </S.SuccessRow>
                <S.SuccessRow>
                    <span style={{ color: '#3a8050', fontWeight: 600 }}>Saldo atual:</span>
                    <span style={{ fontWeight: 800, color: '#155a30' }}>R$ 1.720,50</span>
                </S.SuccessRow>
            </S.SuccessBox>

            <Button onClick={handleFinish}>
                🏠 Voltar ao Início
            </Button>

            <button style={{
                background: 'none', border: 'none', color: '#1a5fa8',
                fontWeight: 700, marginTop: '20px', fontSize: '16px'
            }}>
                📤 Enviar comprovante por WhatsApp
            </button>
        </S.SuccessContainer>
    )
    return (
        <S.PagarContainer>
            <S.Header>
                <button
                    onClick={handleBack}
                    style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px' }}
                >
                    ←
                </button>
                <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>
                    {step === 1 ? 'Pagar uma conta' : 'Conferir dados'}
                </h2>
            </S.Header>

            {/* Lógica de Troca de Telas */}
            {step === 1 && renderPasso1()}
            {step === 2 && renderPasso2()}
            {step === 3 && renderPasso3()}

        </S.PagarContainer>
    );
};