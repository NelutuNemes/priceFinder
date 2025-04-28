//test communication file 'index.html' with file 'data.js'
console.log("Start script 'data.js' link test !");

export const products =
[
  { id: "P001", name: "Ciment gri",type:"HOLCIM Structo 20kg 42,5", price: 18.00 },
  { id: "P002", name: "Ciment gri",type:"HOLCIM Extradur 20kg 52", price: 20.00 },
  { id: "P003", name: "Ciment gri",type:"CEMROM  20kg 42,5", price: 17.00 },
  { id: "P004", name: "Ciment gri",type:"CEMROM  40kg 42,5", price: 32.00 },
  { id: "P005", name: "Ciment gri",type:"ROMCIM  20kg 42,5", price: 17.00 },
  { id: "P006", name: "Ciment gri", type: "ROMCIM  40kg 42,5", price: 34.00 },
  
  { id: "P007", name: "Tenco",type:"HOLCIM  20kg", price: 17.00 },
  { id: "P008", name: "Multicem",type:"CEMROM  25kg", price: 20.00 },
  { id: "P009", name: "Multicem", type: "CEMROM  40kg", price: 32.00 },
  
  { id: "P010", name: "VAR", type: "20kg", price: 25.00 },
  
  { id: "P011", name: "Caramida", type: "T.30(palet 80 buc)", price: 480.00 },
  { id: "P012", name: "Caramida",type:"T.30(BUC)", price: 6.00 },
  { id: "P013", name: "Caramida",type:"T.12(palet 100 buc)", price: 600.00 },
  { id: "P014", name: "Caramida", type: "T.12(BUC)", price: 6.00 },
  
  { id: "P015", name: "BCA", type: "SOCERAM  (10x25x624)(Palet)", price: 1000.00 },
  { id: "P016", name: "BCA", type: "SOCERAM  (10x25x624)(BUC)", price: 10.00 },
  { id: "P017", name: "BCA", type: "SOCERAM  (15x25x624)(Palet)", price: 1000.00 },
  { id: "P018", name: "BCA", type: "SOCERAM  (15x25x624)(BUC)", price: 15.00 },
  { id: "P019", name: "BCA", type: "SOCERAM  (20x25x624)(Palet)", price: 1000.00 },
  { id: "P020", name: "BCA", type: "SOCERAM  (20x25x624)(BUC)", price: 20.00 },
  { id: "P021", name: "BCA", type: "SOCERAM  (30x25x624)(Palet)", price: 1000.00 },
  { id: "P022", name: "BCA", type: "SOCERAM  (30x25x624)(BUC)", price: 30.00 },

    { id: "P023", name: "BOLTAR", type: "LEIER  (30x50x23)(Palet 40 buc)", price: 440.00 },
    { id: "P024", name: "BOLTAR", type: "LEIER  (30x50x23)(BUC)", price: 11.00 },
    { id: "P025", name: "BOLTAR", type: "LEIER  (25x50x23)(Palet 40 buc)", price: 400.00 },
    { id: "P026", name: "BOLTAR", type: "LEIER  (25x50x23)(BUC)", price: 10.00 },
    { id: "P027", name: "BOLTAR", type: "LEIER  (20x50x23)(Palet 60 buc)", price: 600.00 },
    { id: "P028", name: "BOLTAR", type: "LEIER  (20x50x23)(BUC)", price: 10.00 },
    { id: "P029", name: "BOLTAR", type: "LEIER  (15x50x23)(Palet 80 buc)", price: 720.00 },
    { id: "P030", name: "BOLTAR", type: "LEIER  (15x50x23)(BUC)", price: 9.00 },
    { id: "P031", name: "BOLTAR", type: "LEIER  (10x50x22)(Palet 80 buc)", price: 560.00 },
    { id: "P032", name: "BOLTAR", type: "LEIER  (10x50x22)(BUC)", price: 7.00 },
    { id: "P033", name: "BOLTAR", type: "LEIER  (25x25x23)(Palet 80 buc)", price: 800.00 },
    { id: "P034", name: "BOLTAR", type: "LEIER  (25x25x23)(BUC)", price: 10.00 },
    { id: "P033", name: "BOLTAR", type: "LEIER  (30x30x23)(Palet 60 buc)", price: 660.00 },
    { id: "P034", name: "BOLTAR", type: "LEIER  (30x30x23)(BUC)", price: 11.00 },

    { id: "P035", name: "BOLTAR", type: "RUCAS  (15x50x20)(Palet 80 buc)", price: 520.00 },
    { id: "P036", name: "BOLTAR", type: "RUCAS  (15x50x20)(BUC)", price: 6.50 },
    { id: "P037", name: "BOLTAR", type: "RUCAS  (20x50x20)(Palet 60 buc)", price: 420.00 },
    { id: "P038", name: "BOLTAR", type: "RUCAS  (20x50x20)(BUC)", price: 7.00 },
    { id: "P039", name: "BOLTAR", type: "RUCAS  (30x50x20)(Palet 40 buc)", price: 320.00 },
    { id: "P040", name: "BOLTAR", type: "RUCAS  (30x50x20)(BUC)", price: 8.00 },
    { id: "P041", name: "BOLTAR", type: "RUCAS  (20x20x22)(Palet 120 buc)", price: 960.00 },
    { id: "P042", name: "BOLTAR", type: "RUCAS  (20x20x22)(BUC)", price: 8.00 },
    { id: "P041", name: "BOLTAR", type: "RUCAS  (30x30x20)(Palet 60 buc)", price: 540.00 },
    { id: "P042", name: "BOLTAR", type: "RUCAS  (30x30x20)(BUC)", price: 9.00 },
    { id: "P171", name: "BOLTAR", type: "RUCAS  (25x50x20)(Palet 50 buc)", price: 400.00 },
    { id: "P172", name: "BOLTAR", type: "RUCAS  (25x50x20)(BUC)", price: 8.00 },

    { id: "P043", name: "PAVAJ", type: "LEIER  (Solido 6 GRI)(Palet 9,7 m² )", price: 533.50 },
    { id: "P044", name: "PAVAJ", type: "LEIER  (Solido 6 GRI)( m² )", price: 55.00 },
    { id: "P045", name: "PAVAJ", type: "LEIER  (Solido 6 ROSU)(Palet 9,7 m² )", price: 601.40},
    { id: "P046", name: "PAVAJ", type: "LEIER  (Solido 6 ROSU)( m² )", price: 62.00 },
    { id: "P047", name: "PAVAJ", type: "LEIER  (TAVERNA 6 GRI)(Palet 12 m² )", price: 780.00 },
    { id: "P048", name: "PAVAJ", type: "LEIER  (TAVERNA 6 GRI)( m² )", price: 65.00 },
    { id: "P049", name: "PAVAJ", type: "LEIER  (TAVERNA 6 ANTRACIT)(Palet 12 m² )", price: 780.00},
    { id: "P050", name: "PAVAJ", type: "LEIER  (TAVERNA 6 ANTRACIT)( m² )", price: 65.00 },
    { id: "P051", name: "PAVAJ", type: "LEIER  (PIATA 4 GRI)(Palet 17.28 m² )", price: 829.44 },
    { id: "P052", name: "PAVAJ", type: "LEIER  (PIATA 4 GRI)( m² )", price: 48.00 },
    { id: "P053", name: "PAVAJ", type: "LEIER  (PIATA 4 ROSU)(Palet 17.28 m² )", price: 1019.52},
    { id: "P054", name: "PAVAJ", type: "LEIER  (PIATA 4 ROSU)( m² )", price: 59.00 },
    { id: "P055", name: "PAVAJ", type: "LEIER  (VERDE 8 GRI)( BUC 40x40 )", price: 11.00 },
    { id: "P056", name: "PAVAJ", type: "LEIER  (VERDE 8 GRI)( m² )", price: 65.00 },

    { id: "P057", name: "PLASA SUDATA", type: "&#216;4mm -  (6x2m) (12 m² )", price: 60.00 },
    { id: "P058", name: "PLASA SUDATA", type: "&#216;6mm -  (6x2m) (12 m² )", price: 130.00 },
    { id: "P059", name: "PLASA SUDATA", type: "&#216;8mm -  (6x2m) (12 m² )", price: 250.00 },

    { id: "P060", name: "OTEL BETON", type: " OB &#216; 6mm - (p/Kg )", price: 5.50 },
    { id: "P061", name: "OTEL BETON", type: " PC52 &#216; 8mm - (p/bara 6ml)", price: 12.00 },
    { id: "P062", name: "OTEL BETON", type: " PC52 &#216; 10mm - (p/bara 6ml)", price: 18.00 },
    { id: "P063", name: "OTEL BETON", type: " PC52 &#216; 12mm - (p/bara 6ml)", price: 28.00 },
    { id: "P064", name: "OTEL BETON", type: " PC52 &#216; 14mm - (p/bara 6ml)", price: 40.00 },
    { id: "P065", name: "OTEL BETON", type: " PC52 &#216; 16mm - (p/bara 6ml)", price: 52.00 },
    { id: "P066", name: "OTEL BETON", type: " PC52 &#216; 18mm - (p/bara 6ml)", price: 68.00 },
    { id: "P067", name: "OTEL BETON", type: " PC52 &#216; 20mm - (p/bara 6ml)", price: 82.00 },
    { id: "P068", name: "SARMA NEAGRA", type: " &#216; 1.1 mm - (p/Kg)", price: 10.00 },
    { id: "P069", name: "SARMA NEAGRA", type: " &#216; 2.2 mm - (p/Kg)", price: 10.00 },
    { id: "P070", name: "SARMA ZINCATA", type: " &#216; 2.0 mm - (p/Kg)", price: 15.00 },

    { id: "P071", name: "IMPLETITURA GARD", type: " H 1.2m - (Sul : 10ml)", price: 150.00 },
    { id: "P072", name: "IMPLETITURA GARD", type: " H 1.5m - (Sul : 10ml)", price: 180.00 },
    { id: "P073", name: "IMPLETITURA RABITZ", type: " H 1.0m - (Sul : 24ml)", price: 180.00 },
    { id: "P074", name: "IMPLETITURA RABITZ", type: " H 1.0m - (p/ml)", price: 7.50 },
    { id: "P075", name: "PANOU BORDURAT", type: " 1.5 x 2.5m - (BUC)", price: 70.00 },
    { id: "P076", name: "PANOU BORDURAT", type: " 1.75 x 2.5m - (BUC)", price: 80.00 },
    { id: "P077", name: "PANOU BORDURAT", type: " 2.5 x 2.5m - (BUC)", price: 90.00 },

    { id: "P078", name: "TABLA ZINCATA", type: " 2.0 x 1.0 m (0.4mm) - (BUC)", price: 47.00 },
    { id: "P079", name: "TABLA CUTATA-ROSU", type: " 2.0 x 0.92 m (0.3mm) - (BUC)", price: 40.00 },
    { id: "P080", name: "TABLA CUTATA-MARO", type: " 2.0 x 0.92 m (0.3mm) - (BUC)", price: 40.00 },
    { id: "P081", name: "TABLA CUTATA-MARO", type: " 1.5 x 0.92 m (0.3mm) - (BUC)", price: 35.00 },

    { id: "P082", name: "ADEZIV F/G ", type: " CERESIT CM 9 (SAC)", price: 35.00 },
    { id: "P083", name: "ADEZIV F/G ", type: " CERESIT CM 11 (SAC)", price: 45.00 },
    { id: "P084", name: "ADEZIV F/G ", type: " MESTERICA (SAC)", price: 30.00 },
    { id: "P085", name: "GLET ", type: " CERESIT CT 126 (SAC)", price: 45.00 },
    { id: "P086", name: "GLET ", type: " CERESIT CT 127 (SAC)", price: 50.00 },
    { id: "P087", name: "GLET ", type: " MESTERICA (SAC)", price: 30.00 },
    { id: "P088", name: "ADEZIV BCA ", type: " TERMOFIX (SAC)", price: 25.00 },
    { id: "P089", name: "ADEZIV POLISTIREN ", type: " TERMOFIX (SAC)", price: 25.00 },
    { id: "P090", name: "SAPA - AUTONIVELANTA ", type: " SAPA (SAC)", price: 50.00 },

    { id: "P091", name: "OSB 3 ", type: "  Grosime: 6mm   (1.25 x 2.5m / buc) ", price: 45.00 },
    { id: "P092", name: "OSB 3 ", type: "  Grosime: 8mm   (1.25 x 2.5m / buc) ", price: 55.00 },
    { id: "P093", name: "OSB 3 ", type: "  Grosime: 10mm   (1.25 x 2.5m / buc) ", price: 65.00 },
    { id: "P094", name: "OSB 3 ", type: "  Grosime: 12mm   (1.25 x 2.5m / buc) ", price: 75.00 },

    { id: "P095", name: "LAMBRIU ", type: "  Grosime: 1.2mm/4ml   (pachet) ", price: 180.00 },
    { id: "P096", name: "LAMBRIU ", type: "  Grosime: 1.8mm/4ml   (buc) ", price: 25.00 },
    { id: "P097", name: "LAMBRIU ", type: "  Grosime: 1.8mm/3ml   (buc) ", price: 37.00 },
    { id: "P098", name: "DUSUMEA ", type: "  Grosime: 2.0mm/4ml   (buc) ", price: 50.00 },

    { id: "P099", name: "SINDRILA BITUMINOASA ", type: "  Solzi rosu (pachet) ", price: 100.00 },

    { id: "P100", name: "CHERESTEA RASINOASA ", type: " (P / METRU CUB) ", price: 1200.00 },

    { id: "P100", name: "CAFERI ", type: " 8 x 8 x 4m ", price: 31.00 },
 
    { id: "P101", name: "CAFERI ", type: " 10 x 10 x 4m ", price: 48.00 },
    { id: "P102", name: "CAFERI ", type: " 10 x 10 x 5m ", price: 60.00 },
    { id: "P103", name: "CAFERI ", type: " 10 x 10 x 6m ", price: 72.00 },

    { id: "P104", name: "CAFERI ", type: " 8 x 15 x 4m ", price: 58.00 },
    { id: "P105", name: "CAFERI ", type: " 8 x 15 x 5m ", price: 72.00 },
    { id: "P106", name: "CAFERI ", type: " 8 x 15 x 6m ", price: 87.00 },

    { id: "P107", name: "CAFERI ", type: " 10 x 15 x 4m ", price: 72.00 },
    { id: "P108", name: "CAFERI ", type: " 10 x 15 x 5m ", price: 90.00 },
    { id: "P109", name: "CAFERI ", type: " 10 x 15 x 6m ", price: 108.00 },

    { id: "P110", name: "GRINDA ", type: " 12 x 12 x 4m ", price: 70.00 },
    { id: "P111", name: "GRINDA ", type: " 12 x 12 x 5m ", price: 87.00 },
    { id: "P112", name: "GRINDA ", type: " 12 x 12 x 6m ", price: 104.00 },

    { id: "P113", name: "GRINDA ", type: " 15 x 15 x 4m ", price: 108.00 },
    { id: "P114", name: "GRINDA ", type: " 15 x 15 x 5m ", price: 135.00 },
    { id: "P115", name: "GRINDA ", type: " 15 x 15 x 6m ", price: 162.00 },

    { id: "P116", name: "LETE TIGLA ", type: " (3 x 5 x 4ml) -10 buc/legatura ", price: 100.00 },
    { id: "P117", name: "LETE TIGLA ", type: " (3 x 5 x 3ml) -10 buc/legatura ", price: 75.00 },
    { id: "P118", name: "LETE TIGLA ", type: " (3 x 5 x 2ml) -10 buc/legatura ", price: 50.00 },

    { id: "P119", name: "RIGLA ", type: " (5 x 5 x 4ml) - buc ", price: 20.00 },
    { id: "P120", name: "RIGLA ", type: " (5 x 7 x 4ml) - buc ", price: 28.00 },
    { id: "P121", name: "RIGLA ", type: " (5 x 10 x 4ml) - buc ", price: 40.00 },

    { id: "P122", name: "POLISTIREN ", type: "EPS 50 - bax ", price: 55.00 },
    { id: "P123", name: "POLISTIREN ", type: "EPS 80 - bax ", price: 65.00 },
    { id: "P124", name: "POLISTIREN ", type: "EPS 100 - bax ", price: 75.00 },

    { id: "P125", name: "TIGLA ", type: "FRANCIA - (BUC)", price: 6.00 },
    { id: "P126", name: "TIGLA ", type: "FRANCIA - (PALET,240 buc)", price: 1440.00 },
    { id: "P127", name: "TIGLA ", type: "VALAHIA - (BUC)", price: 4.50 },
    { id: "P128", name: "TIGLA ", type: "VALAHIA - (PALET,360 buc)", price: 1620.00 },
    { id: "P129", name: "TIGLA ", type: "TONDACH-SOLZI - (BUC)", price: 5.00 },
    { id: "P130", name: "TIGLA ", type: "TONDACH-SOLZI - (PALET,420 buc)", price: 2100.00 },
    { id: "P131", name: "COAMA ", type: "LEIER CLASICA F - (BUC)", price: 22.00 },
    { id: "P132", name: "COAMA ", type: "LEIER MARE R - (BUC)", price: 23.00 },
    { id: "P133", name: "RAMIFICATIE COAMA 3APE ", type: "LEIER- (BUC)", price: 120.00 },
    { id: "P134", name: "LATERALA ST / DR ", type: "LEIER- (BUC)", price: 27.00 },
    { id: "P135", name: "ELEMENT INCHIDERE COAMA", type: "LEIER- (BUC)", price: 10.00 },

    { id: "P136", name: "IPSOS ", type: "PENTRU COSTRUCTII (SAC/5KG)", price: 15.00 },

    { id: "P137", name: "NISIP ", type: "GALBEN ASPRU (0-4) - ( m&sup3; )", price: 150.00 },
    { id: "P138", name: "NISIP ", type: "NEGRU FIN (0-4) - ( m&sup3; )", price: 160.00 },
    { id: "P139", name: "SORT 2 ", type: "MARGARITAR (4-8) - ( m&sup3; )", price: 150.00 },
    { id: "P140", name: "SORT 3 ", type: "SORT (8-16)- ( m&sup3; )", price: 150.00 },
    { id: "P141", name: "SUBGABARIT FIN", type: "SUBGABARIT - ( m&sup3; )", price: 140.00 },
    { id: "P142", name: "SUBGABARIT MARE", type: "SUBGABARIT- ( m&sup3; )", price: 140.00 },
    { id: "P143", name: "PIATRA SPARTA", type: "HOLCIM - ( m&sup3; )", price: 140.00 },
    { id: "P144", name: "PIATRA SPARTA", type: "ALBASTRU-MUNTE- ( m&sup3; )", price: 200.00 },

    { id: "P145", name: "MOSAIC MARMURA", type: "MOSAIC - ( SAC/50Kg )", price: 40.00 },

    { id: "P146", name: "CARTON ASFALT", type: "CATRAN- ( SUL )", price: 70.00 },
    { id: "P143", name: "MEMBRANA BITUMINOASA", type: "HIDROIZOLATIE - ( SUL )", price: 150.00 },

    { id: "P144", name: "CAPAC STALP", type: "LEIER- ( 30x30cm - buc )", price: 35.00 },
    { id: "P145", name: "CAPAC STALP", type: "LEIER- ( 40x40cm - buc )", price: 45.00 },
    { id: "P144", name: "CAPAC ZID", type: "LEIER- ( 25x49cm - buc )", price: 30.00 },
    { id: "P145", name: "CAPAC ZID", type: "LEIER- ( 30x49cm - buc )", price: 35.00 },

    { id: "P146", name: "TEAVA ", type: "RECTANGULARA- ( 3x6cm - buc -6ml )", price: 120.00 },

    { id: "P147", name: "BUIANDRUGI ", type: "CERAMICI ARMATI- (ml )", price: 30.00 },
    
    { id: "P148", name: "CUIE ", type: "CONSTRUCTII- (Kg )", price: 10.00 },
    { id: "P149", name: "ELETROZI ", type: "SUDURA (Kg )", price: 15.00 },

    { id: "P150", name: "VATA MINERALA ", type: "TERMOIZOLATIE-Cal I (SUL )", price: 100.00 },
    { id: "P151", name: "VATA MINERALA ", type: "TERMOIZOLATIE-Cal II (SUL )", price: 50.00 },

    { id: "P152", name: "RIGOLE ", type: "LOCO (BUC - 0.5 ml)", price: 16.00 },
    { id: "P153", name: "RIGOLE ", type: "LEIER (BUC - 0.5 ml)", price: 20.00 },
    { id: "P154", name: "CAPAC RIGOLA ", type: "RIGOLA TRAFIC GREU (BUC)", price: 80.00 },

    { id: "P155", name: "FOLIE  ", type: " NYLON, ( ml)", price: 10.00 },
    { id: "P156", name: "FOLIE ", type: "ANTICONDENS, ( m&sup2; )", price: 4.50 },
    { id: "P157", name: "PLASA ", type: "ARMARE POLISTIREN ( m&sup2; )", price: 4.50 },

    { id: "P158", name: "ETRIER  ", type: " 15x15cm - buc", price: 2.00 },
    { id: "P159", name: "ETRIER  ", type: " 15x20cm - buc", price: 2.20 },
    { id: "P160", name: "ETRIER  ", type: " 20x20cm - buc", price: 2.50 },
    { id: "P161", name: "ETRIER  ", type: " 20x25cm - buc", price: 2.70 },
    { id: "P162", name: "ETRIER  ", type: " 25x25cm - buc", price: 3.00 },
    { id: "P163", name: "ETRIER  ", type: " 25x40cm - buc", price: 8.00 },

    { id: "P164", name: "BETON CONCASAT  ", type: " UMPLUTURA ( m&sup3; )", price: 100.00 },
    { id: "P165", name: "PAMANT  ", type: " EXCAVATIE ( m&sup3; )", price: 50.00 },

    { id: "P166", name: "ROLA  ", type: " FANTANA, ( buc)", price: 200.00 },
    { id: "P167", name: "CAPAC ROLA F", type: "Plin, ( buc )", price: 170.00 },
    { id: "P168", name: "CAPAC ROLA F", type: "Cu orificiu vizitare ( buc)", price: 240.00 },

    { id: "P169", name: "CARAMIDA Refract.", type: "26x12x6 ( buc)", price: 4.50 },
    { id: "P170", name: "MORTAR TENCUIRE", type: "MESTERICA ( SAC 30kg)",  price: 30.00 },






































































];
