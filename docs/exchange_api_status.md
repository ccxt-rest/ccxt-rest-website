---
id: exchange_api_status
title: Exchange API Status
---

This section contains the list of all supported exchanges by `ccxt-rest` and the statuses of their APIs. It has two subsections - the "Legends" subsection which explains the statuses, and the "Exchange API Statuses" which contains the actual report.

The report below comes from `ccxt-rest`'s sanity tests which is executed on every build (_and at least once a day_). The sanity test goes through all supported exchanges by `ccxt-rest` and executes their APIs in order to figure out whether the API is working, or needs authentication, or is broken, etc.

As part of the report, we also specify when this report was generated (_Note: This date changes at least once a day because the sanity tests are executed at least once a day. Sometimes, several times in a singel day_).

## Legends

<table>
<thead>
    <tr>
        <td style="width:30%">Status</td>
        <td>Description</td>
    </tr>
</thead>
<tbody>
    <tr>
        <td><img src="https://img.shields.io/badge/Public%20API-green.svg" alt="Public API"></td>
        <td>API is working for exchange and does NOT need api key to be accessed</td>
    </tr>
    <tr>
        <td><img src="https://img.shields.io/badge/Private%20API-blue.svg" alt="Private API"></td>
        <td>API is working for exchange but needs API key to be accessed</td>
    </tr>
    <tr>
        <td><img src="https://img.shields.io/badge/Not%20Supported-yellow.svg" alt="Not Supported"></td>
        <td>CCXT-REST does NOT support this API for this exchange. Possibly because the exchange has no corresponding API for this</td>
    </tr>
    <tr>
        <td><img src="https://img.shields.io/badge/Error%3A%20Broken%20Integration-red.svg" alt="Broken Integration Error"></td>
        <td>The whole integration for this exchange is not working. Thus, none of CCXT-REST's API is working for this exchange right now</td>
    </tr>
    <tr>
        <td><img src="https://img.shields.io/badge/Error%3A%20Network-red.svg" alt="Network Error"></td>
        <td>Executing this API for this exchange could NOT be finished due to a network error</td>
    </tr>
    <tr>
        <td><img src="https://img.shields.io/badge/Error%3A%20Unexpected-red.svg" alt="Unexpected Error"></td>
        <td>While running this API against the exchange, an unexpected error has occurred.</td>
    </tr>
    <tr>
        <td><img src="https://img.shields.io/badge/n/a-grey.svg" alt="n/a"></td>
        <td>API could not be executed against the exchange because the pre-requisite has not been met. Possibly because we could not even connect to the exchange or we could NOT get a currency pair (_from the Market API_) which is required by this API</td>
    </tr>
    <tr>
        <td><img src="https://img.shields.io/badge/xyz-grey.svg" alt="xyz"></td>
        <td>API execution for this exchange resulted into status code `xyz`</td>
    </tr>
</tbody>
</table>

## Exchange API Statuses

_Note: All supported exchanges are listed below, but not all of their supported APIs are shown. We are still working on adding more of their APIs and their statuses_

<p id="lastUpdateDate"></p>

<p id="exchangeSummary"></p>

