import App from 'next/app'
import React from 'react';
import "../assets/scss/global.scss";

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    )
  }
}
