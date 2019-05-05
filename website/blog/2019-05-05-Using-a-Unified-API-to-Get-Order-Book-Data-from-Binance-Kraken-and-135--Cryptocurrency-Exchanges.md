---
title: Using a Unified API to Get Order Book Data from Binance, Kraken and 135+ Cryptocurrency Exchanges
author: JP Yao
authorURL: https://www.linkedin.com/in/jpyao
authorFBID: 1213715817
---

# Using a Unified API to Get Order Book Data from Binance, Kraken and 135+ Cryptocurrency Exchanges

![](https://cdn-images-1.medium.com/max/1600/1*tMcmxA39RCyOfUJP3NNNuA.png)

*CCXT-REST allows client applications to connect to 135+ cryptocurrency exchanges using a unified REST API which allows for the retrieval of ticker, order, and order book data, as well as the creation and cancellation of orders. The project is built on top of the popular open source project CCXT.*


__In this post, we will be connecting to Binance and Kraken to retrieve order books for Ethereum-Bitcoin pairs.__



## Doing things manually

Both Binance and Kraken do not require API keys for querying supported asset pairs and order book data on their exchanges. Both exchanges, however, will require their own response handling due to the variances in structures returned by their APIs.

### Binance

![](https://cdn-images-1.medium.com/max/1600/1*MpaVdRmLUsjWhRnYpzJ1-Q.png)

To find out what asset pairs are supported on Binance, we can use its public endpoint [exchangeInfo](https://api.binance.com/api/v1/exchangeInfo) to get a complete list of symbols.

    https://api.binance.com/api/v1/exchangeInfo

```
{
	"timezone": "UTC",
	"serverTime": 1556741474070,
	"rateLimits": [],
	"exchangeFilters": [],
	"symbols": [{
		"symbol": "ETHBTC",
		"status": "TRADING",
		"baseAsset": "ETH",
		"baseAssetPrecision": 8,
		"quoteAsset": "BTC",
		"quotePrecision": 8,
		"orderTypes": [
			"LIMIT",
			"LIMIT_MAKER",
			"MARKET",
			"STOP_LOSS_LIMIT",
			"TAKE_PROFIT_LIMIT"
		],
		"icebergAllowed": true,
		"isSpotTradingAllowed": true,
		"isMarginTradingAllowed": true,
		"filters": [{
				"filterType": "PRICE_FILTER",
				"minPrice": "0.00000000",
				"maxPrice": "0.00000000",
				"tickSize": "0.00000100"
			},
			{
				"filterType": "PERCENT_PRICE",
				"multiplierUp": "10",
				"multiplierDown": "0.1",
				"avgPriceMins": 5
			},
			{
				"filterType": "LOT_SIZE",
				"minQty": "0.00100000",
				"maxQty": "100000.00000000",
				"stepSize": "0.00100000"
			},
			{
				"filterType": "MIN_NOTIONAL",
				"minNotional": "0.00100000",
				"applyToMarket": true,
				"avgPriceMins": 5
			},
			{
				"filterType": "ICEBERG_PARTS",
				"limit": 10
			},
			{
				"filterType": "MAX_NUM_ALGO_ORDERS",
				"maxNumAlgoOrders": 5
			}
		]
	}]
}
```


From the response above, we have determined that Binance uses *ETHBTC* as its symbol for Ethereum-Bitcoin trading.

The next step is to [retrieve the order book](https://api.binance.com/api/v1/depth?symbol=ETHBTC&limit=5) for *ETHBTC*. 

    https://api.binance.com/api/v1/depth?symbol=ETHBTC&limit=5

```
{
    "lastUpdateId": 528915796,
    "bids": [
        [
            "0.02969000",
            "1.97400000"
        ],
        [
            "0.02968500",
            "5.96500000"
        ],
        [
            "0.02968200",
            "1.71400000"
        ],
        [
            "0.02968100",
            "0.14700000"
        ],
        [
            "0.02968000",
            "2.00000000"
        ]
    ],
    "asks": [
        [
            "0.02969400",
            "7.93900000"
        ],
        [
            "0.02969600",
            "2.87900000"
        ],
        [
            "0.02970500",
            "16.84300000"
        ],
        [
            "0.02970600",
            "2.00000000"
        ],
        [
            "0.02970700",
            "10.00000000"
        ]
    ]
}
```

Now that we know the bids and the asks for *ETHBTC* on Binance, let’s go check out Kraken.

### Kraken

![](https://cdn-images-1.medium.com/max/1600/1*bJPIoyukfGlWRT3zgyjyug.png)

Kraken provides the publicly available endpoint [AssetPairs](https://api.kraken.com/0/public/AssetPairs) to get a complete list of supported symbols.

    https://api.kraken.com/0/public/AssetPairs
```
{
    "error": [],
    "result": {
        "XETCZUSD": {
            "altname": "ETCUSD",
            "wsname": "ETC/USD",
            "aclass_base": "currency",
            "base": "XETC",
            "aclass_quote": "currency",
            "quote": "ZUSD",
            "lot": "unit",
            "pair_decimals": 3,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        },
        "XETHXXBT": {
            "altname": "ETHXBT",
            "wsname": "ETH/XBT",
            "aclass_base": "currency",
            "base": "XETH",
            "aclass_quote": "currency",
            "quote": "XXBT",
            "lot": "unit",
            "pair_decimals": 5,
            "lot_decimals": 8,
            "lot_multiplier": 1,
            "fee_volume_currency": "ZUSD",
            "margin_call": 80,
            "margin_stop": 40
        }
    }
}
```

From the response above, Kraken uses *ETHXBT* as the symbol for Ethereum-Bitcoin trading. (*XBT* is the symbol for Bitcoin used only by a couple of exchanges. Most exchanges will use *BTC*)

The next step is to [retrieve the order book](https://api.kraken.com/0/public/Depth?pair=ETHXBT&count=5) for *ETHXBT*.

    https://api.kraken.com/0/public/Depth?pair=ETHXBT&count=5

```
{
    "error": [],
    "result": {
        "XETHXXBT": {
            "asks": [
                [
                    "0.029680",
                    "1.073",
                    1556747672
                ],
                [
                    "0.029690",
                    "32.050",
                    1556747668
                ],
                [
                    "0.029700",
                    "250.315",
                    1556747673
                ],
                [
                    "0.029710",
                    "9.736",
                    1556747594
                ],
                [
                    "0.029720",
                    "24.300",
                    1556747594
                ]
            ],
            "bids": [
                [
                    "0.029650",
                    "0.028",
                    1556747668
                ],
                [
                    "0.029640",
                    "269.524",
                    1556747669
                ],
                [
                    "0.029610",
                    "9.636",
                    1556747671
                ],
                [
                    "0.029600",
                    "65.158",
                    1556747669
                ],
                [
                    "0.029590",
                    "154.906",
                    1556747650
                ]
            ]
        }
    }
}
```


## The problem with the standard approach

In the previous section, we were able to retrieve the Ethereum-Bitcoin trading symbol and order books from both Binance and Kraken using 4 different API endpoints.

### Binance
```
GET /api/v1/exchangeInfo
```

```
GET /api/v1/depth
```

### Kraken

```
GET /0/public/AssetPairs
```

```
GET /0/public/Depth
```

We would have designed our applications to handle 4 different API responses — 2 for each exchange.

What if we needed to perform the same tasks on 10 additional exchanges? 

That would mean at least 20 more different API request-response sets developers have to code for and handle.



## One API to connect to all of the major exchanges

CCXT-REST attempts to boost developer productivity by reducing the lines of code needed to manage the connectivity with support for over a hundred cryptocurrency exchanges.

CCXT-REST can be installed using *docker* or with *Node.js package manager*.

### Installation with docker:

    docker run -p 3000:3000 franzsee/ccxt-rest
    
### Installation with npm:

	npm install -g ccxt-rest
    ccxt-rest

To confirm that we have CCXT-REST up and running, try accessing the [link](http://localhost:3000/explorer) below on your browser.

    http://localhost:3000/explorer

![](https://cdn-images-1.medium.com/max/1600/1*c96fSbpw6gNoQSNPNpbM7w.png)

Let's use CCXT-REST to do the following on Binance and Kraken:

1.  Get the available trading pairs and identify the symbol used for
Ethereum-Bitcoin trading using CCXT-REST's *markets* endpoint.

	```GET /exchange/{exchangeName}/markets```

2. Retrieve order books for that symbol using CCXT-REST's *orderBook*   
endpoint.

	```GET /exchange/{exchangeName}/orderBook```


### Binance

	http://localhost:3000/exchange/binance/markets

```
[
  {
    "id": "ETHBTC",
    "symbol": "ETH/BTC",
    "base": "ETH",
    "quote": "BTC",
    "info": {
      "symbol": "ETHBTC",
      "status": "TRADING",
      "baseAsset": "ETH",
      "baseAssetPrecision": 8,
      "quoteAsset": "BTC",
      "quotePrecision": 8,
      "orderTypes": [
        "LIMIT",
        "LIMIT_MAKER",
        "MARKET",
        "STOP_LOSS_LIMIT",
        "TAKE_PROFIT_LIMIT"
      ],
      "icebergAllowed": true,
      "isSpotTradingAllowed": true,
      "isMarginTradingAllowed": true,
      "filters": [
        {
          "filterType": "PRICE_FILTER",
          "minPrice": "0.00000000",
          "maxPrice": "0.00000000",
          "tickSize": "0.00000100"
        },
        {
          "filterType": "PERCENT_PRICE",
          "multiplierUp": "10",
          "multiplierDown": "0.1",
          "avgPriceMins": 5
        },
        {
          "filterType": "LOT_SIZE",
          "minQty": "0.00100000",
          "maxQty": "100000.00000000",
          "stepSize": "0.00100000"
        },
        {
          "filterType": "MIN_NOTIONAL",
          "minNotional": "0.00100000",
          "applyToMarket": true,
          "avgPriceMins": 5
        },
        {
          "filterType": "ICEBERG_PARTS",
          "limit": 10
        },
        {
          "filterType": "MAX_NUM_ALGO_ORDERS",
          "maxNumAlgoOrders": 5
        }
      ]
    },
    "limits": {
      "amount": {
        "min": 0.001,
        "max": 100000
      },
      "price": {
        "min": 0
      },
      "cost": {
        "min": 0.001
      }
    },
    "precision": {
      "amount": 3,
      "price": 6
    }
  },
  {
    "id": "LTCBTC",
    "symbol": "LTC/BTC",
    "base": "LTC",
    "quote": "BTC",
    "info": {
      "symbol": "LTCBTC",
      "status": "TRADING",
      "baseAsset": "LTC",
      "baseAssetPrecision": 8,
      "quoteAsset": "BTC",
      "quotePrecision": 8,
      "orderTypes": [
        "LIMIT",
        "LIMIT_MAKER",
        "MARKET",
        "STOP_LOSS_LIMIT",
        "TAKE_PROFIT_LIMIT"
      ],
      "icebergAllowed": true,
      "isSpotTradingAllowed": true,
      "isMarginTradingAllowed": false,
      "filters": [
        {
          "filterType": "PRICE_FILTER",
          "minPrice": "0.00000000",
          "maxPrice": "0.00000000",
          "tickSize": "0.00000100"
        },
        {
          "filterType": "PERCENT_PRICE",
          "multiplierUp": "10",
          "multiplierDown": "0.1",
          "avgPriceMins": 5
        },
        {
          "filterType": "LOT_SIZE",
          "minQty": "0.01000000",
          "maxQty": "100000.00000000",
          "stepSize": "0.01000000"
        },
        {
          "filterType": "MIN_NOTIONAL",
          "minNotional": "0.00100000",
          "applyToMarket": true,
          "avgPriceMins": 5
        },
        {
          "filterType": "ICEBERG_PARTS",
          "limit": 10
        },
        {
          "filterType": "MAX_NUM_ALGO_ORDERS",
          "maxNumAlgoOrders": 5
        }
      ]
    },
    "limits": {
      "amount": {
        "min": 0.01,
        "max": 100000
      },
      "price": {
        "min": 0
      },
      "cost": {
        "min": 0.001
      }
    },
    "precision": {
      "amount": 2,
      "price": 6
    }
  }
]
```
Through CCXT-REST’s *markets* endpoint, we find out that Binance supports **ETH/BTC**. 

The next step is retrieving the order book for **ETH/BTC** using the *orderBook* endpoint.

	http://localhost:3000/exchange/binance/orderBook?symbol=ETH%2FBTC&limit=5

```
{
  "bids": [
    {
      "price": 0.028657,
      "amount": 17.038
    },
    {
      "price": 0.028653,
      "amount": 0.134
    },
    {
      "price": 0.028652,
      "amount": 3.873
    },
    {
      "price": 0.028651,
      "amount": 9.157
    },
    {
      "price": 0.02865,
      "amount": 20.295
    }
  ],
  "asks": [
    {
      "price": 0.028668,
      "amount": 0.257
    },
    {
      "price": 0.028669,
      "amount": 2.995
    },
    {
      "price": 0.02867,
      "amount": 1.48
    },
    {
      "price": 0.028673,
      "amount": 0.554
    },
    {
      "price": 0.028674,
      "amount": 6
    }
  ]
}
```

Now that we have the **ETH/BTC** order book from Binance, let’s see how to repeat the same steps on Kraken.

### Kraken

	http://localhost:3000/exchange/kraken/markets

```
[
  {
    "id": "ADACAD",
    "symbol": "ADA/CAD",
    "base": "ADA",
    "quote": "CAD",
    "info": {
      "altname": "ADACAD",
      "wsname": "ADA/CAD",
      "aclass_base": "currency",
      "base": "ADA",
      "aclass_quote": "currency",
      "quote": "ZCAD",
      "lot": "unit",
      "pair_decimals": 6,
      "lot_decimals": 8,
      "lot_multiplier": 1,
      "leverage_buy": [],
      "leverage_sell": [],
      "fees": [
        [
          0,
          0.26
        ],
        [
          50000,
          0.24
        ],
        [
          100000,
          0.22
        ],
        [
          250000,
          0.2
        ],
        [
          500000,
          0.18
        ],
        [
          1000000,
          0.16
        ],
        [
          2500000,
          0.14
        ],
        [
          5000000,
          0.12
        ],
        [
          10000000,
          0.1
        ]
      ],
      "fees_maker": [
        [
          0,
          0.16
        ],
        [
          50000,
          0.14
        ],
        [
          100000,
          0.12
        ],
        [
          250000,
          0.1
        ],
        [
          500000,
          0.08
        ],
        [
          1000000,
          0.06
        ],
        [
          2500000,
          0.04
        ],
        [
          5000000,
          0.02
        ],
        [
          10000000,
          0
        ]
      ],
      "fee_volume_currency": "ZUSD",
      "margin_call": 80,
      "margin_stop": 40
    },
    "limits": {
      "amount": {
        "min": 1,
        "max": 100000000
      },
      "price": {
        "min": 0.000001
      },
      "cost": {
        "min": 0
      }
    },
    "precision": {
      "amount": 8,
      "price": 6
    }
  },
  {
    "id": "XETHXXBT",
    "symbol": "ETH/BTC",
    "base": "ETH",
    "quote": "BTC",
    "info": {
      "altname": "ETHXBT",
      "wsname": "ETH/XBT",
      "aclass_base": "currency",
      "base": "XETH",
      "aclass_quote": "currency",
      "quote": "XXBT",
      "lot": "unit",
      "pair_decimals": 5,
      "lot_decimals": 8,
      "lot_multiplier": 1,
      "leverage_buy": [
        2,
        3,
        4,
        5
      ],
      "leverage_sell": [
        2,
        3,
        4,
        5
      ],
      "fees": [
        [
          0,
          0.26
        ],
        [
          50000,
          0.24
        ],
        [
          100000,
          0.22
        ],
        [
          250000,
          0.2
        ],
        [
          500000,
          0.18
        ],
        [
          1000000,
          0.16
        ],
        [
          2500000,
          0.14
        ],
        [
          5000000,
          0.12
        ],
        [
          10000000,
          0.1
        ]
      ],
      "fees_maker": [
        [
          0,
          0.16
        ],
        [
          50000,
          0.14
        ],
        [
          100000,
          0.12
        ],
        [
          250000,
          0.1
        ],
        [
          500000,
          0.08
        ],
        [
          1000000,
          0.06
        ],
        [
          2500000,
          0.04
        ],
        [
          5000000,
          0.02
        ],
        [
          10000000,
          0
        ]
      ],
      "fee_volume_currency": "ZUSD",
      "margin_call": 80,
      "margin_stop": 40
    },
    "limits": {
      "amount": {
        "min": 0.02,
        "max": 100000000
      },
      "price": {
        "min": 0.00001
      },
      "cost": {
        "min": 0
      }
    },
    "precision": {
      "amount": 8,
      "price": 5
    }
  }
]
```

	http://localhost:3000/exchange/kraken/orderBook?symbol=ETH%2FBTC&limit=5
	
```
{
  "bids": [
    {
      "price": 0.02866,
      "amount": 207.065
    },
    {
      "price": 0.02865,
      "amount": 4.551
    },
    {
      "price": 0.02864,
      "amount": 0.999
    },
    {
      "price": 0.02863,
      "amount": 1.071
    },
    {
      "price": 0.02862,
      "amount": 0.932
    }
  ],
  "asks": [
    {
      "price": 0.02868,
      "amount": 16
    },
    {
      "price": 0.02869,
      "amount": 124.643
    },
    {
      "price": 0.02871,
      "amount": 9.738
    },
    {
      "price": 0.02873,
      "amount": 37.638
    },
    {
      "price": 0.02874,
      "amount": 162.903
    }
  ]
}
```


## Impact on developer productivity

To get the order books from Binance and Kraken using the manual, fully native approach, developers had to:

* Learn and code for a total of 4 API endpoints (and their supported query parameters), and
* Learn different nomenclature for what is essentially the same symbol.

	| Exchange      | Native APIs   | CCXT-REST  |
	| ------------- |:-------------:|:----------:|
	| Binance       | ETHBTC | ETH/BTC |
	| Kraken     | ETHXBT      | ETH/BTC |


Using CCXT-REST, developers can:

* Reduce the total API endpoints they have to connect to in half, and
* Get order book data, execute and cancel orders using the same symbols for asset pairs across different exchanges, without having to worry about nomenclature.


## Where to go from here

CCXT-REST makes integration with 135+ cryptocurrency exchanges seamless for developers looking to write software to get real-time pricing, identify arbitrage opportunities, or perform automated trading with bots.

Learn about what the [CCXT-REST](https://ccxt-rest.io) team has been up to.
