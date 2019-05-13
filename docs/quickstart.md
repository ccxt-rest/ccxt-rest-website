---
id: quickstart
title: Quick Start
---

[![Build Status](https://travis-ci.org/ccxt-rest/ccxt-rest.svg)](https://travis-ci.org/ccxt-rest/ccxt-rest)
[![npm](https://img.shields.io/npm/v/ccxt-rest.svg)](https://npmjs.com/package/ccxt-rest)
[![NPM Downloads](https://img.shields.io/npm/dm/ccxt-rest.svg)](https://www.npmjs.com/package/ccxt-rest)
[![Docker Pulls](https://img.shields.io/docker/pulls/ccxtrest/ccxt-rest.svg)](https://img.shields.io/docker/pulls/ccxtrest/ccxt-rest.svgt)
[![Supported Exchanges](https://img.shields.io/badge/exchanges-133-blue.svg)](https://github.com/ccxt/ccxt/wiki/Exchange-Markets)

CCXT-REST provides a unified REST API to allow clients access to retrieve data (ticker, order book, trades, your order, your trades, balances, etc) and to create and cancel orders from over 100 cryptocurrency exhange sites. And it is built on top of the popular open source project [CCXT](https://github.com/ccxt/ccxt/)

## Installation

You can install ccx-rest via docker by running the following command from your terminal / command prompt 

```
docker run -p 3000:3000 ccxtrest/ccxt-rest
```

Once executed, you should be able to access [http://localhost:3000/](http://localhost:3000/), which would show you this documentation page.

![CCXT-REST Docu Page](/img/ccxt-rest-docs.png)

And best of all, you can then start invoking API calls to your server to start getting data and trading!

![CCXT-REST Overview](/img/ccxt-rest-overview.png)
