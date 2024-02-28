function currentEvent(name, cell) {
    if(getCookie("lang") == "ES")
        eventAndalucia(name, cell);
}

function eventAndalucia(name, cell) {
    const duelCells = document.getElementsByClassName("duel-cell");
    const pkmnNames = document.getElementsByClassName("pkmnName");
    const pokedexEntry = document.getElementsByClassName("pkmnPokedex");

    var changed = false;
    name = name.charAt(0) + name.toLowerCase().slice(1);

    switch(name.toUpperCase()) {
        case "VULLABY":
        case "MANDIBUZZ":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/tmNwixQ.png')";
            pokedexEntry[cell].innerHTML = "En la Sierra de Cádiz habitan las colonias de " + name + " más grandes de Europa, y es muy común verlos en busca de alimento.";
            changed = true;
            break;
        case "FINIZEN":
        case "PALAFIN":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/4fwnpou.png')";
            pokedexEntry[cell].innerHTML = "Mucha gente acude a Tarifa (Cádiz) sólo para verlos en su hábitat natural: las dulces aguas del Estrecho de Gibraltar.";
            changed = true;
            break;
        case "KECLEON":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/Tvu5A5l.png')";
            pokedexEntry[cell].innerHTML = "Casi la totalidad de la población española de Kecleon se encuentra en la comarca de Axarquía (Málaga), dando lugar a varios programas para su preservación.";
            changed = true;
            break;
        case "SHINX":
        case "LUXIO":
        case "LUXRAY":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/99KzyeN.png')";
            pokedexEntry[cell].innerHTML = "Estuvo en peligro de extinción, pero tras muchos esfuerzos de recuperación, hoy día existen colonias con centenares de ejemplares como la de Sierra Morena (Jaén).";
            changed = true;
            break; 
        case "CLODSIRE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/jg0qNpi.png')";
            pokedexEntry[cell].innerHTML = "Aunque antes residían en toda España, cada vez es menos común verlos en las regiones orientales. Residen, sobre todo, en charcas fangosas como las de Doñana.";
            changed = true;
            break;
        case "TURTWIG":
        case "GROTLE":
        case "TORTERRA":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/bvaL2Vq.png')";
            pokedexEntry[cell].innerHTML = "Sólo existe una población de " + name + " en Andalucía, situada en la región del Levante Almeriense, amenazada por el urbanismo.";
            changed = true;
            break;
        case "SKIDDO":
        case "GOGOAT":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/Qgtp0ig.png')";
            pokedexEntry[cell].innerHTML = "Aunque son más frecuentes de ver en sierras malagueñas como la de las Nieves, también se han avistado en sus costas, algo que se creía impensable.";
            changed = true;
            break;
        case "TEPIG":
        case "PIGNITE":
        case "EMBOAR":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/3jRVlif.png')";
            pokedexEntry[cell].innerHTML = "Su población en el Cabo de Gata (Almería) ha aumentado tanto, que se han tenido que adoptar medidas para controlarlos.";
            changed = true;
            break;
        case "FLAMIGO":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/WXHVyhO.png')";
            pokedexEntry[cell].innerHTML = "El Parque de Doñana recibe, cada primavera y verano, a miles de especies de Flamigo procedentes de todo el mundo para descansar en la provincia de Huelva.";
            changed = true;
            break;
        case "BARBOACH":
        case "WHISCASH":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/PW0hEYU.png')";
            pokedexEntry[cell].innerHTML = "Antes vivían en regiones con mucha actividad sísmica, pero ahora son exclusivos a ríos andaluces como el Guadalquivir, donde llevan una vida más tranquila.";
            changed = true;
            break;
        case "CRAMORANT":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/lOQFkfL.png')";
            pokedexEntry[cell].innerHTML = "Es muy común verlos descansar en las rocas del Parque de los Toruños, en Cádiz, tras una larga sesión de pesca en las aguas de la Bahía de Cádiz.";
            changed = true;
            break;
        case "CETODDLE":
        case "CETITAN":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/xx4UGzo.png')";
            pokedexEntry[cell].innerHTML = "Antes eran ballenas, pero evolucionaron para adaptarse al terreno nevado. Cierto entrenador originario de Sierra Nevada se encarga de cuidarlos para asegurar su supervivencia.";
            changed = true;
            break;
        case "LECHONK":
        case "OINKOLOGNE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/OefTEG3.png')";
            pokedexEntry[cell].innerHTML = "Su carne es un manjar a tal punto que existe una feria en la localidad de Cardeña, en Córdoba, dedicada a ésta.";
            changed = true;
            break;
        case "ZUBAT":
        case "GOLBAT":
        case "CROBAT":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/I1ofhLw.png')";
            pokedexEntry[cell].innerHTML = "La mayoría de los " + name + " de la península se asentaron en una cueva de la localidad de Zuheros, en Córdoba, convirtiéndola en una atracción turística.";
            changed = true;
            break;
        case "NICKIT":
        case "THIEVUL":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/CRlsUiE.png')";
            pokedexEntry[cell].innerHTML = "Prefieren lugares donde ser solitarios como la Sierra de Castril, en Granada, para poder ser discretos a la hora de robar alimento a otras especies.";
            changed = true;
            break;
        case "MILTANK":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/VoNy73c.png')";
            pokedexEntry[cell].innerHTML = "Son criados y alimentados en el Valle de los Pedroches, en Córdoba, donde su leche rica en nutrientes se distribuye a todo el país.";
            changed = true;
            break;
        case "SPRIGATITO":
        case "FLORAGATO":
        case "MEOWSCARADA":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/g0rtvJt.png')";
            pokedexEntry[cell].innerHTML = "El barrio del Albaicín, en Granada, contiene grandes poblaciones de estos felinos que, cuando crecen habituados a los turistas, saben entretenerlos con sus trucos de magia y movimientos hipnóticos.";
            changed = true;
            break;
        case "SPEWPA":
        case "VIVILLON":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/JQlwTj4.png')";
            pokedexEntry[cell].innerHTML = "Sierra Nevada, además de ser famosa por sus especies de tipo Hielo, también contiene la mayor diversidad de " + name + " de todo el país.";
            changed = true;
            break;
        case "DUCKLETT":
        case "SWANNA":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/y1v4uvW.png')";
            pokedexEntry[cell].innerHTML = "El bello plumaje de los " + name + " del parque sevillano Infanta Elena le dan el toque de glamour a este popular retiro de la capital andaluza.";
            changed = true;
            break;
        case "TYMPOLE":
        case "PALPITOAD":
        case "SEISMITOAD":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/2CpZvzf.png')";
            pokedexEntry[cell].innerHTML = "Un proyecto de regeneración de charcas en el parque sevillano del Alamillo ha logrado que Pokémon anfibios amenazados como los " + name + " lo hayan elegido como su nuevo hábitat.";
            changed = true;
            break;
        case "RUFFLET":
        case "BRAVIARY":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/Zw31ffW.png')";
            pokedexEntry[cell].innerHTML = "La sierra jienense de Andújar contiene la mayor población andaluza y controlada de " + name + ", una especie amenazada y cómoda en el clima templado de Jaén.";
            changed = true;
            break;
        case "WISHIWASHI":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/6MaZTFQ.png')";
            pokedexEntry[cell].innerHTML = "Son muy comunes como ingredientes para los espetos malagueños, aunque cada vez adoptan estrategias más extremas para evitar ser pescados en masa.";
            changed = true;
            break;
        case "SILICOBRA":
        case "SANDACONDA":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/7ub0KZJ.png')";
            pokedexEntry[cell].innerHTML = "Es el principal depredador en el Desierto de Tabernas almeriense. Activo durante el día, es capaz de alimentarse de su propia especie si es necesario.";
            changed = true;
            break;
        case "PONYTA":
        case "RAPIDASH":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/uUOrEu4.png')";
            pokedexEntry[cell].innerHTML = "Los " + name + " son autóctonos de la Provincia de Huelva, y son la raza equina más antigua de Europa. Su cuerpo en llamas es producto de la adaptación al calor extremo andaluz.";
            changed = true;
            break;
        case "SMOLIV":
        case "DOLLIV":
        case "ARBOLIVA":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/iJkvxqs.png')";
            pokedexEntry[cell].innerHTML = "Casi el 80% de la superficie agrícola de Jaén se destina al cultivo de " + name + ". La aceituna de su cabeza y su aceite son un manjar a nivel global.";
            changed = true;
            break;
        case "BRAMBLIN":
        case "BRAMBLEGHAST":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/AisCrCb.png')";
            pokedexEntry[cell].innerHTML = "Son casi estrellas de cine, ya que aparecen en casi todas las películas western que se graban en el Desierto de Tabernas, en Almería.";
            changed = true;
            break;
        case "SUNKERN":
        case "SUNFLORA":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/FC7MbVw.png')";
            pokedexEntry[cell].innerHTML = "No eran muy comunes ni populares, pero desde que un artista almeriense decidió incorporarlos en su obra, se pueden encontrar más a menudo en toda la región.";
            changed = true;
            break;
        case "CHERUBI":
        case "CHERRIM":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/S25jLdG.png')";
            pokedexEntry[cell].innerHTML = "Coria del Rio, en Sevilla, celebra anualmente la tradición japonesa de la floración del cerezo, en la que " + name + " tiene especial protagonismo.";
            changed = true;
            break; 
        case "FLABEBE":
        case "FLOETTE":
        case "FLORGES":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/sQ1NOKQ.png')";
            pokedexEntry[cell].innerHTML = "Este Pokémon decora gran parte de los famosos patios cordobeses, cuya belleza los ha convertido en Patrimonio de la Humanidad.";
            changed = true;
            break; 
        case "KABUTO":
        case "KABUTOPS":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/a9vfLai.png')";
            pokedexEntry[cell].innerHTML = "La alta presencia de " + name + " en el río Tinto, en Huelva, inicia un proceso de oxidación de todos los minerales aledaños, lo que proporciona al río su característico color rojo.";
            changed = true;
            break; 
        case "EXEGGCUTE":
        case "EXEGGUTOR":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/1sKBeK7.png')";
            pokedexEntry[cell].innerHTML = "La forma Alola de Exeggutor era muy común de ver en las zonas urbanas gaditanas, pero dejaron de hacerse ver ya que las fuertes ráfagas de viento dañaban su cuerpo.";
            changed = true;
            break; 
        case "DWEBBLE":
        case "CRUSTLE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/Z9nUjIv.png')";
            pokedexEntry[cell].innerHTML = "Al ser enemigo natural de tantos Pokémon, ha encontrado su hogar en el Tajo de Ronda malagueño, donde pasa desapercibido al ser similares a los sedimentos de sus paredes.";
            changed = true;
            break;
        case "ROLYCOLY":
        case "CARKOL":
        case "COALOSSAL":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/kbM9fo6.png')";
            pokedexEntry[cell].innerHTML = "El valle cordobés del Guadiato era antaño una importante zona minera. Aún se conservan explotaciones, por lo que es común ver " + name + " campando a sus anchas.";
            changed = true;
            break;
        case "CARBINK":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/IBUt8X7.png')";
            pokedexEntry[cell].innerHTML = "En 1999, una expedición descubrió en Almería la segunda geoda más grande del mundo. Es la única zona de la región donde habitan los Carbink.";
            changed = true;
            break;
        case "TYRUNT":
        case "TYRANTRUM":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/9jHYK8V.png')";
            pokedexEntry[cell].innerHTML = "Se dejan ver en muy raras ocasiones, pero las grandes huellas que dejan a su paso se han convertido en un atractivo turístico en Santisteban del Puerto (Jaén).";
            changed = true;
            break;
        case "MINCCINO":
        case "CINCCINO":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/658lKwZ.png')";
            pokedexEntry[cell].innerHTML = "Se dice que el famoso Tornillo del Torcal en Antequera (Málaga) fue obra de un " + name + " hace miles de años, en un intento de ordenar todas las piedras de su paraje natural.";
            changed = true;
            break;
        case "TOEDSCOOL":
        case "TOEDSCRUEL":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/d7n3GuV.png')";
            pokedexEntry[cell].innerHTML = "La Sierra Norte de Sevilla contiene la mayor colección de fósiles de " + name + " de Europa, Pokémon que aún es muy común de encontrar corriendo por dicha zona.";
            changed = true;
            break;
        case "SANDYGAST":
        case "PALOSSAND":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/E5nMRiP.png')";
            pokedexEntry[cell].innerHTML = "Se dice que los " + name + " tan comunes en las Dunas de Bolonia en Tarifa (Cádiz) contienen los espíritus de los antiguos habitantes de Baelo-Claudia, cuyas ruinas son visitables.";
            changed = true;
            break;
        case "WINGULL":
        case "PELIPPER":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/biVQ7Tq.png')";
            pokedexEntry[cell].innerHTML = "Se ven más en la playa gaditana de La Barrosa. Se alimentan de peces pequeños como Finneon, aunque no tienen miedo en robarles la comida a los turistas despistados.";
            changed = true;
            break;
        case "STONJOURNER":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/c2MVJp7.png')";
            pokedexEntry[cell].innerHTML = "A los Stonjourner les gusta juntarse para formar círculos o pasillos. El Dolmen de Soto, en Trigueros (Huelva) es el más importante que han construido en la región.";
            changed = true;
            break;
        case "TIRTOUGA":
        case "CARRACOSTA":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/71RzNw7.png')";
            pokedexEntry[cell].innerHTML = "Los " + name + " se dejan ver mucho por playas granadinas como la del Peñón de Salobreña, atraídos por sus profundas aguas y arena de guijarros.";
            changed = true;
            break;
        case "DIGLETT":
        case "DUGTRIO":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/gdUuy2O.png')";
            pokedexEntry[cell].innerHTML = "En las Cárcavas de Marchal (Granada), humanos y " + name + " han aunado fuerzas durante años para cubrir la zona de túneles y viviendas a modo de cuevas para personas y Pokémon.";
            changed = true;
            break;
        case "SKRELP":
        case "DRAGALGE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/JWyzpDT.png')";
            pokedexEntry[cell].innerHTML = "Una investigación de la Universidad de Cádiz descubrió la existencia de este Pokémon en las costas andaluzas, oculto entre las algas del mar.";
            changed = true;
            break; 
        case "PORYGON":
        case "PORYGON-Z":
        case "PORYGON2":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/bHunjVI.png')";
            pokedexEntry[cell].innerHTML = "La Universidad de Granada adquirió múltiples unidades de " + name + " para sus investigaciones en Inteligencia Artificial, y ahora es común verlos cerca de sus facultades.";
            changed = true;
            break;
        case "MUDBRAY":
        case "MUDSDALE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/tViCKi0.png')";
            pokedexEntry[cell].innerHTML = "Desde los años 60, este Pokémon se considera parte del transporte público de Mijas, en Málaga, existiendo aparcamientos especiales para ellos.";
            changed = true;
            break;
        case "LITWICK":
        case "LAMPENT":
        case "CHANDELURE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/AytUBaT.png')";
            pokedexEntry[cell].innerHTML = "Las hipnóticas llamas de " + name + " decoran procesiones e iglesias durante toda la Semana Santa Sevillana. Toda la región venera enormemente a este Pokémon.";
            changed = true;
            break;
        case "LITLEO":
        case "PYROAR":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/UJoFlA3.png')";
            pokedexEntry[cell].innerHTML = "Este Pokémon es un símbolo regional, y se representa junto a Hércules en su escudo. Dicho símbolo cuenta con múltiples esculturas en toda la región.";
            changed = true;
            break;
        case "SNOVER":
        case "ABOMASNOW":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/giG19PM.png')";
            pokedexEntry[cell].innerHTML = "Aunque vive en zonas concretas de Sierra Nevada, su grito es una seña de identidad de la región, al punto que los andaluces lo han convertido en una muletilla de su día a día.";
            changed = true;
            break;
        case "QUAXLY":
        case "QUAXWELL":
        case "QUAQUAVAL":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/mJxUU7F.png')";
            pokedexEntry[cell].innerHTML = "Cuando " + name + " crece, pasa a ser un elemento fundamental del Carnaval de Cádiz, animando a los gaditanos a disfrazarse, bailar y cantar de forma extravagante.";
            changed = true;
            break;
        case "AUDINO":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/YdSXFqH.png')";
            pokedexEntry[cell].innerHTML = "El alcázar de Jerez (Cádiz) conserva en perfecto estado su antigua farmacia municipal, en parte gracias a la encomiable labor de los Audino.";
            changed = true;
            break;
        case "RHYHORN":
        case "RHYDON":
        case "RHYPERIOR":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/Vll6VTh.png')";
            pokedexEntry[cell].innerHTML = "Antes de evolucionar, los Rhyhorn se entrenan para carreras en el Gran Hipódromo de Dos Hermanas (Sevilla), imitando una tradición de la región de Kalos.";
            changed = true;
            break;
        case "YAMASK":
        case "COFAGRIGUS":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/HJMxRPc.png')";
            pokedexEntry[cell].innerHTML = "Cuentan las leyendas que quien ose profanar el sepulcro de los Reyes Católicos, en la Catedral de Granada, será momificado por un Cofagrigus y transformado en Yamask.";
            changed = true;
            break;
        case "PATRAT":
        case "WATCHOG":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/yKbZxas.png')";
            pokedexEntry[cell].innerHTML = "Antaño se utilizaban como fieles vigilantes en las torres vigía andaluzas como la famosa Torre del Oro, en Sevilla, dada su desarrollada vista.";
            changed = true;
            break;
        case "SMEARGLE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/JYZ90Z3.png')";
            pokedexEntry[cell].innerHTML = "Últimamente, se está aumentando la vigilancia en los yacimientos rupestres de la provincia de Jaén ya que los Smeargle los confunden con lugares donde pueden pintar.";
            changed = true;
            break;
        case "SHUPPET":
        case "BANETTE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/UvQXoJV.png')";
            pokedexEntry[cell].innerHTML = "Se dice que los muñecos que quedaron abandonados tras el cierre del Tivoli World, en Benalmádena (Málaga) se convirtieron en " + name + " llenos de rencor por los humanos.";
            changed = true;
            break;
        case "PHANTUMP":
        case "TREVENANT":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/2ydq1UW.png')";
            pokedexEntry[cell].innerHTML = "Aunque se han registrado apariciones de 'niños fantasma' en el abandonado Hospital Manuel Lois de Huelva, siempre se concluye que son, en realidad, unas crías de este Pokémon.";
            changed = true;
            break;
        case "MILCERY":
        case "ALCREMIE":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/WaSaEyq.png')";
            pokedexEntry[cell].innerHTML = "Las famosas fresas de Huelva son un añadido esencial a los pasteles que se preparan con la ayuda de este Pokémon.";
            changed = true;
            break;
        case "ORICORIO":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/N1DvGpI.png')";
            pokedexEntry[cell].innerHTML = "Se trata de un Pokémon clave en la cultura andaluza. Su pasión y destreza a la hora de bailar impresionan hasta a los más veteranos del flamenco andaluz.";
            changed = true;
            break;
        case "LILLIPUP":
        case "HERDIER":
        case "STOUTLAND":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/m7o3REU.png')";
            pokedexEntry[cell].innerHTML = "Muchos devotos eligen a Stoutland como montura para la Romería de El Rocío, ya que su exquisito olfato le permite evitar obstáculos que pueden dañar las carretas.";
            changed = true;
            break;
        case "SHROODLE":
        case "GRAFAIAI":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/5nnjK9D.png')";
            pokedexEntry[cell].innerHTML = "Muchos residentes de Baza (Granada) llevan a " + name + " a su popular fiesta del Cascamorras, donde deben cubrir a un habitante de la vecina Guadix en pintura negra.";
            changed = true;
            break;
        case "TAUROS":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/pFaUvRF.png')";
            pokedexEntry[cell].innerHTML = "Sus colas se consideran un auténtico manjar en la región, siendo el plato más popular el rabo de toro al estilo cordobés.";
            changed = true;
            break;
        case "INKAY":
        case "MALAMAR":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/QEsZ2cF.png')";
            pokedexEntry[cell].innerHTML = "Aunque normalmente se preparan con ternera, las albóndigas hechas con carne de " + name + " son una delicia, sobre todo en la provincia de Huelva.";
            changed = true;
            break;
        case "CAPSAKID":
        case "SCOVILLAIN":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/goQr1GX.png')";
            pokedexEntry[cell].innerHTML = "Les gusta infiltrarse en los cultivos de pimientos de la región, dando una sorpresa picante a quienes tomen un gazpacho preparado con sus pimientos.";
            changed = true;
            break;
        case "BUNNELBY":
        case "DIGGERSBY":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/liPZmNp.png')";
            pokedexEntry[cell].innerHTML = "Aunque su carne no es especialmente popular en la región, los almerienses la han hecho parte de su gastronomía gracias a sus gurullos con conejo.";
            changed = true;
            break;
        case "FIDOUGH":
        case "DACHSBUN":
            duelCells[cell].style.backgroundImage = "url('https://i.imgur.com/UaxGO1X.png')";
            pokedexEntry[cell].innerHTML = "El pan horneado gracias a este Pokémon destaca sobre todo en Antequera (Málaga), por sus molletes, y en Alfacar (Granada).";
            changed = true;
            break; 
    }

    if(changed) {
        pkmnNames[cell].style.filter = "drop-shadow(0px 0px 5px #111)";
        duelCells[cell].style.backgroundSize = "cover";
    }
}