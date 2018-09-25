var input;

input = prompt('Je bent in een woestijn beland. Je hebt een keuze tussen Links of Rechts','Links of Rechts')
if (input=='Links'){  
  document.write('Je bent in een woestijn beland. Je hebt een keuze tussen Links of Rechts')

	input = prompt('Links was veilig en je bent aangekomen in een verlaten stad en je moet slapen. Ga je slapen in Huis1 of Huis2','Huis1 of Huis2')
	if (input=='Huis2'){ 
	  document.write('Links was veilig en je bent aangekomen in een verlaten stad en je moet slapen.')

   		input = prompt('Huis2 was veilig. Je wilt de stad uit maar je kent de weg niet en je ziet een man ga je hem de weg vragen','Ja of Nee')
        if (input=='Ja'){	
		 document.write('Huis2 was veilig. Je wilt de stad uit maar je kent de weg niet en je ziet een man ga je hem de weg vragen')
	
			input = prompt('Hij brengt jou naar een busstation en geeft je zelfs geld voor de busreis. De bus gaat naar een vliegveld maar je heb geen geld en papieren om te vliegen ga je proberen te vliegen','Ja of Nee')
           if (input=='Nee'){ 
			 document.write('Hij brengt jou naar een busstation en geeft je zelfs geld voor de busreis. De bus gaat naar een vliegveld maar je heb geen geld en papieren om te vliegen ga je proberen te vliegen')

            	input = prompt('Je ziet een auto met sleutels der in ga je hem pakken om naar huis te gaan')
				if (input=='Ja'){
				 document.write('Je ziet een auto met sleutels der in ga je hem pakken om naar huis te gaan')

 	            	input = prompt('Onderweg naar huis zie je een politie controle ga je der op af of ga je wegrijden.','Der op af of Wegrijden')
					if (input=='erop af'){
					 document.write('Onderweg naar huis zie je een politie controle ga je der op af of ga je wegrijden.')
 	
 						input = prompt('Onderweg word je aangevallen ga je je hem vermoorden.')
						if (input=='Ja'){
						 document.write('Onderweg word je aangevallen ga je hem vermoorden.')

							input = prompt('Wat ga je met het lichaam, ga je hem verbranden en begraven of het lichaam laten liggen waar je hem heb vermoord')
							if (input=='Laten liggen'){
							 document.write('Wat ga je met het lichaam, ga je hem verbranden en begraven of het lichaam laten liggen waar je hem heb vermoord')

		         				input = prompt('De politie heeft DNA op het dode lichaam gevonden en je moet naar rechtbank ga je de waarheid vertellen of zwijgen')
								if (input=='zwijgen'){ 
                                 document.write('De politie heeft DNA op het dode lichaam gevonden en je moet naar rechtbank ga je de waarheid vertellen of zwijgen')

                          
	                    		 }else if(input=='vertellen'){
		 						alert('Omdat je toe heb gegeven dat je het heb gedaam moet je de gevangenis in.')
								}document.write('Omdat je toe heb gegeven dat je het heb gedaam moet je de gevangenis in.')

							}else if(input=='Verbranden'){
		 					alert('Onderweg naar het bos werd je aagehouden voor een algemeen controle en hebben het dode lichaam in jouw auto gevonden');
							}document.write('Onderweg naar het bos werd je aagehouden voor een algemeen controle en hebben het dode lichaam in jouw auto gevonden');

						}else if(input=='Nee'){
		 				alert('Hij heeft jouw vermoord')
						}document.write('Hij heeft jouw vermoord')

					}else if(input=='Wegrijden'){
		 			alert('Politie heeft jouw gezien dat je weg reed en heeft je opgepakt')
					}document.write('Politie heeft jouw gezien dat je weg reed en heeft je opgepakt')

				}else if(input == 'Nee' ){
		 		alert('Je steekt de weg over en je word aangereden daardoor ga je dood')
				}document.write('Je steekt de weg over en je word aangereden daardoor ga je dood')
	
			}else if(input=='Ja'){
			alert('je word opgepakt door de duane')			 
			}document.write('Je word opgepakt door de duane')

		}else if(input=='Nee'){
		alert('Omdat je hem de weg niet vroeg zit je vast in de stad en je gaat dood van de honger')
		}document.write('Omdat je hem de weg niet vroeg zit je vast in de stad en je gaat dood van de honger')

    }else if(input=='Huis1'){
	alert('In huis1 zit michel mayer en je gaat dood')
	}document.write('In huis1 zit michel mayer en je gaat dood')

}else if(input=='Rechts'){ 
alert('Rechts was een crocodil en je gaat dood')
}document.write('Rechts was een crocodil en je gaat dood')

	        
		


		