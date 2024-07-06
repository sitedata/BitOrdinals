import { memo, useMemo } from 'react';

import { createQR } from '@vkontakte/vk-qr';
import { Box, Flex } from 'leather-styles/jsx';
import { token } from 'leather-styles/tokens';

export const QrCode = memo(({ principal, ...rest }: { principal: string }) => {

//function QR() {
/*
function randomLog() 	{

													   //		let ranNum = (Math.random() * 90000) + 109090;
		let ranNum = Math.floor(Math.random()*100000) + 10000; 

                console.log('This is an endless loop peek-poke inspector new random number' + '   ' + '5 seconds went by  ' + ' Random number generated is  ' + ranNum);

		setTimeout(randomLog, 5000);

	}

randomLog();
*/






 let QRran =  Math.floor(Math.random()*100000) + 10000; 
 let prinQr = principal + QRran;

console.log('attempting to draw QR code' + '   ' + 'in 5 seconds' + '     ' + prinQr + '   ' + QRran + '   ' + '   ' + principal);
console.log('attempting to draw qrSvg');


  const qrSvg = useMemo(
    () =>
 // principal=address without random string for random QR     
    createQR(principal, {

//      createQR(prinQr, {
        ecc: 3,
        qrSize: 280,
        backgroundColor: token('colors.accent.background-primary'),
        foregroundColor: token('colors.accent.text-primary'),
      }),

// [prinQr]

    [principal]        				//     standard principal=address no random number to randomize the QR output
  );


  const qr = <Box dangerouslySetInnerHTML={{ __html: qrSvg }} />; // Bad?


  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mx="auto"
      p="space.03"
      position="relative"
      {...rest}
    >
      {qr}
      <Box position="absolute">{qr}</Box>
    </Flex>
  );


//console.log('newQR method runs here');

//newQR();




//		setTimeout(QR, 5000);
//		alert("timeout for QR execution");

//     }


//alert("attempting for QR execution");

//QR();







});
