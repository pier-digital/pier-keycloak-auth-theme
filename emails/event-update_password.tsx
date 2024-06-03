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
      <Preview> Sua senha do Portal do Parceiro Pier foi alterada!</Preview>
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
              Senha alterada!
            </Heading>
            <Heading as="h4" className="text-lg">
              Olá, Parceiro Pier
            </Heading>
            <Text className="mb-8 text-base">
              A sua senha do <strong>Portal do Parceiro Pier foi alterada com sucesso</strong> no
              dia 28/05/24 às 10h50.
            </Text>
            <Section className="text-center mb-10">
              <Button
                href="https://example.com"
                style={{
                  color: colors.white,
                  padding: '10px 20px',
                  backgroundColor: colors.primary,
                  fontWeight: 'bold',
                  borderRadius: '4px',
                }}
              >
                Acessar Portal do Parceiro
              </Button>
            </Section>

            <Text className="mb-8 text-base">
              Se você não reconhece essa alteração e ela não foi feita por você, entre em contato
              com a gente.
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
