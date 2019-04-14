---
title: CCXT REST
language_tabs:
  - shell: Shell
  - dart: Dart
  - go: Go
  - java: Java
  - javascript: Javascript
  - python: Python
  - ruby: Ruby
  - rust: Rust
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="ccxt-rest">CCXT REST v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://localhost:10010/">http://localhost:10010/</a>

* <a href="https://localhost:10010/">https://localhost:10010/</a>

Email: <a href="mailto:franz@see.net.ph">Support</a> 
License: <a href="https://github.com/franz-see/ccxt-rest/blob/master/LICENSE.txt">MIT</a>

<h1 id="ccxt-rest-default">Default</h1>

## list

<a id="opIdlist"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchanges \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchanges", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchanges");
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
  url: 'http://localhost:10010/exchanges',
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

r = requests.get('http://localhost:10010/exchanges', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchanges',
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
  "string"
]
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<h3 id="list-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## listIds

<a id="opIdlistIds"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName} \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}");
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
  url: 'http://localhost:10010/exchange/{exchangeName}',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}',
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
  "string"
]
```

<h3 id="listids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

<h3 id="listids-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## createExchange

<a id="opIdcreateExchange"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:10010/exchange/{exchangeName} \
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
    req, err := http.NewRequest("POST", "http://localhost:10010/exchange/{exchangeName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}");
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
  url: 'http://localhost:10010/exchange/{exchangeName}',
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

r = requests.post('http://localhost:10010/exchange/{exchangeName}', params={

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

result = RestClient.post 'http://localhost:10010/exchange/{exchangeName}',
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
|» id|body|string|true|none|
|» apiKey|body|string|false|none|
|» secret|body|string|false|none|
|» enableRateLimit|body|boolean|false|none|

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
  "twofa": true,
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

<aside class="success">
This operation does not require authentication
</aside>

## getOne

<a id="opIdgetOne"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId} \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}',
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
  "twofa": true,
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

<aside class="success">
This operation does not require authentication
</aside>

## deleteExchange

<a id="opIddeleteExchange"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:10010/exchange/{exchangeName}/{exchangeId} \
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
    req, err := http.NewRequest("DELETE", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}',
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

r = requests.delete('http://localhost:10010/exchange/{exchangeName}/{exchangeId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}',
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
  "twofa": true,
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

<aside class="success">
This operation does not require authentication
</aside>

## markets

<a id="opIdmarkets"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/markets \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/markets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/markets");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/markets',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/markets', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/markets',
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

<aside class="success">
This operation does not require authentication
</aside>

## orderBook

<a id="opIdorderBook"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orderBook?symbol=string \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orderBook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orderBook?symbol=string");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orderBook',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orderBook', params={
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

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orderBook',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/orderBook`

Get the markets of the exchange referenced by the exchangeName and exchangeId

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
  "datetime": "2019-04-14T03:40:14Z"
}
```

<h3 id="orderbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderBookResponse](#schemaorderbookresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## l2OrderBook

<a id="opIdl2OrderBook"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/l2OrderBook?symbol=string \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/l2OrderBook", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/l2OrderBook?symbol=string");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/l2OrderBook',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/l2OrderBook', params={
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

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/l2OrderBook',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/l2OrderBook`

Get the markets of the exchange referenced by the exchangeName and exchangeId

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
  "datetime": "2019-04-14T03:40:14Z"
}
```

<h3 id="l2orderbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[OrderBookResponse](#schemaorderbookresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## trades

<a id="opIdtrades"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades?symbol=string \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades?symbol=string");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades', params={
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

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/trades`

Get the trades of the exchange referenced by the exchangeName and exchangeId

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

<aside class="success">
This operation does not require authentication
</aside>

## ticker

<a id="opIdticker"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/ticker?symbol=string \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/ticker", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/ticker?symbol=string");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/ticker',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/ticker', params={
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

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/ticker',
  params: {
  'symbol' => 'string'
}, headers: headers

p JSON.parse(result)

```

`GET /exchange/{exchangeName}/{exchangeId}/ticker`

Get the ticker of the exchange referenced by the exchangeName and exchangeId

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
  "datetime": "2019-04-14T03:40:14Z",
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

<aside class="success">
This operation does not require authentication
</aside>

## balances

<a id="opIdbalances"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/balances \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/balances", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/balances");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/balances',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/balances', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/balances',
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

<aside class="success">
This operation does not require authentication
</aside>

## fetchOrders

<a id="opIdfetchOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders',
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
  "datetime": "2019-04-14T03:40:14Z",
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

<aside class="success">
This operation does not require authentication
</aside>

## fetchOpenOrders

<a id="opIdfetchOpenOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/open \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/open", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/open");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/open',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/open', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/open',
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
  "datetime": "2019-04-14T03:40:14Z",
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

<aside class="success">
This operation does not require authentication
</aside>

## fetchClosedOrders

<a id="opIdfetchClosedOrders"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/closed \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/closed", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/closed");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/closed',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/closed', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/orders/closed',
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
  "datetime": "2019-04-14T03:40:14Z",
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

<aside class="success">
This operation does not require authentication
</aside>

## fetchMyTrades

<a id="opIdfetchMyTrades"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades/mine \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades/mine", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades/mine");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades/mine',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades/mine', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/trades/mine',
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

<aside class="success">
This operation does not require authentication
</aside>

## createOrder

<a id="opIdcreateOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order \
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
    req, err := http.NewRequest("POST", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order',
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

r = requests.post('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order', params={

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

result = RestClient.post 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order',
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
  "datetime": "2019-04-14T03:40:14Z",
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

<aside class="success">
This operation does not require authentication
</aside>

## fetchOrder

<a id="opIdfetchOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId} \
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
    req, err := http.NewRequest("GET", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
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

r = requests.get('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
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
  "datetime": "2019-04-14T03:40:14Z",
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

<aside class="success">
This operation does not require authentication
</aside>

## cancelOrder

<a id="opIdcancelOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId} \
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
    req, err := http.NewRequest("DELETE", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
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

r = requests.delete('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/order/{orderId}',
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
  "datetime": "2019-04-14T03:40:14Z",
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

<aside class="success">
This operation does not require authentication
</aside>

## directCall

<a id="opIddirectCall"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:10010/exchange/{exchangeName}/{exchangeId}/_/{methodName} \
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
    req, err := http.NewRequest("POST", "http://localhost:10010/exchange/{exchangeName}/{exchangeId}/_/{methodName}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```java
URL obj = new URL("http://localhost:10010/exchange/{exchangeName}/{exchangeId}/_/{methodName}");
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
  url: 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/_/{methodName}',
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

r = requests.post('http://localhost:10010/exchange/{exchangeName}/{exchangeId}/_/{methodName}', params={

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

result = RestClient.post 'http://localhost:10010/exchange/{exchangeName}/{exchangeId}/_/{methodName}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /exchange/{exchangeName}/{exchangeId}/_/{methodName}`

Get the balances of the exchange referenced by the exchangeName and exchangeId

> Body parameter

```json
"string"
```

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
  "twofa": true,
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
|name|string|true|none|none|
|enableRateLimit|boolean|true|none|none|
|countries|[string]|true|none|none|
|rateLimit|number|false|none|none|
|twofa|boolean|false|none|none|
|has|[ExchangeHasCapabilities](#schemaexchangehascapabilities)|false|none|none|
|urls|object|false|none|none|

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
|id|string|true|none|none|
|symbol|string|true|none|none|
|base|string|true|none|none|
|quote|string|true|none|none|
|info|object|true|none|none|
|lot|number|true|none|none|
|limits|[Limits](#schemalimits)|true|none|none|
|precision|[Precision](#schemaprecision)|true|none|none|

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
|min|number|true|none|none|
|max|number|true|none|none|

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
|amount|number|true|none|none|
|price|number|true|none|none|

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
  "datetime": "2019-04-14T03:40:14Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bids|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|none|
|asks|[[OrderBookLevel](#schemaorderbooklevel)]|true|none|none|
|timestamp|number|false|none|none|
|datetime|string(date-time)|false|none|none|

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
|price|number|true|none|none|
|amount|number|false|none|none|

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
|id|string|false|none|none|
|info|object|true|none|none|
|timestamp|number(date-time)|false|none|none|
|symbol|string|true|none|none|
|side|string|true|none|none|
|price|number|true|none|none|
|amount|number|true|none|none|

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
  "datetime": "2019-04-14T03:40:14Z",
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
|symbol|string|true|none|none|
|timestamp|number|true|none|none|
|datetime|string(date-time)|true|none|none|
|high|number|true|none|none|
|low|number|true|none|none|
|bid|number|true|none|none|
|ask|number|true|none|none|
|vwap|number|true|none|none|
|close|number|true|none|none|
|last|number|true|none|none|
|baseVolume|number|true|none|none|
|quoteVolume|number|true|none|none|
|info|object|true|none|none|

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
|info|object|true|none|none|
|balances|[[BalanceInfo](#schemabalanceinfo)]|true|none|none|

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
|currency|string|true|none|none|
|free|number|true|none|none|
|used|number|true|none|none|
|total|number|true|none|none|

<h2 id="tocSorderresponse">OrderResponse</h2>

<a id="schemaorderresponse"></a>

```json
{
  "id": "string",
  "timestamp": 0,
  "datetime": "2019-04-14T03:40:14Z",
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
|id|string|true|none|none|
|timestamp|number|false|none|none|
|datetime|string(date-time)|false|none|none|
|symbol|string|false|none|none|
|type|string|false|none|none|
|side|string|false|none|none|
|price|number|false|none|none|
|amount|number|false|none|none|
|cost|number|false|none|none|
|filled|number|false|none|none|
|remaining|number|false|none|none|
|status|string|false|none|none|
|info|object|false|none|none|

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

