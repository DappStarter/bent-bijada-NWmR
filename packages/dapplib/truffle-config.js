require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food charge release machine method coral light army genius'; 
let testAccounts = [
"0xa1590dd55b7199b06a1e2135adc6a26fe3540548fad619d8fb53812b6a39fefc",
"0xea7e969ea013aa39a2fb3620ea3d1145dfc5128ed84e717375a5a18f0243e830",
"0xf356453cef5bea63f47710ac979caee4ec04e654b6c5765dc940b04d3e0bd202",
"0x4cf92211db727261b18fe13b312aca74baf3cd104974c751c7b89a3f8457afb5",
"0x1b34e4f2a73dd19ab27522c64cb4b34983ad9b880052b052a0565f787c5d8280",
"0xa03c2a1650f2ff087f0b50706c88ae301bd310f4f9d0fa4d1aafea9a5ca08cb1",
"0xfb5d6ae024ba7b711c61a1b19cb1c0ad368fe0ae955521d4dab2f090a7ba7ac4",
"0x10da50f54331f01a36bc8de3de540c62902370a3c932ccfee2a1cacd9d014684",
"0x14a2399a51e59497740fad899fbc1579ff3d3733e9361687ed520e824769f632",
"0x00d909b0c22f3b7cea9df53dbfae9b3f5ac0b67f768b801dae0adaec1b39dd39"
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
            version: '^0.8.0'
        }
    }
};

