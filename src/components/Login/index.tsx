
import React, { useState } from 'react';
import * as S from './styles'; // Importando os estilos acima
import { Button } from '../Button'; // O componente que criamos antes
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (cpf === '123.456789-00' && password === '1234') {
            navigate('/home');
        } else {
            alert('CPF ou senha incorretos');
        }
    };

    // Função simples para colocar pontos e traço no CPF enquanto ela digita
    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove o que não é número
        if (value.length <= 11) {
            value = value.replace(/(\={3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            setCpf(value);
        }
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <S.LoginContainer>
            <S.LogoArea>🏦 Banco Amigo</S.LogoArea>

            <S.Greeting>Para entrar na sua conta, digite seu CPF abaixo:</S.Greeting>

            <S.InputGroup>
                <S.Label htmlFor="cpf"></S.Label>
                <S.LargeInput
                    id="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleCpfChange}
                    inputMode="numeric" // Abre o teclado numérico no celular
                />
            </S.InputGroup>
            <S.InputGroup>
                <S.Label htmlFor="password">Digite sua senha abaixo</S.Label>
                <S.LargeInput
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={handlePasswordChange}
                    inputMode="numeric" // Abre o teclado numérico no celular
                />
            </S.InputGroup>

            <Button onClick={handleLogin}>
                Entrar na minha conta ➜
            </Button>

            <Button variant="secondary" style={{ marginTop: '12px' }}>
                Esqueci minha senha
            </Button>

            <S.SecurityHint>
                <span style={{ fontSize: '24px' }}>🛡️</span>
                <p style={{ fontSize: '14px', color: '#7a5a10', margin: 0, fontWeight: 600 }}>
                    Fique tranquila: este é um ambiente seguro e seus dados estão protegidos.
                </p>
            </S.SecurityHint>

            <button
                style={{
                    background: 'none', border: 'none', color: '#1a5fa8',
                    fontWeight: 700, fontSize: '16px', cursor: 'pointer',
                    textDecoration: 'underline'
                }}
                onClick={() => alert('Ligando para o suporte...')}
            >
                Precisa de ajuda? Clique aqui
            </button>
        </S.LoginContainer>
    );
};