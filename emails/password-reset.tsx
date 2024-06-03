import React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { colors } from '@pierdigital/shared-tokens';

const emailTest = () => {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Altere a sua senha do Portal do parceiro Pier</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container align="center">
            <Section className="mt-[32px] mb-[32px]">
              <Img
                src="http://cdn.mcauto-images-production.sendgrid.net/c7deac9c792a4d85/4de111ab-d4ac-423a-9652-6c0cfc66a65d/120x28.png"
                width="60"
                alt="Pier"
                className="my-0 mx-auto"
              />
            </Section>

            <Heading
              as="h2"
              className="text-center"
              style={{ backgroundColor: colors.secondary, color: colors.white, padding: '50px 0' }}
            >
              Alteração de senha!
            </Heading>
            <Heading as="h4" className="text-lg">
              Olá, Parceiro Pier
            </Heading>
            <Text className="mb-8 text-base">
              Foi solicitado uma <strong>alteração de senha</strong> para a sua conta no Portal do
              Parceiro Pier. Para seguir com essa alteração, basta clicar no botão abaixo:
            </Text>
            <Section className="text-center mb-10">
              <Button
                href=""
                style={{
                  color: colors.white,
                  padding: '10px 20px',
                  backgroundColor: colors.primary,
                  fontWeight: 'bold',
                  borderRadius: '4px',
                }}
              >
                Redefinir minha senha
              </Button>
              <Text className="mb-0 text-sm">Atenção: Esse link expira em 5 minutos. Ok?</Text>
            </Section>

            <Text className="mb-8 text-base">
              Se não foi você quem criou esta conta, basta ignorar esta mensagem. Nesse caso,
              nenhuma alteração de senha será feita, combinado?
            </Text>
            <Text className="mb-8 text-base">
              Abraços, <br />
              Equipe Pier
            </Text>

            <Hr />

            <Section className="mt-[32px] mb-[32px]">
              <Img
                src="http://cdn.mcauto-images-production.sendgrid.net/c7deac9c792a4d85/4de111ab-d4ac-423a-9652-6c0cfc66a65d/120x28.png"
                width="60"
                alt="Pier"
                className="my-0 mx-auto"
              />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default emailTest;
