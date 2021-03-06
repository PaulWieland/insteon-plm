# Insteon Powerlinc Modem
[![Actions Status](https://github.com/apearson/insteon-plm/workflows/Continuous%20Integration/badge.svg)](https://github.com/apearson/insteon-plm/actions)

## Overview
Insteon PLM is a TypeScript/JavaScript library for the Insteon PowerLinc Modem family of devices.  This library's goal is to allow easy access to the the PowerLinc Modem and through the PowerLinc Modem allow easy programmatic access to the Insteon ecosystem of devices. 

## Supported Device List
[Insteon USB Modem Interface (2413U)](https://www.smarthome.com/powerlinc-modem-insteon-2413u-usb-interface-dual-band.html)   
[Insteon Portable USB Adapter (2448A7)](https://www.smarthome.com/insteon-2448a7-portable-usb-adapter.html)

## Demo Usage
```ts
/* Libaries */
import PowerLincModem from '../src/main';

async function main(){

  /* Setup */
  const modem = new PowerLincModem('/dev/tty.usbserial-A60336ZZ');

  modem.on('ready', async () => {

    console.debug('Ready');

    await modem.setConfig(true, true, true, true);

    console.log(modem.config);

    const res = await modem.sendStandardCommand([0x42,0x42,0x42], 0x0F, 0x13, 0x00);
      
    console.log('Message was successful', res.ack);
  });

  /* Printing incoming packets */
  modem.on('packet', data => {
    console.info('Packet:', data);
  });

}

main();
```

## Related Projects
[insteon-terminal](https://github.com/pfrommerd/insteon-terminal)

## Insteon Resources
[The Madreporite Nexus: Insteon Programming](http://www.madreporite.com/insteon/insteon.html)  
[Insteon FAQ](https://docs.google.com/document/pub?id=1XDrgT4RXY5CPzBJ9P2IgQ26Wk2pDuozrmaimeN_TlSo#id.oewdiu6hy6cl)


