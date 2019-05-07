/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className={'button ' + props.extraClassName} href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('quickstart.html')}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const numberOfExchanges = siteConfig.numberOfExchanges;
    const numberOfMarkets = siteConfig.numberOfMarkets;


    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
        className={props.className}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: `Integrate with CCXT-REST, and you integrate with ${numberOfExchanges} exchanges!`,
            image: `${baseUrl}img/restful-api.png`,
            imageAlign: 'top',
            title: 'Unified RESTFUL API',
          },
          {
            content: 'Binance, Coinspot, Gemini, Kraken, Poloniex and more!',
            image: `${baseUrl}img/undraw_financial_data_es63.svg`,
            imageAlign: 'top',
            title: `${numberOfExchanges} Exchanges, ${numberOfMarkets} Markets`,
          },
          {
            content: 'Community Driven, Commercially Supported',
            image: `${baseUrl}img/open-source.png`,
            imageAlign: 'top',
            title: '100% Open Source',
          },
        ]}
      </Block>
    );

    const dockerized = {
      content: 
        'Just run `docker run -p 3000:3000 franzsee/ccxt-rest` to get it up ' + 
        'and running and accessible from `localhost:3000/`',
      image: `${baseUrl}img/docker-run.gif`,
      imageAlign: 'right',
      title: 'Dockerized',
    }

    const Dockerized = () => (
      <Block background="light" id="dockerized" className={'tabletAndUp'}>
        {[
          dockerized
        ]}
      </Block>
    );

    const DockerizedMobile = () => (
      <Block background="light" id="dockerizedMobile" className={'mobileFriendly'}>
        {[
          Object.assign(dockerized, {imageAlign:'bottom'})
        ]}
      </Block>
    );

    const unifiedRestfulApisBaseParams = {
        content:
          `Use the same API for the ${numberOfExchanges} exchanges - same API, same parameters, same output formats! ` +
          'And notice the `info` field? - yep, that\'s the raw output response from the exchange itself! ' + 
          'So you get a common response output across the different exchanges, and you get the raw ' +
          'exchange-specific output from each exchange as well!',
        image: `${baseUrl}img/public-api.gif`,
        imageAlign: 'left',
        title: 'Unified RESTFUL APIs',
      }
    

    const UnifiedRestfulApis = () => (
      <Block id="unifiedRestfulApis" className={'tabletAndUp'}>
        {[
          unifiedRestfulApisBaseParams
        ]}
      </Block>
    );

    const UnifiedRestfulApisMobile = () => (
      <Block id="unifiedRestfulApisMobile" className={'mobileFriendly'}>
        {[
          Object.assign(unifiedRestfulApisBaseParams, {imageAlign:'bottom'})
        ]}
      </Block>
    );

    const exchangeSpecificParameters = {
      content:
        'Need to pass in exchange-specific parameters that are not in the unified API? No Problem! ' + 
        'Pass them anyway and `CCXT-REST` will forward it to the exchange!',
      image: `${baseUrl}img/exchange-specific-parameters.gif`,
      imageAlign: 'right',
      title: 'Exchange Specific Parameters',
    }

    const ExchangeSpecificParameters = () => (
      <Block id="exchangeSpecificParameters" className={'tabletAndUp'}>
        {[
          exchangeSpecificParameters
        ]}
      </Block>
    );

    const ExchangeSpecificParametersMobile = () => (
      <Block id="exchangeSpecificParametersMobile" className={'mobileFriendly'}>
        {[
          Object.assign(exchangeSpecificParameters, {imageAlign:'bottom'})
        ]}
      </Block>
    );

    const placeOrders = {
      content:
        'Use `CCXT-REST` to access private APIs like placing and viewing your orders',
      image: `${baseUrl}img/place-order-sequence.gif`,
      imageAlign: 'left',
      title: 'Place Orders',
    }

    const PlaceOrders = () => (
      <Block id="placeOrders" className={'tabletAndUp'}>
        {[
          placeOrders
        ]}
      </Block>
    );

    const PlaceOrdersMobile = () => (
      <Block id="placeOrdersMobile" className={'mobileFriendly'}>
        {[
          Object.assign(placeOrders, {imageAlign:'bottom'})
        ]}
      </Block>
    );

    const WhyCcxtRest = () => (
      <Block background="dark" id="whyCcxtRest">
        {[
          {
            content:
              'Integrating with multiple exchanges is really difficult. Just getting the high value of a ticker is very different for every exchange:\n ' + 
              '| URL | Response |\n' +
              '| --- | --- |\n' +
              '| `https://api.binance.com/api/v1/ticker/24hr?symbol=ETHBTC` | `{"highPrice":"0.02961600"}` |\n' +
              '| `https://api.kraken.com/0/public/Ticker?pair=ETHXBT` | `{"result":{"XETHXXBT":{"h":["0.02961600"]}}` |\n' +
              '| `https://poloniex.com/public?command=returnTicker` |`{"BTC_ETH":{"highestBid":"0.02961600"}}` |\n' + 
              '\n' + 
              ' * `https://api.binance.com` `/api/v1/ticker/24hr?symbol=ETHBTC` \n' +
              '    * `{"highPrice":"0.02961600"}` \n' +
              ' * `https://api.kraken.com` `/0/public/Ticker?pair=ETHXBT` \n' +
              '    * `{"result":{"XETHXXBT":{"h":["0.02961600"]}}` \n' +
              ' * `https://poloniex.com` `/public?command=returnTicker` \n' +
              '    * `{"BTC_ETH":{"highestBid":"0.02961600"}}` \n' +
              '\n' + 
              '<br/>\n' + 
              '`CCXT-REST` greatly simplifies this by providing a common API with a common response schema:\n' + 
              '| URL | Response |\n' +
              '| --- | --- |\n' +
              '| `https://<your-ccxt-rest>/exchange/binance/ticker?symbol=ETH/BTC` | `{"high":0.02961600}` |\n' +
              '| `https://<your-ccxt-rest>/exchange/kraken/ticker?symbol=ETH/BTC` | `{"high":0.02961600}` |\n' +
              '| `https://<your-ccxt-rest>/exchange/poloniex/ticker?symbol=ETH/BTC` | `{"high":0.02961600}` |\n' +
              '\n' + 
              ' * `https://<your-ccxt-rest>` `/exchange/binance/ticker?symbol=ETH/BTC` \n' +
              '    * `{"high":0.02961600}` \n' +
              ' * `https://<your-ccxt-rest>` `/exchange/kraken/ticker?symbol=ETH/BTC` \n' +
              '    * `{"high":0.02961600}` \n' +
              ' * `https://<your-ccxt-rest>` `/exchange/poloniex/ticker?symbol=ETH/BTC` \n' +
              '    * `{"high":0.02961600}` \n' +
              '',
            //image: `${baseUrl}img/ccxt-rest-full.png`,
            imageAlign: 'right',
            title: 'Why CCXT-REST?',
          },
        ]}
      </Block>
    );

    const FinalCta = () => (
      <div id="finalCta">
        <h2 className="header">Start Integration with Exchanges Now!</h2>
        <Button extraClassName="cta" href={docUrl('quickstart.html')} >Get Started</Button>
        <img src={baseUrl + 'img/swagger.gif'} alt="CCXT-REST" />
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Dockerized />
          <DockerizedMobile />
          <UnifiedRestfulApis />
          <UnifiedRestfulApisMobile />
          <ExchangeSpecificParameters />
          <ExchangeSpecificParametersMobile />
          <PlaceOrders />
          <WhyCcxtRest />
          <FinalCta />
        </div>
      </div>
    );
  }
}

module.exports = Index;
