import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" type="text/css" href="/static/css/reset.css"/>
                </Head>
                <body className="custom_class">
                    {this.props.customValue}
                    <Main />
                    <NextScript />


                    <script dangerouslySetInnerHTML={{
                        __html: `
                        //we can set js over heer.
                    `}} />
                </body>
            </html>
        )
    }
}