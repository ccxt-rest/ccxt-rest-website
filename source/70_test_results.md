
# Test Results

[![Build Status](https://travis-ci.org/franz-see/ccxt-rest.svg)](https://travis-ci.org/franz-see/ccxt-rest)

`ccxt-rest` aims to run integration tests against all exchanges we support. The integration tests coverage are the following:

 * Retrieval of Public Data - market, ticker, order book, public trades 
 * Retrieval of Private Data - balances, user orders, user trades
 * Order Placements, Retrieval and Cancellation 

Below are the actual test results of our integration tests against actual exchanges and against edge cases (_i.e. trying to retrieve data from an unuspported exchange_).

List of exchanges in this integration test:
 
  * ![Binance](images/exchanges/binance.jpg)
  * ![Bitso](images/exchanges/bitso.jpg)


<iframe src="https://franz-see.github.io/ccxt-rest/test-results/" style="width:49%;height:1000px;margin-bottom:2em"></iframe>

[![Feature Request](https://img.shields.io/badge/Create%20New%20Issue-Feature%20Request-green.svg)](https://github.com/franz-see/ccxt-rest/issues/new?template=integration_test_request.md)

[![Integration Test For a Particular Exchange](https://img.shields.io/badge/Create%20New%20Issue-Integration%20Test%20Request%20For%20a%20Particular%20Exchange-blue.svg)](https://github.com/franz-see/ccxt-rest/issues/new?template=integration_test_request.md)

[![Bug Report](https://img.shields.io/badge/Create%20New%20Issue-Bug%20Report-red.svg)](https://github.com/franz-see/ccxt-rest/issues/new?template=integration_test_request.md)