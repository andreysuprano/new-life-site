import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return(
      <Html lang="pt-BR">
        <Head>
          <title>New Life Odontologia</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T4WBB4K');`,
            }}
          />

        <meta property="author" content="Suprano Serviços Digitais"></meta>
        <meta property="og:title" content="Dentista Curitiba"></meta>
        <meta property="og:title" content="Dentista"></meta>
        <meta property="og:title" content="Clínica Odontológica"></meta>
        <meta property="og:title" content="New Life Odontologia"></meta>
        <meta property="og:description" content="Realizamos todos os procedimentos, para lhe dar conforto e agilidade ao seu tratamento!"></meta>
        <meta property="og:description" content="Já pensou em fazer todo o seu tratamento odontológico em um único lugar? E ainda ter seu tratamento realizado por especialistas? Fazemos todos os procedimentos odontológicos com o máximo de qualidade e agilidade, realizado pelos melhores profissionais com os melhores materiais e produtos odontológicos!"></meta>
        <meta property="og:description" content="Já pensou em fazer todo o seu tratamento odontológico em um único lugar? E ainda ter seu tratamento realizado por especialistas? Fazemos todos os procedimentos odontológicos com o máximo de qualidade e agilidade, realizado pelos melhores profissionais com os melhores materiais e produtos odontológicos!"></meta>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}