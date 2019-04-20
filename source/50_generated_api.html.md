
<h1 id="ccxt-rest-exchange-management-api">Exchange Management API</h1>

APIs that manage [creation](#createexchange) / [deletion](#deleteexchange) / [listing](#listids) / [retrieving](#getone) of exchange instances. 

Before you start using the [Public](#ccxt-rest-public-data-api) and [Private](#ccxt-rest-private-data-api) Data APIs, you would need to create first an exchange instance.  You do this by selecting which exchange you want to create an exchange instance of (you can see the list of supported from [`GET:/exchanges`](#list)), and then using that  exchange name as part of the path of [`POST:/exchange/{exchangeName}`](#createexchange) in order to create an exchange instance. The body to the API call contains  `exchangeId` (_any name you want to use to identify this exchange instance of_), the `apiKey` and `secret` that you got from that exchange's website.

Once you have an exchange instance, you can then start using that exchange instance to invoke the [Public](#ccxt-rest-public-data-api) and  [Private](#ccxt-rest-private-data-api) Data API calls which roughly has a format of `/exchange/{exchangeName}/{exchangeId}/X/Y/Z`.

## list

<a id="opIdlist"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchanges \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchanges", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchanges");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchanges',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchanges', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchanges',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchanges`

List all support exchanges by this server

> Example responses

> 200 Response

```json
[
  "_1btcxe",
  "acx",
  "allcoin",
  "anxpro",
  "anybits",
  "bcex",
  "bequant",
  "bibox",
  "bigone",
  "binance",
  "binanceje",
  "bit2c",
  "bitbank",
  "bitbay",
  "bitfinex",
  "bitfinex2",
  "bitflyer",
  "bitforex",
  "bithumb",
  "bitibu",
  "bitkk",
  "bitlish",
  "bitmarket",
  "bitmex",
  "bitsane",
  "bitso",
  "bitstamp",
  "bitstamp1",
  "bittrex",
  "bitz",
  "bl3p",
  "bleutrade",
  "braziliex",
  "btcalpha",
  "btcbox",
  "btcchina",
  "btcexchange",
  "btcmarkets",
  "btctradeim",
  "btctradeua",
  "btcturk",
  "buda",
  "bxinth",
  "ccex",
  "cex",
  "chbtc",
  "chilebit",
  "cobinhood",
  "coinbase",
  "coinbaseprime",
  "coinbasepro",
  "coincheck",
  "coinegg",
  "coinex",
  "coinexchange",
  "coinfalcon",
  "coinfloor",
  "coingi",
  "coinmarketcap",
  "coinmate",
  "coinnest",
  "coinone",
  "coinspot",
  "cointiger",
  "coolcoin",
  "coss",
  "crex24",
  "crypton",
  "cryptopia",
  "deribit",
  "dsx",
  "ethfinex",
  "exmo",
  "exx",
  "fcoin",
  "fcoinjp",
  "flowbtc",
  "foxbit",
  "fybse",
  "fybsg",
  "gateio",
  "gdax",
  "gemini",
  "getbtc",
  "hadax",
  "hitbtc",
  "hitbtc2",
  "huobipro",
  "huobiru",
  "ice3x",
  "independentreserve",
  "indodax",
  "itbit",
  "jubi",
  "kkex",
  "kraken",
  "kucoin",
  "kucoin2",
  "kuna",
  "lakebtc",
  "lbank",
  "liqui",
  "liquid",
  "livecoin",
  "luno",
  "lykke",
  "mandala",
  "mercado",
  "mixcoins",
  "negociecoins",
  "nova",
  "okcoincny",
  "okcoinusd",
  "okex",
  "paymium",
  "poloniex",
  "quadrigacx",
  "rightbtc",
  "southxchange",
  "stronghold",
  "surbitcoin",
  "theocean",
  "therock",
  "tidebit",
  "tidex",
  "uex",
  "upbit",
  "urdubit",
  "vaultoro",
  "vbtc",
  "virwox",
  "xbtce",
  "yobit",
  "zaif",
  "zb"
]
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|

<h3 id="list-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## listIds

<a id="opIdlistIds"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName} \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}`

List all exchange instance ids for this exchange

<h3 id="listids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|

> Example responses

> 200 Response

```json
[
  "myBitsoInstance",
  "myBinanceInstance",
  "someRandomNameIGaveToAnInstance"
]
```

<h3 id="listids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|

<h3 id="listids-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## createExchange

<a id="opIdcreateExchange"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/exchange/{exchangeName} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/exchange/{exchangeName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:3000/exchange/{exchangeName}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/exchange/{exchangeName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /exchange/{exchangeName}`

Creates an instance of the exchange

> Body parameter

```json
{
  "id": "string",
  "apiKey": "string",
  "secret": "string",
  "enableRateLimit": true
}
```

<h3 id="createexchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|body|body|object|false|The exchange to create.|
|» id|body|string|true|The unique identifier for this exchange. This would be used as the 'exchangeId' of the other API calls|
|» apiKey|body|string|false|The API key you got from the exchange itself. This with the secret is what will allow you to access the exchange|
|» secret|body|string|false|The Secret key you got from the exchange itself. This with the apiKey is what will allow you to access the exchange|
|» enableRateLimit|body|boolean|false|Whether to enable the built in rate limiter or not. The built in rate limiter is an approximation of the actual exchange's limit. To have a more accurate rate limiting, set this to false and implement the rate limiter on your client|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» enableRateLimit|true|
|» enableRateLimit|false|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "enableRateLimit": true,
  "countries": [
    "string"
  ],
  "rateLimit": 0,
  "twofa": false,
  "has": {
    "CORS": "true",
    "publicAPI": "true",
    "privateAPI": "true",
    "cancelOrder": "true",
    "cancelOrders": "true",
    "createDepositAddress": "true",
    "createOrder": "true",
    "createMarketOrder": "true",
    "createLimitOrder": "true",
    "editOrder": "true",
    "fetchBalance": "true",
    "fetchBidsAsks": "true",
    "fetchClosedOrders": "true",
    "fetchCurrencies": "true",
    "fetchDepositAddress": "true",
    "fetchFundingFees": "true",
    "fetchL2OrderBook": "true",
    "fetchMarkets": "true",
    "fetchMyTrades": "true",
    "fetchOHLCV": "true",
    "fetchOpenOrders": "true",
    "fetchOrder": "true",
    "fetchOrderBook": "true",
    "fetchOrderBooks": "true",
    "fetchOrders": "true",
    "fetchTicker": "true",
    "fetchTickers": "true",
    "fetchTrades": "true",
    "fetchTradingFees": "true",
    "fetchTradingLimits": "true",
    "withdraw": "true"
  },
  "urls": {}
}
```

<h3 id="createexchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ExchangeResponse](#schemaexchangeresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Support for exchange is currently broken|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOne

<a id="opIdgetOne"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId} \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}`

Get the exchange details given the exchangeName and exchangeId

<h3 id="getone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "enableRateLimit": true,
  "countries": [
    "string"
  ],
  "rateLimit": 0,
  "twofa": false,
  "has": {
    "CORS": "true",
    "publicAPI": "true",
    "privateAPI": "true",
    "cancelOrder": "true",
    "cancelOrders": "true",
    "createDepositAddress": "true",
    "createOrder": "true",
    "createMarketOrder": "true",
    "createLimitOrder": "true",
    "editOrder": "true",
    "fetchBalance": "true",
    "fetchBidsAsks": "true",
    "fetchClosedOrders": "true",
    "fetchCurrencies": "true",
    "fetchDepositAddress": "true",
    "fetchFundingFees": "true",
    "fetchL2OrderBook": "true",
    "fetchMarkets": "true",
    "fetchMyTrades": "true",
    "fetchOHLCV": "true",
    "fetchOpenOrders": "true",
    "fetchOrder": "true",
    "fetchOrderBook": "true",
    "fetchOrderBooks": "true",
    "fetchOrders": "true",
    "fetchTicker": "true",
    "fetchTickers": "true",
    "fetchTrades": "true",
    "fetchTradingFees": "true",
    "fetchTradingLimits": "true",
    "withdraw": "true"
  },
  "urls": {}
}
```

<h3 id="getone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ExchangeResponse](#schemaexchangeresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteExchange

<a id="opIddeleteExchange"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:3000/exchange/{exchangeName}/{exchangeId} \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:3000/exchange/{exchangeName}/{exchangeId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /exchange/{exchangeName}/{exchangeId}`

Delete the exchange details referenced by the exchangeName and exchangeId

<h3 id="deleteexchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "enableRateLimit": true,
  "countries": [
    "string"
  ],
  "rateLimit": 0,
  "twofa": false,
  "has": {
    "CORS": "true",
    "publicAPI": "true",
    "privateAPI": "true",
    "cancelOrder": "true",
    "cancelOrders": "true",
    "createDepositAddress": "true",
    "createOrder": "true",
    "createMarketOrder": "true",
    "createLimitOrder": "true",
    "editOrder": "true",
    "fetchBalance": "true",
    "fetchBidsAsks": "true",
    "fetchClosedOrders": "true",
    "fetchCurrencies": "true",
    "fetchDepositAddress": "true",
    "fetchFundingFees": "true",
    "fetchL2OrderBook": "true",
    "fetchMarkets": "true",
    "fetchMyTrades": "true",
    "fetchOHLCV": "true",
    "fetchOpenOrders": "true",
    "fetchOrder": "true",
    "fetchOrderBook": "true",
    "fetchOrderBooks": "true",
    "fetchOrders": "true",
    "fetchTicker": "true",
    "fetchTickers": "true",
    "fetchTrades": "true",
    "fetchTradingFees": "true",
    "fetchTradingLimits": "true",
    "withdraw": "true"
  },
  "urls": {}
}
```

<h3 id="deleteexchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ExchangeResponse](#schemaexchangeresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ccxt-rest-public-data-api">Public Data API</h1>

APIs that retrieve public data (like ticker, order books, trades, etc)

## markets

<a id="opIdmarkets"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/markets \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/markets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/markets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/markets',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/markets', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/markets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/markets`

Get the markets of the exchange referenced by the exchangeName and exchangeId

<h3 id="markets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "symbol": "string",
  "base": "string",
  "quote": "string",
  "info": {},
  "lot": 0,
  "limits": {
    "amount": {
      "min": 0,
      "max": 0
    },
    "price": {
      "min": 0,
      "max": 0
    },
    "cost": {
      "min": 0,
      "max": 0
    }
  },
  "precision": {
    "amount": 0,
    "price": 0
  }
}
```

<h3 id="markets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[MarketResponse](#schemamarketresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## orderBook

<a id="opIdorderBook"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orderBook?symbol=string \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orderBook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orderBook?symbol=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orderBook',
  method: 'get',
  data: '?symbol=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orderBook', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orderBook',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/orderBook`

Get the order book of the exchange referenced by the exchangeName, exchangeId and symbol

<h3 id="orderbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|
|limit|query|number|false|The limit of the exchange's order book to be retrieved.|

> Example responses

> 200 Response

```json
{
  "bids": [
    {
      "price": 0,
      "amount": 0
    }
  ],
  "asks": [
    {
      "price": 0,
      "amount": 0
    }
  ],
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z"
}
```

<h3 id="orderbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderBookResponse](#schemaorderbookresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## l2OrderBook

<a id="opIdl2OrderBook"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/l2OrderBook?symbol=string \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/l2OrderBook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/l2OrderBook?symbol=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/l2OrderBook',
  method: 'get',
  data: '?symbol=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/l2OrderBook', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/l2OrderBook',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/l2OrderBook`

Get the Level 2 Order Book of the exchange referenced by the exchangeName, exchangeId and symbol

<h3 id="l2orderbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|
|limit|query|number|false|The limit of the exchange's order book to be retrieved.|

> Example responses

> 200 Response

```json
{
  "bids": [
    {
      "price": 0,
      "amount": 0
    }
  ],
  "asks": [
    {
      "price": 0,
      "amount": 0
    }
  ],
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z"
}
```

<h3 id="l2orderbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderBookResponse](#schemaorderbookresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## trades

<a id="opIdtrades"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades?symbol=string \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades?symbol=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades',
  method: 'get',
  data: '?symbol=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/trades`

Get the trades of the exchange referenced by the exchangeName, exchangeId and symbol

<h3 id="trades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|
|since|query|string|false|Retrieve the trades starting from 'since'|
|limit|query|number|false|The limit of the exchange's trades to be retrieved.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "info": {},
  "timestamp": 0,
  "symbol": "string",
  "side": "buy",
  "price": 0,
  "amount": 0
}
```

<h3 id="trades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[TradeResponse](#schematraderesponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## ticker

<a id="opIdticker"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/ticker?symbol=string \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/ticker", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/ticker?symbol=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/ticker',
  method: 'get',
  data: '?symbol=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/ticker', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/ticker',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/ticker`

Get the ticker of the exchange referenced by the exchangeName, exchangeId and symbol

<h3 id="ticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|

> Example responses

> 200 Response

```json
{
  "symbol": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "high": 0,
  "low": 0,
  "bid": 0,
  "ask": 0,
  "vwap": 0,
  "close": 0,
  "last": 0,
  "baseVolume": 0,
  "quoteVolume": 0,
  "info": {}
}
```

<h3 id="ticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[TickerResponse](#schematickerresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## tickers

<a id="opIdtickers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/tickers \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/tickers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/tickers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/tickers',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/tickers', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/tickers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/tickers`

Get the tickers of the exchange referenced by the exchangeName, exchangeId and symbol

<h3 id="tickers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "string",
    "timestamp": 0,
    "datetime": "2019-04-20T14:17:06Z",
    "high": 0,
    "low": 0,
    "bid": 0,
    "ask": 0,
    "vwap": 0,
    "close": 0,
    "last": 0,
    "baseVolume": 0,
    "quoteVolume": 0,
    "info": {}
  }
]
```

<h3 id="tickers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="tickers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TickerResponse](#schematickerresponse)]|false|none|none|
|» symbol|string|true|none|The currency pair of this tick|
|» timestamp|number|true|none|The timestamp of this tick|
|» datetime|string(date-time)|true|none|The datetime of this tick|
|» high|number|true|none|The higest price of this tick|
|» low|number|true|none|The lowest price of this tick|
|» bid|number|true|none|The current bid price of this tick|
|» ask|number|true|none|The current ask price of this tick|
|» vwap|number|true|none|The volume weighted average price of this tick|
|» close|number|true|none|The closing price of this tick|
|» last|number|true|none|The last price of this tick|
|» baseVolume|number|true|none|The volume of the base currency of this tick|
|» quoteVolume|number|true|none|The volume of the quote currency of this tick|
|» info|object|true|none|Raw ticker response gotten from the exchange site's API|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ccxt-rest-private-data-api">Private Data API</h1>

APIs that retrieve private data (like your balances, your open orders, your closed orders, your trades, etc)

## balances

<a id="opIdbalances"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/balances \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/balances", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/balances");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/balances',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/balances', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/balances',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/balances`

Get the balances of the exchange referenced by the exchangeName and exchangeId

<h3 id="balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|

> Example responses

> 200 Response

```json
{
  "info": {},
  "balances": [
    {
      "currency": "string",
      "free": 0,
      "used": 0,
      "total": 0
    }
  ]
}
```

<h3 id="balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[BalanceResponse](#schemabalanceresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## fetchOrders

<a id="opIdfetchOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/orders`

Get the orders of the exchange referenced by the exchangeName and exchangeId

<h3 id="fetchorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|
|since|query|string|false|Retrieve the orders starting from 'since'|
|limit|query|number|false|The limit of the exchange's orders to be retrieved.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "price": 0,
  "amount": 0,
  "cost": 0,
  "filled": 0,
  "remaining": 0,
  "status": "open",
  "info": {}
}
```

<h3 id="fetchorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderResponse](#schemaorderresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## fetchOpenOrders

<a id="opIdfetchOpenOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/open \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/open", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/open");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/open',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/open', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/open',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/orders/open`

Get the open orders of the exchange referenced by the exchangeName and exchangeId

<h3 id="fetchopenorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|
|since|query|string|false|Retrieve the orders starting from 'since'|
|limit|query|number|false|The limit of the exchange's orders to be retrieved.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "price": 0,
  "amount": 0,
  "cost": 0,
  "filled": 0,
  "remaining": 0,
  "status": "open",
  "info": {}
}
```

<h3 id="fetchopenorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderResponse](#schemaorderresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## fetchClosedOrders

<a id="opIdfetchClosedOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/closed \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/closed", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/closed");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/closed',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/closed', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/orders/closed',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/orders/closed`

Get the closed orders of the exchange referenced by the exchangeName and exchangeId

<h3 id="fetchclosedorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|
|since|query|string|false|Retrieve the orders starting from 'since'|
|limit|query|number|false|The limit of the exchange's orders to be retrieved.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "price": 0,
  "amount": 0,
  "cost": 0,
  "filled": 0,
  "remaining": 0,
  "status": "open",
  "info": {}
}
```

<h3 id="fetchclosedorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderResponse](#schemaorderresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## fetchMyTrades

<a id="opIdfetchMyTrades"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades/mine \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades/mine", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades/mine");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades/mine',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades/mine', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/trades/mine',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/trades/mine`

Get my trades of the exchange referenced by the exchangeName and exchangeId

<h3 id="fetchmytrades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|
|since|query|string|false|Retrieve the trades starting from 'since'|
|limit|query|number|false|The limit of the exchange's trades to be retrieved.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "info": {},
  "timestamp": 0,
  "symbol": "string",
  "side": "buy",
  "price": 0,
  "amount": 0
}
```

<h3 id="fetchmytrades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[TradeResponse](#schematraderesponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## createOrder

<a id="opIdcreateOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /exchange/{exchangeName}/{exchangeId}/order`

Create an order on the exchange referenced by the exchangeName and exchangeId

> Body parameter

```json
{
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "amount": 0,
  "price": 0
}
```

<h3 id="createorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|body|body|object|false|The order to place.|
|» symbol|body|string|true|none|
|» type|body|string|true|none|
|» side|body|string|true|none|
|» amount|body|number|true|none|
|» price|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|market|
|» type|limit|
|» side|buy|
|» side|sell|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "price": 0,
  "amount": 0,
  "cost": 0,
  "filled": 0,
  "remaining": 0,
  "status": "open",
  "info": {}
}
```

<h3 id="createorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderResponse](#schemaorderresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## fetchOrder

<a id="opIdfetchOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId} \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/order/{orderId}`

Retrieves the informatoin of an order on the exchange referenced by the exchangeName, exchangeId and orderId

<h3 id="fetchorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|orderId|path|string|true|The id of the order. Possible values are any of the result of GET:/exchange/{exchangeName}/{exchangeId}/orders.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "price": 0,
  "amount": 0,
  "cost": 0,
  "filled": 0,
  "remaining": 0,
  "status": "open",
  "info": {}
}
```

<h3 id="fetchorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderResponse](#schemaorderresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

## cancelOrder

<a id="opIdcancelOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId} \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /exchange/{exchangeName}/{exchangeId}/order/{orderId}`

Cancel an open order on the exchange referenced by the exchangeName, exchangeId and orderId

<h3 id="cancelorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|orderId|path|string|true|The id of the order. Possible values are any of the result of GET:/exchange/{exchangeName}/{exchangeId}/orders.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/{exchangeId}/markets|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "price": 0,
  "amount": 0,
  "cost": 0,
  "filled": 0,
  "remaining": 0,
  "status": "open",
  "info": {}
}
```

<h3 id="cancelorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderResponse](#schemaorderresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ccxt-rest-experimental-api">Experimental API</h1>

APIs that may be useful but are in experimental stage. Some of these APIs may potentially be removed in the future or be moved into one of the previous categories

## directCall

<a id="opIddirectCall"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/exchange/{exchangeName}/{exchangeId}/_/{methodName} \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json'

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"text/plain"},
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/exchange/{exchangeName}/{exchangeId}/_/{methodName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/{exchangeId}/_/{methodName}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```javascript
var headers = {
  'Content-Type':'text/plain',
  'Accept':'application/json'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/_/{methodName}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```python
import requests
headers = {
  'Content-Type': 'text/plain',
  'Accept': 'application/json'
}

r = requests.post('http://localhost:3000/exchange/{exchangeName}/{exchangeId}/_/{methodName}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'text/plain',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://localhost:3000/exchange/{exchangeName}/{exchangeId}/_/{methodName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /exchange/{exchangeName}/{exchangeId}/_/{methodName}`

Invokes a ccxt javascript object's method call directly

> Body parameter

<h3 id="directcall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|string|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|exchangeId|path|string|true|The id of the exchange instance. Possible values are any of the result of GET:/exchange/{exchangeName}.|
|methodName|path|string|true|The method name of the exchange that would be invoked directly|
|body|body|string|false|The stringified array of values that would be passed as parameters to the direct method call|

> Example responses

> 200 Response

```json
{}
```

<h3 id="directcall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported or Exchange with that id does NOT exist|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="directcall-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocSexchangecapability">ExchangeCapability</h2>

<a id="schemaexchangecapability"></a>

```json
"true"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|true|
|*anonymous*|false|
|*anonymous*|emulated|

<h2 id="tocSordertype">OrderType</h2>

<a id="schemaordertype"></a>

```json
"market"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|market|
|*anonymous*|limit|

<h2 id="tocSorderstatus">OrderStatus</h2>

<a id="schemaorderstatus"></a>

```json
"open"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|open|
|*anonymous*|closed|
|*anonymous*|canceled|
|*anonymous*|canceling|

<h2 id="tocSside">Side</h2>

<a id="schemaside"></a>

```json
"buy"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|buy|
|*anonymous*|sell|

<h2 id="tocSexchangeresponse">ExchangeResponse</h2>

<a id="schemaexchangeresponse"></a>

```json
{
  "name": "string",
  "enableRateLimit": true,
  "countries": [
    "string"
  ],
  "rateLimit": 0,
  "twofa": false,
  "has": {
    "CORS": "true",
    "publicAPI": "true",
    "privateAPI": "true",
    "cancelOrder": "true",
    "cancelOrders": "true",
    "createDepositAddress": "true",
    "createOrder": "true",
    "createMarketOrder": "true",
    "createLimitOrder": "true",
    "editOrder": "true",
    "fetchBalance": "true",
    "fetchBidsAsks": "true",
    "fetchClosedOrders": "true",
    "fetchCurrencies": "true",
    "fetchDepositAddress": "true",
    "fetchFundingFees": "true",
    "fetchL2OrderBook": "true",
    "fetchMarkets": "true",
    "fetchMyTrades": "true",
    "fetchOHLCV": "true",
    "fetchOpenOrders": "true",
    "fetchOrder": "true",
    "fetchOrderBook": "true",
    "fetchOrderBooks": "true",
    "fetchOrders": "true",
    "fetchTicker": "true",
    "fetchTickers": "true",
    "fetchTrades": "true",
    "fetchTradingFees": "true",
    "fetchTradingLimits": "true",
    "withdraw": "true"
  },
  "urls": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the exchange. When you created the exchange (via POST:/exchanges/{exhangeName}), the 'id' parameter there becomes the name here|
|enableRateLimit|boolean|true|none|Whether to enable the built in rate limiter or not. The built in rate limiter is an approximation of the actual exchange's limit. To have a more accurate rate limiting, set this to false and implement the rate limiter on your client|
|countries|[string]|true|none|The list of countries where this exchange is a member of|
|rateLimit|integer|false|none|A request rate limit in milliseconds. Specifies the required minimal delay between two consequent HTTP requests to the same exchange. If enableRateLimit is set to false, this would be ignored.|
|twofa|boolean|false|none|Whether to enable two factor authentication or not|
|has|[ExchangeHasCapabilities](#schemaexchangehascapabilities)|false|none|List of capabilities this exchange has|
|urls|object|false|none|Collection of URLs this exchange has|

#### Enumerated Values

|Property|Value|
|---|---|
|enableRateLimit|true|
|enableRateLimit|false|
|twofa|true|
|twofa|false|

<h2 id="tocSexchangehascapabilities">ExchangeHasCapabilities</h2>

<a id="schemaexchangehascapabilities"></a>

```json
{
  "CORS": "true",
  "publicAPI": "true",
  "privateAPI": "true",
  "cancelOrder": "true",
  "cancelOrders": "true",
  "createDepositAddress": "true",
  "createOrder": "true",
  "createMarketOrder": "true",
  "createLimitOrder": "true",
  "editOrder": "true",
  "fetchBalance": "true",
  "fetchBidsAsks": "true",
  "fetchClosedOrders": "true",
  "fetchCurrencies": "true",
  "fetchDepositAddress": "true",
  "fetchFundingFees": "true",
  "fetchL2OrderBook": "true",
  "fetchMarkets": "true",
  "fetchMyTrades": "true",
  "fetchOHLCV": "true",
  "fetchOpenOrders": "true",
  "fetchOrder": "true",
  "fetchOrderBook": "true",
  "fetchOrderBooks": "true",
  "fetchOrders": "true",
  "fetchTicker": "true",
  "fetchTickers": "true",
  "fetchTrades": "true",
  "fetchTradingFees": "true",
  "fetchTradingLimits": "true",
  "withdraw": "true"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CORS|string|true|none|none|
|publicAPI|string|true|none|none|
|privateAPI|string|true|none|none|
|cancelOrder|string|true|none|none|
|cancelOrders|string|true|none|none|
|createDepositAddress|string|true|none|none|
|createOrder|string|true|none|none|
|createMarketOrder|string|true|none|none|
|createLimitOrder|string|true|none|none|
|editOrder|string|true|none|none|
|fetchBalance|string|true|none|none|
|fetchBidsAsks|string|true|none|none|
|fetchClosedOrders|string|true|none|none|
|fetchCurrencies|string|true|none|none|
|fetchDepositAddress|string|true|none|none|
|fetchFundingFees|string|true|none|none|
|fetchL2OrderBook|string|true|none|none|
|fetchMarkets|string|true|none|none|
|fetchMyTrades|string|true|none|none|
|fetchOHLCV|string|true|none|none|
|fetchOpenOrders|string|true|none|none|
|fetchOrder|string|true|none|none|
|fetchOrderBook|string|true|none|none|
|fetchOrderBooks|string|true|none|none|
|fetchOrders|string|true|none|none|
|fetchTicker|string|true|none|none|
|fetchTickers|string|true|none|none|
|fetchTrades|string|true|none|none|
|fetchTradingFees|string|true|none|none|
|fetchTradingLimits|string|true|none|none|
|withdraw|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|CORS|true|
|CORS|false|
|CORS|emulated|
|publicAPI|true|
|publicAPI|false|
|publicAPI|emulated|
|privateAPI|true|
|privateAPI|false|
|privateAPI|emulated|
|cancelOrder|true|
|cancelOrder|false|
|cancelOrder|emulated|
|cancelOrders|true|
|cancelOrders|false|
|cancelOrders|emulated|
|createDepositAddress|true|
|createDepositAddress|false|
|createDepositAddress|emulated|
|createOrder|true|
|createOrder|false|
|createOrder|emulated|
|createMarketOrder|true|
|createMarketOrder|false|
|createMarketOrder|emulated|
|createLimitOrder|true|
|createLimitOrder|false|
|createLimitOrder|emulated|
|editOrder|true|
|editOrder|false|
|editOrder|emulated|
|fetchBalance|true|
|fetchBalance|false|
|fetchBalance|emulated|
|fetchBidsAsks|true|
|fetchBidsAsks|false|
|fetchBidsAsks|emulated|
|fetchClosedOrders|true|
|fetchClosedOrders|false|
|fetchClosedOrders|emulated|
|fetchCurrencies|true|
|fetchCurrencies|false|
|fetchCurrencies|emulated|
|fetchDepositAddress|true|
|fetchDepositAddress|false|
|fetchDepositAddress|emulated|
|fetchFundingFees|true|
|fetchFundingFees|false|
|fetchFundingFees|emulated|
|fetchL2OrderBook|true|
|fetchL2OrderBook|false|
|fetchL2OrderBook|emulated|
|fetchMarkets|true|
|fetchMarkets|false|
|fetchMarkets|emulated|
|fetchMyTrades|true|
|fetchMyTrades|false|
|fetchMyTrades|emulated|
|fetchOHLCV|true|
|fetchOHLCV|false|
|fetchOHLCV|emulated|
|fetchOpenOrders|true|
|fetchOpenOrders|false|
|fetchOpenOrders|emulated|
|fetchOrder|true|
|fetchOrder|false|
|fetchOrder|emulated|
|fetchOrderBook|true|
|fetchOrderBook|false|
|fetchOrderBook|emulated|
|fetchOrderBooks|true|
|fetchOrderBooks|false|
|fetchOrderBooks|emulated|
|fetchOrders|true|
|fetchOrders|false|
|fetchOrders|emulated|
|fetchTicker|true|
|fetchTicker|false|
|fetchTicker|emulated|
|fetchTickers|true|
|fetchTickers|false|
|fetchTickers|emulated|
|fetchTrades|true|
|fetchTrades|false|
|fetchTrades|emulated|
|fetchTradingFees|true|
|fetchTradingFees|false|
|fetchTradingFees|emulated|
|fetchTradingLimits|true|
|fetchTradingLimits|false|
|fetchTradingLimits|emulated|
|withdraw|true|
|withdraw|false|
|withdraw|emulated|

<h2 id="tocSmarketresponse">MarketResponse</h2>

<a id="schemamarketresponse"></a>

```json
{
  "id": "string",
  "symbol": "string",
  "base": "string",
  "quote": "string",
  "info": {},
  "lot": 0,
  "limits": {
    "amount": {
      "min": 0,
      "max": 0
    },
    "price": {
      "min": 0,
      "max": 0
    },
    "cost": {
      "min": 0,
      "max": 0
    }
  },
  "precision": {
    "amount": 0,
    "price": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this market|
|symbol|string|true|none|A unified way of referencing this Market. When a symbol parameter is needed in one of the APIs, this iis where you will get it.|
|base|string|true|none|The base currency. Given 'BTC/USD', the base is 'BTC'|
|quote|string|true|none|The quote currency. Given 'BTC/USD', the quote is 'USD'|
|info|object|true|none|Raw market response gotten from the exchange site's API|
|lot|number|true|none|When placing an order, its amount must be divisible by this lot value|
|limits|[Limits](#schemalimits)|true|none|The limits associated to this exchange|
|precision|[Precision](#schemaprecision)|true|none|The precision of the values of this exchange|

<h2 id="tocSlimits">Limits</h2>

<a id="schemalimits"></a>

```json
{
  "amount": {
    "min": 0,
    "max": 0
  },
  "price": {
    "min": 0,
    "max": 0
  },
  "cost": {
    "min": 0,
    "max": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Limit](#schemalimit)|true|none|The mininum and maximum allowable amount when placing an order|
|price|[Limit](#schemalimit)|true|none|The mininum and maximum allowable price when placing an order|
|cost|[Limit](#schemalimit)|true|none|The mininum and maximum allowable cost when placing an order (note: cost is amount x price)|

<h2 id="tocSlimit">Limit</h2>

<a id="schemalimit"></a>

```json
{
  "min": 0,
  "max": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|number|true|none|The minimum allowable value|
|max|number|true|none|The maximum allowable value|

<h2 id="tocSprecision">Precision</h2>

<a id="schemaprecision"></a>

```json
{
  "amount": 0,
  "price": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|The allowable precision of the amount when placing an order. For example, given 2, then an amount of 0.123 must be made either 0.12 (or 0.13)|
|price|number|true|none|The allowable precision of the amount when placing an order. For example, given 2, then a price of 0.123 must be made either 0.12 (or 0.13)|

<h2 id="tocSorderbookresponse">OrderBookResponse</h2>

<a id="schemaorderbookresponse"></a>

```json
{
  "bids": [
    {
      "price": 0,
      "amount": 0
    }
  ],
  "asks": [
    {
      "price": 0,
      "amount": 0
    }
  ],
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bids|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed buy orders|
|asks|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed sell orders|
|timestamp|number|false|none|The timestamp associated for this order book|
|datetime|string(date-time)|false|none|The timestamp associated for this order book|

<h2 id="tocSorderbooklevel">OrderBookLevel</h2>

<a id="schemaorderbooklevel"></a>

```json
{
  "price": 0,
  "amount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|number|true|none|The price being asked for. If this is a bid, then this is the amount the bidder is willing to buy. If this is a sell, then this is the amount the seller is willing to sell for.|
|amount|number|false|none|The amount of units being sold.|

<h2 id="tocStraderesponse">TradeResponse</h2>

<a id="schematraderesponse"></a>

```json
{
  "id": "string",
  "info": {},
  "timestamp": 0,
  "symbol": "string",
  "side": "buy",
  "price": 0,
  "amount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the exchange for this trade|
|info|object|true|none|Raw trade response gotten from the exchange site's API|
|timestamp|number(date-time)|false|none|The timestamp of this trade|
|symbol|string|true|none|The currency pair of this trade|
|side|string|true|none|Whether this trade was a bid or ask (i.e. buy or sell)|
|price|number|true|none|The price of this trade|
|amount|number|true|none|The amount of this trade|

#### Enumerated Values

|Property|Value|
|---|---|
|side|buy|
|side|sell|

<h2 id="tocStickerresponse">TickerResponse</h2>

<a id="schematickerresponse"></a>

```json
{
  "symbol": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "high": 0,
  "low": 0,
  "bid": 0,
  "ask": 0,
  "vwap": 0,
  "close": 0,
  "last": 0,
  "baseVolume": 0,
  "quoteVolume": 0,
  "info": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|The currency pair of this tick|
|timestamp|number|true|none|The timestamp of this tick|
|datetime|string(date-time)|true|none|The datetime of this tick|
|high|number|true|none|The higest price of this tick|
|low|number|true|none|The lowest price of this tick|
|bid|number|true|none|The current bid price of this tick|
|ask|number|true|none|The current ask price of this tick|
|vwap|number|true|none|The volume weighted average price of this tick|
|close|number|true|none|The closing price of this tick|
|last|number|true|none|The last price of this tick|
|baseVolume|number|true|none|The volume of the base currency of this tick|
|quoteVolume|number|true|none|The volume of the quote currency of this tick|
|info|object|true|none|Raw ticker response gotten from the exchange site's API|

<h2 id="tocSbalanceresponse">BalanceResponse</h2>

<a id="schemabalanceresponse"></a>

```json
{
  "info": {},
  "balances": [
    {
      "currency": "string",
      "free": 0,
      "used": 0,
      "total": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|object|true|none|Raw balance response gotten from the exchange site's API|
|balances|[[BalanceInfo](#schemabalanceinfo)]|true|none|List of balances per currency that you own|

<h2 id="tocSbalanceinfo">BalanceInfo</h2>

<a id="schemabalanceinfo"></a>

```json
{
  "currency": "string",
  "free": 0,
  "used": 0,
  "total": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The currency at which this balance refers to|
|free|number|true|none|The amount of currency that is free to used|
|used|number|true|none|The amount of currency that is currently used|
|total|number|true|none|The total amount of currency (free + used)|

<h2 id="tocSorderresponse">OrderResponse</h2>

<a id="schemaorderresponse"></a>

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-20T14:17:06Z",
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "price": 0,
  "amount": 0,
  "cost": 0,
  "filled": 0,
  "remaining": 0,
  "status": "open",
  "info": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the exchange for this order|
|timestamp|number|false|none|The timestamp of this order|
|datetime|string(date-time)|false|none|The datetime of this order|
|symbol|string|false|none|The currency pair of this order|
|type|string|false|none|Wether this is a market order or a limit order|
|side|string|false|none|Wether this is a bid or ask (i.e. buy or sell) order|
|price|number|false|none|The price of this order|
|amount|number|false|none|The amount of this order|
|cost|number|false|none|The cost of this order (i.e. price x amount)|
|filled|number|false|none|The amount of this order that is currently filled (i.e. this can be less than or equal to 'amount')|
|remaining|number|false|none|The amount of this order that is still yet to be filled (i.e. this can be less than or equal to 'amount')|
|status|string|false|none|The current status of this order|
|info|object|false|none|Raw order response gotten from the exchange site's API|

#### Enumerated Values

|Property|Value|
|---|---|
|type|market|
|type|limit|
|side|buy|
|side|sell|
|status|open|
|status|closed|
|status|canceled|
|status|canceling|

