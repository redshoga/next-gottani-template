import App from 'next/app'
import "../assets/scss/global.scss";

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}
