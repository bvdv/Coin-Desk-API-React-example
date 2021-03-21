# Coin-Desk-API-React-example
Coin Desk API &amp; Document analyse tool - React examples

Live demo - http://vps785969.ovh.net

Run code locally on Windows:
  - client/ - `npm run start`
  - server/ - `npm run devpm2`

Build
  - client/ - `npm run create`

Tests
  - client/ - `npm run testj`

Nginx requests limit for route - `/gethtml`
 - `limit_req_zone $binary_remote_addr zone=mylimit:10m rate=1r/s;`

NOTE: For application creation react-scripts and create-react-app are not allowed.
