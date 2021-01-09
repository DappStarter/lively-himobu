require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name reflect pizza pupil give praise army gas'; 
let testAccounts = [
"0x9ebc0a7889230d4d3579ad2f8c730a51b2373744f251bf306c66323b3ed2c302",
"0xea940f81c625458addd7caa74d2e77da33c76d9441dbb7d464912bd241946ed2",
"0x4d61b72ddd400aa665540dd09af3e0a1107f74d78d5f46bf9f26fcd8e921bcb1",
"0x3700126636d4f8d86368a3934098c84c3d14ceaa18060b79b68fd837a7fb3445",
"0xdb173f64cd2e03da4fa99c0a951651fd650a3b55b07322da926fe85305e7170e",
"0xdebd4fe37b694c89ce5c413e0b294b2c757114f5d5d6533bcd3f05390e663954",
"0x52a8216265ca3ed74076d8a752300f8cb2d896b719e733fe3219320e3e47a38b",
"0xe992725bd53b9b1d8b718c381fd90c974d1f8a2f35fce4dbea987712baf49daf",
"0x103679f070982178a966845b948d1439bcf74231f5a51de92d4702d9faa77817",
"0x9546f99575f12c2ea64ef31f69f4fc395ac43bf996cec66ab3e207cdf414a7a8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
