
<h1 id="ccxt-rest-authentication-api">Authentication API</h1>

APIs that manage [creation](/#createPrivateConnection) / [deletion](/#deletePrivateConnection) / [retrieving](/#getone) of exchange connections. 

Most [Public Data APIs](/#ccxt-rest-public-data-api) by most exchanges can be used without providing the API Key and Secret. 

For example, you get retrieve the market of binance by doing `GET:/exchange/binance/market` directly and would be able to get the markets of binance. 

But some exchanges though would require you to use an API Key and Secret even when accessing their Public Data API. For  example, for cointiger, if you want to retrieve its market and you do `GET:/exchange/cointiger/market`, you will a `403` error (_i.e. meaning you were unauthorized to access it_). Thus, to use that api of continger, you would first have to provide your API Key and Secret to continger via `POST:/exchange/continger -d {"id":"myCoinTiger","apiKey":"My-COINTIGER-KEY","secret":"s3cret"}`. From there, you will get a response `{"token":"xxx.yyy.zzz"}`. That `"xxx.yyy.zzz"` would then what you will use to connect to coiniger - i.e. `GET:/exchange/cointiger/market -H "Authorization: Bearer xxx.yyy.zzz"` and this time, your request will push  through and would be able to get cointiger's market.

Furthemore, all [Private Data APIs](/#ccxt-rest-private-data-api) of all exchanges would require API Key and Secret. Thus, although `GET:/exchange/binance/market` would work, doing `GET:/exchange/binance/balances` will not. You'd have to provide first binance your API Key and Secret like `POST:/exchange/binance -d {"id":"myBinance","apiKey":"binance-key","secret":"s3cret"}`, to get something like `{"token":"aaa.bbb.ccc"}`, which you can then use to execute  `GET:/exchange/binance/balances -H "Authorization: Bearer aaa.bbb.ccc"` which would finally get your balances.

## getConnection

<a id="opIdgetConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}`

Retreives the current exchange connection details given the {exchangeName} and access token in the header

<h3 id="getconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "private": true,
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

<h3 id="getconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ExchangeResponse](#schemaexchangeresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## createPrivateConnection

<a id="opIdcreatePrivateConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/exchange/{exchangeName} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
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
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://localhost:3000/exchange/{exchangeName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /exchange/{exchangeName}`

Creates a private connection to the exchange referenced in {exchangeName}

> Body parameter

```json
{
  "id": "string",
  "apiKey": "string",
  "secret": "string",
  "enableRateLimit": true
}
```

<h3 id="createprivateconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|body|body|[exchangeConfig](#schemaexchangeconfig)|true|The exchange to create.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

<h3 id="createprivateconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AccessToken](#schemaaccesstoken)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Support for exchange is currently broken|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## deletePrivateConnection

<a id="opIddeletePrivateConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:3000/exchange/{exchangeName} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/exchange/{exchangeName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('http://localhost:3000/exchange/{exchangeName}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'http://localhost:3000/exchange/{exchangeName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /exchange/{exchangeName}`

Delete the exchange connection referenced by access token in the header

<h3 id="deleteprivateconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "private": true,
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

<h3 id="deleteprivateconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[ExchangeResponse](#schemaexchangeresponse)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="ccxt-rest-exchange-management-api">Exchange Management API</h1>

APIs for retrieving supported exchanges

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

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Exchange](#schemaexchange)]|false|none|none|

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
curl -X GET http://localhost:3000/exchange/{exchangeName}/markets \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/markets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/markets");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/markets',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/markets', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/markets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/markets`

Get the markets of the exchange referenced by the {exchangeName}.

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="markets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
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
]
```

<h3 id="markets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="markets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MarketResponse](#schemamarketresponse)]|false|none|none|
|» id|string|true|none|The unique identifier for this market|
|» symbol|string|true|none|A unified way of referencing this Market. When a symbol parameter is needed in one of the APIs, this iis where you will get it.|
|» base|string|true|none|The base currency. Given 'BTC/USD', the base is 'BTC'|
|» quote|string|true|none|The quote currency. Given 'BTC/USD', the quote is 'USD'|
|» info|object|true|none|Raw market response gotten from the exchange site's API|
|» lot|number|true|none|When placing an order, its amount must be divisible by this lot value|
|» limits|[Limits](#schemalimits)|true|none|none|
|»» amount|[Limit](#schemalimit)|true|none|none|
|»»» min|number|true|none|The minimum allowable value|
|»»» max|number|true|none|The maximum allowable value|
|»» price|[Limit](#schemalimit)|true|none|none|
|»» cost|[Limit](#schemalimit)|true|none|none|
|» precision|[Precision](#schemaprecision)|true|none|none|
|»» amount|number|true|none|The allowable precision of the amount when placing an order. For example, given 2, then an amount of 0.123 must be made either 0.12 (or 0.13)|
|»» price|number|true|none|The allowable precision of the amount when placing an order. For example, given 2, then a price of 0.123 must be made either 0.12 (or 0.13)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## orderBook

<a id="opIdorderBook"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/orderBook?symbol=string \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/orderBook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/orderBook?symbol=string");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/orderBook',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/orderBook', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/orderBook',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/orderBook`

Get the order book of the exchange referenced by the {exchangeName} and `?symbol=`. 

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="orderbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|
|limit|query|number|false|The limit of the exchange's order book to be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
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
    "datetime": "2019-04-25T18:17:25Z"
  }
]
```

<h3 id="orderbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="orderbook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrderBookResponse](#schemaorderbookresponse)]|false|none|none|
|» bids|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed buy orders|
|»» price|number|true|none|The price being asked for. If this is a bid, then this is the amount the bidder is willing to buy. If this is a sell, then this is the amount the seller is willing to sell for.|
|»» amount|number|false|none|The amount of units being sold.|
|» asks|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed sell orders|
|» timestamp|number|false|none|The timestamp associated for this order book|
|» datetime|string(date-time)|false|none|The timestamp associated for this order book|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## l2OrderBook

<a id="opIdl2OrderBook"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/l2OrderBook?symbol=string \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/l2OrderBook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/l2OrderBook?symbol=string");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/l2OrderBook',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/l2OrderBook', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/l2OrderBook',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/l2OrderBook`

Get the Level 2 Order Book of the exchange referenced by the {exchangeName} and `?symbol=`.

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="l2orderbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|
|limit|query|number|false|The limit of the exchange's order book to be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
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
    "datetime": "2019-04-25T18:17:25Z"
  }
]
```

<h3 id="l2orderbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="l2orderbook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrderBookResponse](#schemaorderbookresponse)]|false|none|none|
|» bids|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed buy orders|
|»» price|number|true|none|The price being asked for. If this is a bid, then this is the amount the bidder is willing to buy. If this is a sell, then this is the amount the seller is willing to sell for.|
|»» amount|number|false|none|The amount of units being sold.|
|» asks|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed sell orders|
|» timestamp|number|false|none|The timestamp associated for this order book|
|» datetime|string(date-time)|false|none|The timestamp associated for this order book|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## trades

<a id="opIdtrades"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/trades?symbol=string \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/trades", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/trades?symbol=string");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/trades',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/trades', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/trades',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/trades`

Get the trades of the exchange referenced by the {exchangeName} and `?symbol=`.

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="trades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|
|since|query|string|false|Retrieve the trades starting from 'since'|
|limit|query|number|false|The limit of the exchange's trades to be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "info": {},
    "timestamp": 0,
    "symbol": "string",
    "side": "buy",
    "price": 0,
    "amount": 0
  }
]
```

<h3 id="trades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="trades-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TradeResponse](#schematraderesponse)]|false|none|none|
|» id|string|false|none|The unique identifier of the exchange for this trade|
|» info|object|true|none|Raw trade response gotten from the exchange site's API|
|» timestamp|number(date-time)|false|none|The timestamp of this trade|
|» symbol|string|true|none|The currency pair of this trade|
|» side|[Side](#schemaside)|true|none|Wether this is a bid or ask (i.e. buy or sell) order|
|» price|number|true|none|The price of this trade|
|» amount|number|true|none|The amount of this trade|

#### Enumerated Values

|Property|Value|
|---|---|
|side|buy|
|side|sell|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## ticker

<a id="opIdticker"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/ticker?symbol=string \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/ticker", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/ticker?symbol=string");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/ticker',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/ticker', params={
  'symbol': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/ticker',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/ticker`

Get the ticker of the exchange referenced by the {exchangeName} and `?symbol=`.

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="ticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|true|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
{
  "symbol": "string",
  "timestamp": 0,
  "datetime": "2019-04-25T18:17:25Z",
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
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## tickers

<a id="opIdtickers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/tickers \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/tickers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/tickers");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/tickers',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/tickers', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/tickers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/tickers`

Get the tickers of the exchange referenced by the {exchangeName} and `?symbol=`.

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="tickers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
  {
    "symbol": "string",
    "timestamp": 0,
    "datetime": "2019-04-25T18:17:25Z",
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
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="ccxt-rest-private-data-api">Private Data API</h1>

APIs that retrieve private data (like your balances, your open orders, your closed orders, your trades, etc)

## balances

<a id="opIdbalances"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/balances \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/balances", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/balances");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/balances',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/balances', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/balances',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/balances`

Get the balances of the exchange referenced by the {exchangeName}. 

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

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
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## fetchOrders

<a id="opIdfetchOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/orders \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/orders", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/orders");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/orders',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/orders', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/orders',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/orders`

Get the orders of the exchange referenced by the {exchangeName}. 

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="fetchorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|
|since|query|string|false|Retrieve the orders starting from 'since'|
|limit|query|number|false|The limit of the exchange's orders to be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "timestamp": 0,
    "datetime": "2019-04-25T18:17:25Z",
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
]
```

<h3 id="fetchorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="fetchorders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrderResponse](#schemaorderresponse)]|false|none|none|
|» id|string|true|none|The unique identifier of the exchange for this order|
|» timestamp|number|false|none|The timestamp of this order|
|» datetime|string(date-time)|false|none|The datetime of this order|
|» symbol|string|false|none|The currency pair of this order|
|» type|[OrderType](#schemaordertype)|false|none|Whether this is a 'market' order or a 'limit' order|
|» side|[Side](#schemaside)|false|none|Wether this is a bid or ask (i.e. buy or sell) order|
|» price|number|false|none|The price of this order|
|» amount|number|false|none|The amount of this order|
|» cost|number|false|none|The cost of this order (i.e. price x amount)|
|» filled|number|false|none|The amount of this order that is currently filled (i.e. this can be less than or equal to 'amount')|
|» remaining|number|false|none|The amount of this order that is still yet to be filled (i.e. this can be less than or equal to 'amount')|
|» status|[OrderStatus](#schemaorderstatus)|false|none|The current status of this order|
|» info|object|false|none|Raw order response gotten from the exchange site's API|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## fetchOpenOrders

<a id="opIdfetchOpenOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/orders/open \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/orders/open", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/orders/open");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/orders/open',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/orders/open', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/orders/open',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/orders/open`

Get the open orders of the exchange referenced by the {exchangeName}. 

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="fetchopenorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|
|since|query|string|false|Retrieve the orders starting from 'since'|
|limit|query|number|false|The limit of the exchange's orders to be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "timestamp": 0,
    "datetime": "2019-04-25T18:17:25Z",
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
]
```

<h3 id="fetchopenorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="fetchopenorders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrderResponse](#schemaorderresponse)]|false|none|none|
|» id|string|true|none|The unique identifier of the exchange for this order|
|» timestamp|number|false|none|The timestamp of this order|
|» datetime|string(date-time)|false|none|The datetime of this order|
|» symbol|string|false|none|The currency pair of this order|
|» type|[OrderType](#schemaordertype)|false|none|Whether this is a 'market' order or a 'limit' order|
|» side|[Side](#schemaside)|false|none|Wether this is a bid or ask (i.e. buy or sell) order|
|» price|number|false|none|The price of this order|
|» amount|number|false|none|The amount of this order|
|» cost|number|false|none|The cost of this order (i.e. price x amount)|
|» filled|number|false|none|The amount of this order that is currently filled (i.e. this can be less than or equal to 'amount')|
|» remaining|number|false|none|The amount of this order that is still yet to be filled (i.e. this can be less than or equal to 'amount')|
|» status|[OrderStatus](#schemaorderstatus)|false|none|The current status of this order|
|» info|object|false|none|Raw order response gotten from the exchange site's API|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## fetchClosedOrders

<a id="opIdfetchClosedOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/orders/closed \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/orders/closed", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/orders/closed");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/orders/closed',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/orders/closed', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/orders/closed',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/orders/closed`

Get the closed orders of the exchange referenced by the {exchangeName}.

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="fetchclosedorders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|
|since|query|string|false|Retrieve the orders starting from 'since'|
|limit|query|number|false|The limit of the exchange's orders to be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "timestamp": 0,
    "datetime": "2019-04-25T18:17:25Z",
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
]
```

<h3 id="fetchclosedorders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="fetchclosedorders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrderResponse](#schemaorderresponse)]|false|none|none|
|» id|string|true|none|The unique identifier of the exchange for this order|
|» timestamp|number|false|none|The timestamp of this order|
|» datetime|string(date-time)|false|none|The datetime of this order|
|» symbol|string|false|none|The currency pair of this order|
|» type|[OrderType](#schemaordertype)|false|none|Whether this is a 'market' order or a 'limit' order|
|» side|[Side](#schemaside)|false|none|Wether this is a bid or ask (i.e. buy or sell) order|
|» price|number|false|none|The price of this order|
|» amount|number|false|none|The amount of this order|
|» cost|number|false|none|The cost of this order (i.e. price x amount)|
|» filled|number|false|none|The amount of this order that is currently filled (i.e. this can be less than or equal to 'amount')|
|» remaining|number|false|none|The amount of this order that is still yet to be filled (i.e. this can be less than or equal to 'amount')|
|» status|[OrderStatus](#schemaorderstatus)|false|none|The current status of this order|
|» info|object|false|none|Raw order response gotten from the exchange site's API|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## fetchMyTrades

<a id="opIdfetchMyTrades"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/trades/mine \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/trades/mine", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/trades/mine");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/trades/mine',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/trades/mine', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/trades/mine',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/trades/mine`

Get my trades of the exchange referenced by the {exchangeName}. 

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="fetchmytrades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|
|since|query|string|false|Retrieve the trades starting from 'since'|
|limit|query|number|false|The limit of the exchange's trades to be retrieved.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "info": {},
    "timestamp": 0,
    "symbol": "string",
    "side": "buy",
    "price": 0,
    "amount": 0
  }
]
```

<h3 id="fetchmytrades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|If the exchange itself complained about the parameters passed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|If the exchange integration requires api key and secret for this function|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|If the exchange integration had an authentication issue (most probably nonce error)|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="fetchmytrades-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TradeResponse](#schematraderesponse)]|false|none|none|
|» id|string|false|none|The unique identifier of the exchange for this trade|
|» info|object|true|none|Raw trade response gotten from the exchange site's API|
|» timestamp|number(date-time)|false|none|The timestamp of this trade|
|» symbol|string|true|none|The currency pair of this trade|
|» side|[Side](#schemaside)|true|none|Wether this is a bid or ask (i.e. buy or sell) order|
|» price|number|true|none|The price of this trade|
|» amount|number|true|none|The amount of this trade|

#### Enumerated Values

|Property|Value|
|---|---|
|side|buy|
|side|sell|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## createOrder

<a id="opIdcreateOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/exchange/{exchangeName}/order \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/exchange/{exchangeName}/order", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/order");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/order',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://localhost:3000/exchange/{exchangeName}/order', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://localhost:3000/exchange/{exchangeName}/order',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /exchange/{exchangeName}/order`

Create an order on the exchange referenced by the {exchangeName}

> Body parameter

```json
{
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "amount": 0,
  "price": 0,
  "params": {}
}
```

<h3 id="createorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|body|body|[orderPlacement](#schemaorderplacement)|false|The order to place.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-25T18:17:25Z",
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
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## fetchOrder

<a id="opIdfetchOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/exchange/{exchangeName}/order/{orderId} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:3000/exchange/{exchangeName}/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/order/{orderId}");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/order/{orderId}',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://localhost:3000/exchange/{exchangeName}/order/{orderId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://localhost:3000/exchange/{exchangeName}/order/{orderId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/order/{orderId}`

Retrieves the information of an order on the exchange referenced by the {exchangeName} and {orderId}. 

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="fetchorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|orderId|path|string|true|The id of the order. Possible values are any of the result of GET:/exchange/{exchangeName}/orders.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-25T18:17:25Z",
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
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## cancelOrder

<a id="opIdcancelOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:3000/exchange/{exchangeName}/order/{orderId} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost:3000/exchange/{exchangeName}/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/order/{orderId}");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/order/{orderId}',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('http://localhost:3000/exchange/{exchangeName}/order/{orderId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'http://localhost:3000/exchange/{exchangeName}/order/{orderId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /exchange/{exchangeName}/order/{orderId}`

Cancel an open order on the exchange referenced by the {exchangeName} and {orderId}. 

<br/> *Parameters listed here are common to all exchanges. But any other parameter passed would be forwarded as well into the exchange.*

<h3 id="cancelorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|orderId|path|string|true|The id of the order. Possible values are any of the result of GET:/exchange/{exchangeName}/orders.|
|symbol|query|string|false|The symbol of the exchange's data to be retrieved. Possible values are any of symbols in GET:/exchange/{exchangeName}/markets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-25T18:17:25Z",
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
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="ccxt-rest-experimental-api">Experimental API</h1>

APIs that may be useful but are in experimental stage. Some of these APIs may potentially be removed in the future or be moved into one of the previous categories

## directCall

<a id="opIddirectCall"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/exchange/{exchangeName}/_/{methodName} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

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
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost:3000/exchange/{exchangeName}/_/{methodName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:3000/exchange/{exchangeName}/_/{methodName}");
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
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://localhost:3000/exchange/{exchangeName}/_/{methodName}',
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
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://localhost:3000/exchange/{exchangeName}/_/{methodName}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://localhost:3000/exchange/{exchangeName}/_/{methodName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /exchange/{exchangeName}/_/{methodName}`

Invokes a ccxt javascript object's method call directly

> Body parameter

```json
[]
```

<h3 id="directcall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeName|path|[Exchange](#schemaexchange)|true|The name of the exchange. Possible values are any of the result of GET:/exchanges.|
|methodName|path|string|true|The method name of the exchange that would be invoked directly|
|body|body|array|false|The array of values that would be passed as parameters to the direct method call|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exchangeName|_1btcxe|
|exchangeName|acx|
|exchangeName|allcoin|
|exchangeName|anxpro|
|exchangeName|anybits|
|exchangeName|bcex|
|exchangeName|bequant|
|exchangeName|bibox|
|exchangeName|bigone|
|exchangeName|binance|
|exchangeName|binanceje|
|exchangeName|bit2c|
|exchangeName|bitbank|
|exchangeName|bitbay|
|exchangeName|bitfinex|
|exchangeName|bitfinex2|
|exchangeName|bitflyer|
|exchangeName|bitforex|
|exchangeName|bithumb|
|exchangeName|bitibu|
|exchangeName|bitkk|
|exchangeName|bitlish|
|exchangeName|bitmarket|
|exchangeName|bitmex|
|exchangeName|bitsane|
|exchangeName|bitso|
|exchangeName|bitstamp|
|exchangeName|bitstamp1|
|exchangeName|bittrex|
|exchangeName|bitz|
|exchangeName|bl3p|
|exchangeName|bleutrade|
|exchangeName|braziliex|
|exchangeName|btcalpha|
|exchangeName|btcbox|
|exchangeName|btcchina|
|exchangeName|btcexchange|
|exchangeName|btcmarkets|
|exchangeName|btctradeim|
|exchangeName|btctradeua|
|exchangeName|btcturk|
|exchangeName|buda|
|exchangeName|bxinth|
|exchangeName|ccex|
|exchangeName|cex|
|exchangeName|chbtc|
|exchangeName|chilebit|
|exchangeName|cobinhood|
|exchangeName|coinbase|
|exchangeName|coinbaseprime|
|exchangeName|coinbasepro|
|exchangeName|coincheck|
|exchangeName|coinegg|
|exchangeName|coinex|
|exchangeName|coinexchange|
|exchangeName|coinfalcon|
|exchangeName|coinfloor|
|exchangeName|coingi|
|exchangeName|coinmarketcap|
|exchangeName|coinmate|
|exchangeName|coinnest|
|exchangeName|coinone|
|exchangeName|coinspot|
|exchangeName|cointiger|
|exchangeName|coolcoin|
|exchangeName|coss|
|exchangeName|crex24|
|exchangeName|crypton|
|exchangeName|cryptopia|
|exchangeName|deribit|
|exchangeName|dsx|
|exchangeName|ethfinex|
|exchangeName|exmo|
|exchangeName|exx|
|exchangeName|fcoin|
|exchangeName|fcoinjp|
|exchangeName|flowbtc|
|exchangeName|foxbit|
|exchangeName|fybse|
|exchangeName|fybsg|
|exchangeName|gateio|
|exchangeName|gdax|
|exchangeName|gemini|
|exchangeName|getbtc|
|exchangeName|hadax|
|exchangeName|hitbtc|
|exchangeName|hitbtc2|
|exchangeName|huobipro|
|exchangeName|huobiru|
|exchangeName|ice3x|
|exchangeName|independentreserve|
|exchangeName|indodax|
|exchangeName|itbit|
|exchangeName|jubi|
|exchangeName|kkex|
|exchangeName|kraken|
|exchangeName|kucoin|
|exchangeName|kucoin2|
|exchangeName|kuna|
|exchangeName|lakebtc|
|exchangeName|lbank|
|exchangeName|liqui|
|exchangeName|liquid|
|exchangeName|livecoin|
|exchangeName|luno|
|exchangeName|lykke|
|exchangeName|mandala|
|exchangeName|mercado|
|exchangeName|mixcoins|
|exchangeName|negociecoins|
|exchangeName|nova|
|exchangeName|okcoincny|
|exchangeName|okcoinusd|
|exchangeName|okex|
|exchangeName|paymium|
|exchangeName|poloniex|
|exchangeName|quadrigacx|
|exchangeName|rightbtc|
|exchangeName|southxchange|
|exchangeName|stronghold|
|exchangeName|surbitcoin|
|exchangeName|theocean|
|exchangeName|therock|
|exchangeName|tidebit|
|exchangeName|tidex|
|exchangeName|uex|
|exchangeName|upbit|
|exchangeName|urdubit|
|exchangeName|vaultoro|
|exchangeName|vbtc|
|exchangeName|virwox|
|exchangeName|xbtce|
|exchangeName|yobit|
|exchangeName|zaif|
|exchangeName|zb|

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
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Exchange with that name is NOT supported|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|If an unexpected error occurred|None|
|501|[Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)|If the exchange integration does NOT support this function|None|
|504|[Gateway Time-out](https://tools.ietf.org/html/rfc7231#section-6.6.5)|If the exchange itself could not be reached because of some network error|None|

<h3 id="directcall-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

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
|limits|[Limits](#schemalimits)|true|none|none|
|precision|[Precision](#schemaprecision)|true|none|none|

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
|side|[Side](#schemaside)|true|none|Wether this is a bid or ask (i.e. buy or sell) order|
|price|number|true|none|The price of this trade|
|amount|number|true|none|The amount of this trade|

<h2 id="tocSorderresponse">OrderResponse</h2>

<a id="schemaorderresponse"></a>

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-25T18:17:25Z",
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
|type|[OrderType](#schemaordertype)|false|none|Whether this is a 'market' order or a 'limit' order|
|side|[Side](#schemaside)|false|none|Wether this is a bid or ask (i.e. buy or sell) order|
|price|number|false|none|The price of this order|
|amount|number|false|none|The amount of this order|
|cost|number|false|none|The cost of this order (i.e. price x amount)|
|filled|number|false|none|The amount of this order that is currently filled (i.e. this can be less than or equal to 'amount')|
|remaining|number|false|none|The amount of this order that is still yet to be filled (i.e. this can be less than or equal to 'amount')|
|status|[OrderStatus](#schemaorderstatus)|false|none|The current status of this order|
|info|object|false|none|Raw order response gotten from the exchange site's API|

<h2 id="tocSside">Side</h2>

<a id="schemaside"></a>

```json
"buy"

```

*Wether this is a bid or ask (i.e. buy or sell) order*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Wether this is a bid or ask (i.e. buy or sell) order|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|buy|
|*anonymous*|sell|

<h2 id="tocSexchange">Exchange</h2>

<a id="schemaexchange"></a>

```json
"_1btcxe"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|_1btcxe|
|*anonymous*|acx|
|*anonymous*|allcoin|
|*anonymous*|anxpro|
|*anonymous*|anybits|
|*anonymous*|bcex|
|*anonymous*|bequant|
|*anonymous*|bibox|
|*anonymous*|bigone|
|*anonymous*|binance|
|*anonymous*|binanceje|
|*anonymous*|bit2c|
|*anonymous*|bitbank|
|*anonymous*|bitbay|
|*anonymous*|bitfinex|
|*anonymous*|bitfinex2|
|*anonymous*|bitflyer|
|*anonymous*|bitforex|
|*anonymous*|bithumb|
|*anonymous*|bitibu|
|*anonymous*|bitkk|
|*anonymous*|bitlish|
|*anonymous*|bitmarket|
|*anonymous*|bitmex|
|*anonymous*|bitsane|
|*anonymous*|bitso|
|*anonymous*|bitstamp|
|*anonymous*|bitstamp1|
|*anonymous*|bittrex|
|*anonymous*|bitz|
|*anonymous*|bl3p|
|*anonymous*|bleutrade|
|*anonymous*|braziliex|
|*anonymous*|btcalpha|
|*anonymous*|btcbox|
|*anonymous*|btcchina|
|*anonymous*|btcexchange|
|*anonymous*|btcmarkets|
|*anonymous*|btctradeim|
|*anonymous*|btctradeua|
|*anonymous*|btcturk|
|*anonymous*|buda|
|*anonymous*|bxinth|
|*anonymous*|ccex|
|*anonymous*|cex|
|*anonymous*|chbtc|
|*anonymous*|chilebit|
|*anonymous*|cobinhood|
|*anonymous*|coinbase|
|*anonymous*|coinbaseprime|
|*anonymous*|coinbasepro|
|*anonymous*|coincheck|
|*anonymous*|coinegg|
|*anonymous*|coinex|
|*anonymous*|coinexchange|
|*anonymous*|coinfalcon|
|*anonymous*|coinfloor|
|*anonymous*|coingi|
|*anonymous*|coinmarketcap|
|*anonymous*|coinmate|
|*anonymous*|coinnest|
|*anonymous*|coinone|
|*anonymous*|coinspot|
|*anonymous*|cointiger|
|*anonymous*|coolcoin|
|*anonymous*|coss|
|*anonymous*|crex24|
|*anonymous*|crypton|
|*anonymous*|cryptopia|
|*anonymous*|deribit|
|*anonymous*|dsx|
|*anonymous*|ethfinex|
|*anonymous*|exmo|
|*anonymous*|exx|
|*anonymous*|fcoin|
|*anonymous*|fcoinjp|
|*anonymous*|flowbtc|
|*anonymous*|foxbit|
|*anonymous*|fybse|
|*anonymous*|fybsg|
|*anonymous*|gateio|
|*anonymous*|gdax|
|*anonymous*|gemini|
|*anonymous*|getbtc|
|*anonymous*|hadax|
|*anonymous*|hitbtc|
|*anonymous*|hitbtc2|
|*anonymous*|huobipro|
|*anonymous*|huobiru|
|*anonymous*|ice3x|
|*anonymous*|independentreserve|
|*anonymous*|indodax|
|*anonymous*|itbit|
|*anonymous*|jubi|
|*anonymous*|kkex|
|*anonymous*|kraken|
|*anonymous*|kucoin|
|*anonymous*|kucoin2|
|*anonymous*|kuna|
|*anonymous*|lakebtc|
|*anonymous*|lbank|
|*anonymous*|liqui|
|*anonymous*|liquid|
|*anonymous*|livecoin|
|*anonymous*|luno|
|*anonymous*|lykke|
|*anonymous*|mandala|
|*anonymous*|mercado|
|*anonymous*|mixcoins|
|*anonymous*|negociecoins|
|*anonymous*|nova|
|*anonymous*|okcoincny|
|*anonymous*|okcoinusd|
|*anonymous*|okex|
|*anonymous*|paymium|
|*anonymous*|poloniex|
|*anonymous*|quadrigacx|
|*anonymous*|rightbtc|
|*anonymous*|southxchange|
|*anonymous*|stronghold|
|*anonymous*|surbitcoin|
|*anonymous*|theocean|
|*anonymous*|therock|
|*anonymous*|tidebit|
|*anonymous*|tidex|
|*anonymous*|uex|
|*anonymous*|upbit|
|*anonymous*|urdubit|
|*anonymous*|vaultoro|
|*anonymous*|vbtc|
|*anonymous*|virwox|
|*anonymous*|xbtce|
|*anonymous*|yobit|
|*anonymous*|zaif|
|*anonymous*|zb|

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
  "datetime": "2019-04-25T18:17:25Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bids|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed buy orders|
|asks|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|The publicly listed sell orders|
|timestamp|number|false|none|The timestamp associated for this order book|
|datetime|string(date-time)|false|none|The timestamp associated for this order book|

<h2 id="tocSorderstatus">OrderStatus</h2>

<a id="schemaorderstatus"></a>

```json
"open"

```

*The current status of this order*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The current status of this order|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|open|
|*anonymous*|closed|
|*anonymous*|canceled|
|*anonymous*|canceling|

<h2 id="tocSordertype">OrderType</h2>

<a id="schemaordertype"></a>

```json
"market"

```

*Whether this is a 'market' order or a 'limit' order*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Whether this is a 'market' order or a 'limit' order|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|market|
|*anonymous*|limit|

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
|amount|[Limit](#schemalimit)|true|none|none|
|price|[Limit](#schemalimit)|true|none|none|
|cost|[Limit](#schemalimit)|true|none|none|

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

<h2 id="tocSaccesstoken">AccessToken</h2>

<a id="schemaaccesstoken"></a>

```json
{
  "token": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|The JWT token that needs to be added into the 'Authorization' header with the 'Bearer ' prefix. For example, given a token of xyz, do a secured request with 'Authorization: Bearer xyz'|

<h2 id="tocSexchangeresponse">ExchangeResponse</h2>

<a id="schemaexchangeresponse"></a>

```json
{
  "id": "string",
  "name": "string",
  "private": true,
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
|id|string|true|none|The id of the exchange. When you created the exchange (via POST:/exchanges/{exhangeName}), the 'id' parameter there becomes the name here|
|name|string|true|none|The name of the exchange.|
|private|boolean|true|none|Whether this exchange is private (has apiKey) or public (no apiKey)|
|enableRateLimit|boolean|true|none|Whether to enable the built in rate limiter or not. The built in rate limiter is an approximation of the actual exchange's limit. To have a more accurate rate limiting, set this to false and implement the rate limiter on your client|
|countries|[string]|true|none|The list of countries where this exchange is a member of|
|rateLimit|integer|false|none|A request rate limit in milliseconds. Specifies the required minimal delay between two consequent HTTP requests to the same exchange. If enableRateLimit is set to false, this would be ignored.|
|twofa|boolean|false|none|Whether to enable two factor authentication or not|
|has|[ExchangeHasCapabilities](#schemaexchangehascapabilities)|false|none|none|
|urls|object|false|none|Collection of URLs this exchange has|

<h2 id="tocStickerresponse">TickerResponse</h2>

<a id="schematickerresponse"></a>

```json
{
  "symbol": "string",
  "timestamp": 0,
  "datetime": "2019-04-25T18:17:25Z",
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
|CORS|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|publicAPI|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|privateAPI|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|cancelOrder|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|cancelOrders|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|createDepositAddress|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|createOrder|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|createMarketOrder|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|createLimitOrder|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|editOrder|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchBalance|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchBidsAsks|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchClosedOrders|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchCurrencies|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchDepositAddress|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchFundingFees|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchL2OrderBook|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchMarkets|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchMyTrades|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchOHLCV|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchOpenOrders|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchOrder|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchOrderBook|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchOrderBooks|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchOrders|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchTicker|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchTickers|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchTrades|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchTradingFees|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|fetchTradingLimits|[ExchangeCapability](#schemaexchangecapability)|true|none|none|
|withdraw|[ExchangeCapability](#schemaexchangecapability)|true|none|none|

<h2 id="tocSexchangeconfig">exchangeConfig</h2>

<a id="schemaexchangeconfig"></a>

```json
{
  "id": "string",
  "apiKey": "string",
  "secret": "string",
  "enableRateLimit": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this exchange.|
|apiKey|string|false|none|The API key you got from the exchange itself. This with the secret is what will allow you to access the exchange|
|secret|string|false|none|The Secret key you got from the exchange itself. This with the apiKey is what will allow you to access the exchange|
|enableRateLimit|boolean|false|none|Whether to enable the built in rate limiter or not. The built in rate limiter is an approximation of the actual exchange's limit. To have a more accurate rate limiting, set this to false and implement the rate limiter on your client|

<h2 id="tocSorderplacement">orderPlacement</h2>

<a id="schemaorderplacement"></a>

```json
{
  "symbol": "string",
  "type": "market",
  "side": "buy",
  "amount": 0,
  "price": 0,
  "params": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|The currency pair (base/quote) of the order to be created|
|type|[OrderType](#schemaordertype)|true|none|Whether this is a 'market' order or a 'limit' order|
|side|[Side](#schemaside)|true|none|Wether this is a bid or ask (i.e. buy or sell) order|
|amount|number|true|none|The amount of currency pair's base that we want to buy or sell|
|price|number|false|none|The buying price or the selling price in terms of the quote. Price is needed for market orders and ignored in limit orders|
|params|object|false|none|Exchange specific parameters|

