
var myLatLng = {lat: 2.65254, lng: 36.19088};
var marker;
var map;
var image;
var $j = jQuery.noConflict();


var myLatLng_Mathare;
var myLatLng_Korogocho;
var myLatLng_Kambiu;
var myLatLng_MaaiMahiu;
var myLatLng_Embu;
var myLatLng_Runyenjes;
var myLatLng_MtitoAndei;
var myLatLng_Emali;
var myLatLng_Mombasa;
var myLatLng_Nakuru;
var myLatLng_Kisumu;
var myLatLng_Jinja;
var myLatLng_Adama;

var mathare_marker;
var korogocho_marker;
var kambiu_marker;
var maaiMahiu_marker;
var embu_marker;
var runyenjes_marker;
var mtitoandei_marker;
var emali_marker;
var mombasa_marker;
var nakuru_marker;
var kisumu_marker;
var jinja_marker;
var adama_marker;


var adamaButton;
var emaliButton;
var embuButton;
var jinjaButton;
var kambiuButton;
var kisumuButton;
var korogochoButton;
var maaiButton;
var mombasaButton;
var mtitoButton;
var nakuruButton;
var runyenjesButton;


function someFunction() {
    var imgPath = window.imgpath;
    return imgPath;
}

function mathareImage() {
    var imgPath = window.mathare;
    return imgPath;
}

function korogochoImage() {
    var imgPath = window.korogocho;
    return imgPath;
}

function kambiuImage() {
    var imgPath = window.kambiu;
    return imgPath;
}

function maaiMahiuImage() {
    var imgPath = window.maaiMahiu;
    return imgPath;
}

function embuImage() {
    var imgPath = window.embu;
    return imgPath;
}

function runyenjesImage() {
    var imgPath = window.runyenjes;
    return imgPath;
}

function mtitAndeiImage() {
    var imgPath = window.mtitAndei;
    return imgPath;
}

function emaliImage() {
    var imgPath = window.emali;
    return imgPath;

}

function mombasaImage() {
    var imgPath = window.mombasa;
    return imgPath;
}

function nakuruImage() {
    var imgPath = window.nakuru;
    return imgPath;
}

function kisumuImage() {
    var imgPath = window.kisumu;
    return imgPath;
}

function jinjaImage() {
    var imgPath = window.jinja;
    return imgPath;
}

function adamaImage() {
    var imgPath = window.adama;
    return imgPath;
}


var mathareButton;



function m(){
    $j('#myModal').modal('show')
}

$j('#closemodal').click(function() {
    $j('#myModal').modal('hide');
    map.setZoom(6);
});

$j('#closemodal2').click(function() {
    $j('#myModal').modal('hide');
    map.setZoom(6);
});


// the smooth zoom function
function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 300); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
}

// the smooth zoom function
function smoothZoomOut (map, max, cnt) {
    if (cnt <= max) {
        return;
    }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt - 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
}

$j('#myModal').on('show.bs.modal', function () {
    $j('.modal .modal-body').css('overflow-y', 'auto');
    $j('.modal .modal-body').css('max-height', $j(window).height() * 0.7);
});

function initMap() {
    myLatLng_Mathare = {lat: -1.26172, lng: 36.84925};
    myLatLng_Korogocho = {lat: -1.25036, lng: 36.89094};
    myLatLng_Kambiu = {lat: -1.05844, lng: 37.12410};
    myLatLng_MaaiMahiu = {lat: -0.71904, lng: 36.43425};
    myLatLng_Embu = {lat: -0.53884, lng: 37.45964};
    myLatLng_Runyenjes = {lat: -0.42235, lng: 37.57210};
    myLatLng_MtitoAndei = {lat: -2.69173, lng: 38.16622};
    myLatLng_Emali = {lat: -2.07969, lng: 37.47314};
    myLatLng_Mombasa = {lat: -4.04348, lng: 39.66821};
    myLatLng_Nakuru = {lat: -0.30310, lng: 36.08003};
    myLatLng_Kisumu = {lat: -0.09170, lng: 34.76796};
    myLatLng_Jinja = {lat: 0.44786, lng: 33.20261};
    myLatLng_Adama = {lat: 8.52635, lng: 39.25833};

    myLatLng = {lat: 2.65254, lng: 36.19088};

    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoom: 6
    });
    image = {
        url: someFunction(),
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };


    mathareButton= function mathare(){
        map.setCenter(mathare_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Nairobi - Slum Mathare Valley</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image0a" src="img/mathare.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Mathare ist der 2. größte und älteste Slum in Nairobi. Der Name des Slums kommt von dem Fluß, der durch den Slum fließt. Mathare Valley (Mathare Tal) ist der Kernslum von Mathare. Er ist ca. 10 km lang und 300 m breit. In ihm leben schätzungsweise180.000 Einwohner. Der Slum ist bekannt für seine hohe Aids- und Mordrate. Besucht man ihn nachmittags, erlebt man viele betrunkene Einwohner.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">            Koordinator der Arbeit ist Morris, ein „trockener“ Alkoholiker mit einer großen Familie. Er wurde im Slum geboren.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Recovery – Gruppe ehemaliger Schnapsbrenner,</li>        <li>ambulante Beratung und ambulante Rehabilitation (Kurse mit je 10 Teilnehmern, der Kurs geht über 3 Monate mit täglichen Treffen),</li>        <li>3 Fussballteams für Kinder und Jugendliche,</li>        <li>1 Jugendgruppe für kriminell und sucht – Gefährdete,        </li>        <li>Gartenprojekt am Fluß Mathare.</li>        </ul>        </div>');
        document.getElementById("image0a").setAttribute("src",mathareImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    }




    adamaButton = function adama(){
        map.setCenter(adama_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Adama - Nazareth/Äthiopien</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image1a" src="img/adama.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Adama ist eine wachsende Stadt in Zentraläthiopien, sie hat jetzt über 300.000 Einwohner.  Äthopien ist noch ärmer als Kenia und Uganda. Hier gibt es viele Straßenkinder und Kinder armer Familien, die keine Schule besuchen können. Die Suchtproblematik ist offensichtlich, es gibt aber keine Hilfen.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator ist Silas. Silas ist Deutscher. Er ist mit Friye, einer Äthiopierin verheiratet. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Schulprojekt (Patenschaftsprogramm für mehr als 600 Kinder),</li>        <li>Beratungsarbeit Sucht (beginnend) ,</li>        <li>Straßenkinderarbeit,</li>        <li>1 Anlaufstelle mit Beratung.        </li>            </ul>        </div>');
        document.getElementById("image1a").setAttribute("src", adamaImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    }

    emaliButton = function emali(){
        map.setCenter(emali_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Emali</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image2a" src="img/emali.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Es ist eine wachsende Stadt. Sie lebt besonders nachts durch die vielen Truckfahrer, die dort rasten auf der Fahrt von Mombasa nach Nairobi. Die Stadt hat über 20.000 Einwohner. Es ist eine heisse und trockene und arme Gegend. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator ist Silas. Die Africa Inland Church (AIC) hat ihre Kirche für Straßenkinder und Alkoholiker geöffnet. Straßenkinder gelten als kriminell und „Abfall“, Suchtkranke werden verspottet. Diese Gemeinde ist anders. Sie sammeln jeden Monat einen bestimmten Betrag, um zu helfen.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Straßenkindergruppe,</li>        <li>Recovery- Gruppe,</li>        <li>Rehabilitation von Suchtkranken in einem eigenen Gebäude (6 Plätze),</li>        <li>Beratungsangebot        </li>            </ul>        </div>');
        document.getElementById("image2a").setAttribute("src",emaliImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    }

    embuButton= function embu(){
        map.setCenter(embu_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Embu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image3a" src="img/embu.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Die Stadt liegt 120 km nordöstlich von Nairobi an der Straße zum Mt. Kenya. Sie hat gut 50.000 Einwohner. In der Umgebung gibt es Miraa-Plantagen (Khat). Khat ist in Kenya eine legale Droge und weit verbreitet.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">            Koordinator P. Joseph, Pastor einer kleinen Gemeinde am Stadtrand.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Selbsthilfegruppen für Straßenkinder, Slummütter, Prostituierte,</li>        <li>Anlaufstelle für Straßenkinder.</li>         </ul>        </div>');
        document.getElementById("image3a").setAttribute("src",embuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    jinjaButton = function jinja(){
        map.setCenter(jinja_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Jinja</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image4a" src="img/jinja.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Jinja liegt am Nordufer des Viktoriasees in Ost-Uganda. Die Stadt hat über 100.000 Einwohner und ist die viertgrößte in Uganda. Bis zu der Herrschaft von Idi Amin (1971-1979) war hier ein industrielles Herz Ugandas. Idi Amins Politik der Vertreibung und Gewalt führten zu einer Zerstörung der Infrastruktur. Jetzt ist Jinja u.a. ein Schwerpunkt der Schnapsbrennerei.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator der Arbeit ist Jackson ein ausgebildeter Journalist und Sozialarbeiter. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Reha – Klinik (20 Plätze),</li>        <li>Recovery- Gruppe,</li>        <li>ambulante Beratung,</li>        <li>Straßenkinderarbeit, Selbsthilfegruppen von Straßenkindern,        </li>  <li>income generating activities (Schweinefarm und Bananenplantage) </li> <li> Ausbildungssponsoring (über 60 Kinder)</li>         </ul>        </div>');
        document.getElementById("image4a").setAttribute("src",jinjaImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    kambiuButton = function kambiu(){
        map.setCenter(kambiu_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Kambiu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image5a" src="img/kambiu.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Kambiu liegt nordwestlich im Ballungsraum von Nairobi. Die Stadt hat ca. 90.000 Einwohner.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">          Leiter der Arbeit dort ist David (Psychologe), er ist anerkannter und erfahrener Suchttherapeut.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Stationäre Rehabilitationseinrichtung 15 Plätze. Sie besteht seit 2014. Die Behandlungen müssen die Klienten zahlen, da es keine Kranken – oder Rentenversicherung dafür gibt,</li>        <li>Professionelle ambulante Beratung besonders für Studenten. Unter ihnen spielen Alkohol und Drogen eine wachsende Rolle.</li>   </ul>        </div>');
        document.getElementById("image5a").setAttribute("src",kambiuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    kisumuButton = function kisumu(){
        map.setCenter(kisumu_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Kisumu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image6a" src="img/kisumu.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Kisumu liegt in Westkenia am Viktoriasee. Dieser See ist der drittgrößte Binnensee der Welt. Kisumu hat fast 500.000 Einwohner und ist damit die drittgrößte Stadt in Kenia.  Eine Besonderheit ist die große Straßenkinderszene. Es gibt keine genauen Angaben über die Anzahl der Kinder. Sie sind in Straßengruppen, „bases“, organisiert, alle haben einen „leader“, manche haben Gangcharakter. Die Zahl der „bases“ beträgt ca 20. Sie selbst sprechen von „streetcommunity“. Wir waren häufig in Kisumu und bekamen so ein Vertrauensverhältnis, u.a. zu dem „General“ der Straße Moses. Das ist der meist respektierte und gefürchtete Straßenjunge. Er wurde inzwischen der Leiter der exstreetboys. Das sind z.Zt. 3 Gruppen (ehemaliger) Straßenjungen, die das Ziel haben, ihr Leben zu ändern. Sie haben sich harte Regeln gegeben, auch eine CBO (einen Verein) gegründet. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Moses mit dem Team der „leaders“. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>3 ex – streetboy – Gruppen,</li>        <li>Fußballteam,</li>        <li>Schüler- und Studentengruppe der ex-street-boys,</li>        <li>Haftgruppe der ex-street-boys (verurteilte Mitglieder der street community, um die sich die anderen kümmern.)        </li> <li>leader Gruppe       </li> <li>contact centre und Beratungsstelle.        </li>  <li> Home Kingdom Kids (Leiter Ishmael)</li>         </ul>        </div>');
        document.getElementById("image6a").setAttribute("src",kisumuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    korogochoButton = function korogocho(){
        map.setCenter(korogocho_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Korogocho</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image7a" src="img/korogocho.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >     Es ist der 3. größte Slum mit über 150.000 Einwohnern. Der Name Korogocho bedeutet „Chaos“ oder „Abfall“. In direkter Nachbarschaft ist die größte Müllhalde von Nairobi. Hier arbeiten Tausende und suchen nach Essbarem oder anders Verwertbarem. Der Slum gilt als hoch kriminell. Unsere Seminare erfolgen dort unter polizeilichem Schutz. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">            Koordinatorin ist Jenifer, eine taffe Lehrerin und Frauenführerin im Slum. Sie hat ein großes Herz für Jugend und Suchtkranke. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>5 Gruppen (2 Recovery – Gruppen, Gruppe abhängiger Mütter, 2 Gruppen „criminell reformists“, Jugendgruppe),</li>        <li>Beratungstelle (Container),</li>        <li>income generating acitivities wie öffentliche Toilette, Abfallbeseitigung, Wasserverkauf.  </ul>        </div>');
        document.getElementById("image7a").setAttribute("src",korogochoImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    maaiButton = function maai(){
        map.setCenter(maaiMahiu_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Maai Mahiu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image8a" src="img/maai.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Der Ort ist eine Truck-stop town (LKW – Stop) auf dem Weg von Nairobi nach Kisumu, er hat ca 60.000 Einwohner.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator der Arbeit ist Joseph. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Suchtprävention mit Verantstaltungen in Schulen und inform von Seminaren,</li>        <li>Recovery- Gruppe,</li>        <li>3 Fussballteams für Kinder und Jugendliche,</li>        <li>1 Anlaufstelle mit Beratung.        </li>            </ul>        </div>');
        document.getElementById("image8a").setAttribute("src",maaiMahiuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    mombasaButton = function mombasa(){
        map.setCenter(mombasa_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Mombasa</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image9a" src="img/mombasa.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Mombasa ist die zweitgrößte Stadt in Kenia mit 1,2 Millionen Einwohner. Sie liegt am Indischen Ozean. Die Stadt hat einen hohen Anteil von Moslems. Sie nehmen eher Drogen als Alkohol. Das könnte erklären, weshalb in manchen suburbs (Vororten) mehr Heroinabhängige als Alkoholiker sind. Hier organisierten sich Mütter. Sie wollten nicht tatenlos zusehen, wie ihre Kinder durch Drogen umkommen.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">          Leiterin dieser Gruppe ist Mariam, eine Mutter und Frauenführerin in einem Vorort. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Müttergruppe,</li>        <li>Beratungsstelle,</li>        <li>Recovery Gruppe,</li>                   </ul>        </div>');
        document.getElementById("image9a").setAttribute("src",mombasaImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    mtitoButton = function mtito(){
        map.setCenter(mtitoandei_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Mtito Andei</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image10a" src="img/mtito.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Der kleine Ort liegt an der Straße von Nairobi nach Mombasa. In der Nachbarschaft ist der Wildpark Tsavo Ost. Es ist eine sehr heiße und trockene Gegend. Der Ort hat ca 5000 Einwohner. </div> <h2> Arbeitszweige und Koordinatoren </h2><div align="justify" style="padding-right: 40px; padding-left:20px">   Kinderheim „Good Hope“ in Hillside, einem Vorort. Das Heim wird von uns finanziert. Dort leben ca 40 Kinder, besonders Waisen und Straßenkinder.  Leiter ist Henry, der Vorsitzende des Trägervereins Francis. In Nachbarregionen Makueni und Kambu sind 4 Selbsthilfegruppen, Beratungsangebote für Suchtkranke an den beiden regionalen Krankenhäusern und Kontaktarbeit mit Straßenkindern vorzufinden. Leiter ist Peter.  </div> </div>');
        document.getElementById("image10a").setAttribute("src",mtitAndeiImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    nakuruButton = function nakuru(){
        map.setCenter(nakuru_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Nakuru</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image11a" src="img/nakuru.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      DNakuru liegt zwischen Nairobi und Kisumu. Es ist die viertgrößte Stadt in Kenia. Sie hat über 300.000 Einwohner. Sie ist berühmt durch den Nakurusee mit den Tausenden von Flamingos. Hier lebt und arbeitet P. Daniel. Er war Pastor an einer großen Gemeinde und Dozent. Er wollte aber nicht der Theorie und Bürokratie dienen und gab seine Stellung auf. Er gründete am Stadtrand von Nakuru eine kleine unabhängige Kirche. Seine Zielgruppen sind die „Verlorenen“, d.h. besonders auch Straßenkinder und Suchtkranke. Es ist beeindruckt, wie sie sich für ihre Nächsten einsetzen. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator P. Daniel. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Outreach-Arbeit mit streetkids,</li>        <li>Recovery- Gruppe,</li>        <li>Helferkreis.</li>              </ul>        </div>');
        document.getElementById("image11a").setAttribute("src",nakuruImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }

    runyenjesButton = function runyenjes(){
        map.setCenter(runyenjes_marker.getPosition());
        smoothZoom(map, 13, map.getZoom());
        $j('#myModalLabel').html("<h1>Runyenjes</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image12a" src="img/nakuru.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Der Ort liegt 150 km nordöstlich von Nairobi und hat ca. 60.000 Einwohner. Er liegt in einer sehr fruchtbaren Gegend mit großen Tee -, Mango – und Miraa (Khat) – Plantagen. Erschreckend ist, wieviele der Jugendlichen dem Miraa  verfallen sind.  </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator der Arbeit ist Joseph. Ein weiterer Leiter ist Ken, ein Suchttherapeut und Betroffener und ehemaliger Rasta. Die Farm ist im Aufbau. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Reha-Klinik, 30 Plätze,</li>        <li>ambulante Beratung.</li>               </ul>        </div>');
        document.getElementById("image12a").setAttribute("src",runyenjesImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')

    }



    mathare_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Mathare,
        icon: image,
        title: 'Mathare'
    });

    korogocho_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Korogocho,
        icon: image,
        title: 'Korogocho'
    });

    kambiu_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Kambiu,
        icon: image,
        title: 'Kambiu'
    });

    maaiMahiu_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_MaaiMahiu,
        icon: image,
        title: 'Maai Mahiu'
    });

    embu_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Embu,
        icon: image,
        title: 'Embu'
    });

    runyenjes_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Runyenjes,
        icon: image,
        title: 'Runyenjes'
    });

    mtitoandei_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_MtitoAndei,
        icon: image,
        title: 'Mtito Andei'
    });

    emali_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Emali,
        icon: image,
        title: 'Emali'
    });

    mombasa_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Mombasa,
        icon: image,
        title: 'Mombasa'
    });

    nakuru_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Nakuru,
        icon: image,
        title: 'Nakuru'
    });

    kisumu_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Kisumu,
        icon: image,
        title: 'Kisumu!'
    });

    jinja_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Jinja,
        icon: image,
        title: 'Jinja'
    });


    adama_marker = new google.maps.Marker({
        map: map,
        position: myLatLng_Adama,
        icon: image,
        title: 'Adama'
    });
    //   map.addListener('center_changed', function() {
    //       // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    //       window.setTimeout(function() {
    //           map.panTo(marker.getPosition());
    //       }, 3000);
//   });


    mathare_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(mathare_marker.getPosition());

    });

    korogocho_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(korogocho_marker.getPosition());

    });

    kambiu_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(kambiu_marker.getPosition());

    });

    maaiMahiu_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(maaiMahiu_marker.getPosition());

    });

    embu_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(embu_marker.getPosition());

    });

    runyenjes_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(runyenjes_marker.getPosition());

    });

    mtitoandei_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(mtitoandei_marker.getPosition());

    });

    emali_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(emali_marker.getPosition());

    });

    mombasa_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(mombasa_marker.getPosition());

    });

    nakuru_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(mathare_marker.getPosition());

    });

    jinja_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(jinja_marker.getPosition());

    });

    adama_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(adama_marker.getPosition());

    });

    kisumu_marker.addListener('click', function () {
        smoothZoom(map, 13, map.getZoom());
        map.setCenter(kisumu_marker.getPosition());

    });

    $j('#map').append('<div class="containerbody"> <h1 style="    color: black; padding-bottom: 20px; font-style:italic    "> Standorte des Kenia- Projekts</h1><button type="button" id="mathareB" class="btn btn-primary" >Nairobi - Slum Mathare Valley </button> <button type="button" class="btn btn-primary" id="korogochoB">Nairobi - Slum Korogocho</button> <button type="button" class="btn btn-primary" id="kambiuB">Kambiu</button> <button type="button" class="btn btn-primary" id="maaiB">Maai Mahiu</button> <button type="button" class="btn btn-primary" id="embuB">Embu</button> <button type="button" class="btn btn-primary" id="runyenjesB">Runyenjes</button> <button type="button" class="btn btn-primary" id="mtitoB">Mtito Andei</button> <button type="button" class="btn btn-primary" id="emaliB">Emali</button> <button type="button" class="btn btn-primary" id="mombasaB">Mombasa</button> <button type="button" class="btn btn-primary" id="nakuruB">Nakuru</button> <button type="button" class="btn btn-primary" id="kisumuB">Kisumu</button> <button type="button" class="btn btn-primary" id="jinjaB">Jinja (Uganda)</button><button type="button" class="btn btn-primary" id="adamaB">Adama – Nazret/ Äthiopien</button></div> ')



    google.maps.event.addListener(mathare_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Nairobi - Slum Mathare Valley</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image0" src="img/mathare.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Mathare ist der 2. größte und älteste Slum in Nairobi. Der Name des Slums kommt von dem Fluß, der durch den Slum fließt. Mathare Valley (Mathare Tal) ist der Kernslum von Mathare. Er ist ca. 10 km lang und 300 m breit. In ihm leben schätzungsweise180.000 Einwohner. Der Slum ist bekannt für seine hohe Aids- und Mordrate. Besucht man ihn nachmittags, erlebt man viele betrunkene Einwohner.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">            Koordinator der Arbeit ist Morris, ein „trockener“ Alkoholiker mit einer großen Familie. Er wurde im Slum geboren.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Recovery – Gruppe ehemaliger Schnapsbrenner,</li>        <li>ambulante Beratung und ambulante Rehabilitation (Kurse mit je 10 Teilnehmern, der Kurs geht über 3 Monate mit täglichen Treffen),</li>        <li>3 Fussballteams für Kinder und Jugendliche,</li>        <li>1 Jugendgruppe für kriminell und sucht – Gefährdete,        </li>        <li>Gartenprojekt am Fluß Mathare.</li>        </ul>        </div>');
        document.getElementById("image0").setAttribute("src", mathareImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });


    google.maps.event.addListener(korogocho_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Nairobi - Slum Korogocho</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image1" src="/img/korogocho.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >     Es ist der 3. größte Slum mit über 150.000 Einwohnern. Der Name Korogocho bedeutet „Chaos“ oder „Abfall“. In direkter Nachbarschaft ist die größte Müllhalde von Nairobi. Hier arbeiten Tausende und suchen nach Essbarem oder anders Verwertbarem. Der Slum gilt als hoch kriminell. Unsere Seminare erfolgen dort unter polizeilichem Schutz. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">            Koordinatorin ist Jenifer, eine taffe Lehrerin und Frauenführerin im Slum. Sie hat ein großes Herz für Jugend und Suchtkranke. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>5 Gruppen (2 Recovery – Gruppen, Gruppe abhängiger Mütter, 2 Gruppen „criminell reformists“, Jugendgruppe),</li>        <li>Beratungstelle (Container),</li>        <li>income generating acitivities wie öffentliche Toilette, Abfallbeseitigung, Wasserverkauf.  </ul>        </div>');
        document.getElementById("image1").setAttribute("src", korogochoImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(kambiu_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Kambiu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image2" src="img/kambiu.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Kambiu liegt nordwestlich im Ballungsraum von Nairobi. Die Stadt hat ca. 90.000 Einwohner.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">          Leiter der Arbeit dort ist David (Psychologe), er ist anerkannter und erfahrener Suchttherapeut.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Stationäre Rehabilitationseinrichtung 15 Plätze. Sie besteht seit 2014. Die Behandlungen müssen die Klienten zahlen, da es keine Kranken – oder Rentenversicherung dafür gibt,</li>        <li>Professionelle ambulante Beratung besonders für Studenten. Unter ihnen spielen Alkohol und Drogen eine wachsende Rolle.</li>   </ul>        </div>');
        document.getElementById("image2").setAttribute("src", kambiuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });


    google.maps.event.addListener(maaiMahiu_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Maai Mahiu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image3" src="img/maai.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Der Ort ist eine Truck-stop town (LKW – Stop) auf dem Weg von Nairobi nach Kisumu, er hat ca 60.000 Einwohner.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator der Arbeit ist Joseph. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Suchtprävention mit Verantstaltungen in Schulen und inform von Seminaren,</li>        <li>Recovery- Gruppe,</li>        <li>3 Fussballteams für Kinder und Jugendliche,</li>        <li>1 Anlaufstelle mit Beratung.        </li>            </ul>        </div>');
        document.getElementById("image3").setAttribute("src", maaiMahiuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(embu_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Embu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image4" src="img/embu.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Die Stadt liegt 120 km nordöstlich von Nairobi an der Straße zum Mt. Kenya. Sie hat gut 50.000 Einwohner. In der Umgebung gibt es Miraa-Plantagen (Khat). Khat ist in Kenya eine legale Droge und weit verbreitet.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">            Koordinator P. Joseph, Pastor einer kleinen Gemeinde am Stadtrand.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Selbsthilfegruppen für Straßenkinder, Slummütter, Prostituierte,</li>        <li>Anlaufstelle für Straßenkinder.</li>         </ul>        </div>');
        document.getElementById("image4").setAttribute("src", embuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(runyenjes_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Runyenjes</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image5" src="img/runyenjes.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Der Ort liegt 150 km nordöstlich von Nairobi und hat ca. 60.000 Einwohner. Er liegt in einer sehr fruchtbaren Gegend mit großen Tee -, Mango – und Miraa (Khat) – Plantagen. Erschreckend ist, wieviele der Jugendlichen dem Miraa  verfallen sind.  </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator der Arbeit ist Joseph. Ein weiterer Leiter ist Ken, ein Suchttherapeut und Betroffener und ehemaliger Rasta. Die Farm ist im Aufbau. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Reha-Klinik, 30 Plätze,</li>        <li>ambulante Beratung.</li>               </ul>        </div>');
        document.getElementById("image5").setAttribute("src", runyenjesImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(mtitoandei_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Mtito Andei</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image6" src="img/mtito.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Der kleine Ort liegt an der Straße von Nairobi nach Mombasa. In der Nachbarschaft ist der Wildpark Tsavo Ost. Es ist eine sehr heiße und trockene Gegend. Der Ort hat ca 5000 Einwohner. </div> <h2> Arbeitszweige und Koordinatoren </h2><div align="justify" style="padding-right: 40px; padding-left:20px">   Kinderheim „Good Hope“ in Hillside, einem Vorort. Das Heim wird von uns finanziert. Dort leben ca 40 Kinder, besonders Waisen und Straßenkinder.  Leiter ist Henry, der Vorsitzende des Trägervereins Francis. In Nachbarregionen Makueni und Kambu sind 4 Selbsthilfegruppen, Beratungsangebote für Suchtkranke an den beiden regionalen Krankenhäusern und Kontaktarbeit mit Straßenkindern vorzufinden. Leiter ist Peter.  </div> </div>');
        document.getElementById("image6").setAttribute("src", mtitAndeiImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(emali_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Emali</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image7" src="img/emali.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Es ist eine wachsende Stadt. Sie lebt besonders nachts durch die vielen Truckfahrer, die dort rasten auf der Fahrt von Mombasa nach Nairobi. Die Stadt hat über 20.000 Einwohner. Es ist eine heisse und trockene und arme Gegend. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator ist Silas. Die Africa Inland Church (AIC) hat ihre Kirche für Straßenkinder und Alkoholiker geöffnet. Straßenkinder gelten als kriminell und „Abfall“, Suchtkranke werden verspottet. Diese Gemeinde ist anders. Sie sammeln jeden Monat einen bestimmten Betrag, um zu helfen.</div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Straßenkindergruppe,</li>        <li>Recovery- Gruppe,</li>        <li>Rehabilitation von Suchtkranken in einem eigenen Gebäude (6 Plätze),</li>        <li>Beratungsangebot        </li>            </ul>        </div>');
        document.getElementById("image7").setAttribute("src", emaliImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(mombasa_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Mombasa</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image8" src="img/mombasa.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Mombasa ist die zweitgrößte Stadt in Kenia mit 1,2 Millionen Einwohner. Sie liegt am Indischen Ozean. Die Stadt hat einen hohen Anteil von Moslems. Sie nehmen eher Drogen als Alkohol. Das könnte erklären, weshalb in manchen suburbs (Vororten) mehr Heroinabhängige als Alkoholiker sind. Hier organisierten sich Mütter. Sie wollten nicht tatenlos zusehen, wie ihre Kinder durch Drogen umkommen.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">          Leiterin dieser Gruppe ist Mariam, eine Mutter und Frauenführerin in einem Vorort. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Müttergruppe,</li>        <li>Beratungsstelle,</li>        <li>Recovery Gruppe,</li>                   </ul>        </div>');
        document.getElementById("image8").setAttribute("src", mombasaImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(nakuru_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Nakuru</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image9" src="img/nakuru.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      DNakuru liegt zwischen Nairobi und Kisumu. Es ist die viertgrößte Stadt in Kenia. Sie hat über 300.000 Einwohner. Sie ist berühmt durch den Nakurusee mit den Tausenden von Flamingos. Hier lebt und arbeitet P. Daniel. Er war Pastor an einer großen Gemeinde und Dozent. Er wollte aber nicht der Theorie und Bürokratie dienen und gab seine Stellung auf. Er gründete am Stadtrand von Nakuru eine kleine unabhängige Kirche. Seine Zielgruppen sind die „Verlorenen“, d.h. besonders auch Straßenkinder und Suchtkranke. Es ist beeindruckt, wie sie sich für ihre Nächsten einsetzen. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator P. Daniel. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Outreach-Arbeit mit streetkids,</li>        <li>Recovery- Gruppe,</li>        <li>Helferkreis.</li>              </ul>        </div>');
        document.getElementById("image9").setAttribute("src", nakuruImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(kisumu_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Kisumu</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image10" src="img/kisumu.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Kisumu liegt in Westkenia am Viktoriasee. Dieser See ist der drittgrößte Binnensee der Welt. Kisumu hat fast 500.000 Einwohner und ist damit die drittgrößte Stadt in Kenia.  Eine Besonderheit ist die große Straßenkinderszene. Es gibt keine genauen Angaben über die Anzahl der Kinder. Sie sind in Straßengruppen, „bases“, organisiert, alle haben einen „leader“, manche haben Gangcharakter. Die Zahl der „bases“ beträgt ca 20. Sie selbst sprechen von „streetcommunity“. Wir waren häufig in Kisumu und bekamen so ein Vertrauensverhältnis, u.a. zu dem „General“ der Straße Moses. Das ist der meist respektierte und gefürchtete Straßenjunge. Er wurde inzwischen der Leiter der exstreetboys. Das sind z.Zt. 3 Gruppen (ehemaliger) Straßenjungen, die das Ziel haben, ihr Leben zu ändern. Sie haben sich harte Regeln gegeben, auch eine CBO (einen Verein) gegründet. </div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Moses mit dem Team der „leaders“. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>3 ex – streetboy – Gruppen,</li>        <li>Fußballteam,</li>        <li>Schüler- und Studentengruppe der ex-street-boys,</li>        <li>Haftgruppe der ex-street-boys (verurteilte Mitglieder der street community, um die sich die anderen kümmern.)        </li> <li>leader Gruppe       </li> <li>contact centre und Beratungsstelle.        </li>  <li> Home Kingdom Kids (Leiter Ishmael)</li>         </ul>        </div>');
        document.getElementById("image10").setAttribute("src", kisumuImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(jinja_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Jinja(Uganda)</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image11" src="img/jinja.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Jinja liegt am Nordufer des Viktoriasees in Ost-Uganda. Die Stadt hat über 100.000 Einwohner und ist die viertgrößte in Uganda. Bis zu der Herrschaft von Idi Amin (1971-1979) war hier ein industrielles Herz Ugandas. Idi Amins Politik der Vertreibung und Gewalt führten zu einer Zerstörung der Infrastruktur. Jetzt ist Jinja u.a. ein Schwerpunkt der Schnapsbrennerei.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator der Arbeit ist Jackson ein ausgebildeter Journalist und Sozialarbeiter. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Reha – Klinik (20 Plätze),</li>        <li>Recovery- Gruppe,</li>        <li>ambulante Beratung,</li>        <li>Straßenkinderarbeit, Selbsthilfegruppen von Straßenkindern,        </li>  <li>income generating activities (Schweinefarm und Bananenplantage) </li> <li> Ausbildungssponsoring (über 60 Kinder)</li>         </ul>        </div>');
        document.getElementById("image11").setAttribute("src", jinjaImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });

    google.maps.event.addListener(adama_marker, 'click', function () {
        $j('#myModalLabel').html("<h1>Adama - Nazareth/Äthiopien</h1>");
        $j('#modalBody').html('<div class="modalContainer"><img id="image12" src="img/adama.jpg" alt="Welcome to Mathare" height="300" width="500"><h2>Örtlichkeit</h2> <div align="justify" style="padding-right: 40px; padding-left:20px" >      Adama ist eine wachsende Stadt in Zentraläthiopien, sie hat jetzt über 300.000 Einwohner.  Äthopien ist noch ärmer als Kenia und Uganda. Hier gibt es viele Straßenkinder und Kinder armer Familien, die keine Schule besuchen können. Die Suchtproblematik ist offensichtlich, es gibt aber keine Hilfen.</div> <h2>Koordinator </h2><div align="justify" style="padding-right: 40px; padding-left:20px">           Koordinator ist Silas. Silas ist Deutscher. Er ist mit Friye, einer Äthiopierin verheiratet. </div> <h2> Arbeitszweige </h2> <ul style="list-style-type:disc; text-align:left"><li>Schulprojekt (Patenschaftsprogramm für mehr als 600 Kinder),</li>        <li>Beratungsarbeit Sucht (beginnend) ,</li>        <li>Straßenkinderarbeit,</li>        <li>1 Anlaufstelle mit Beratung.        </li>            </ul>        </div>');
        document.getElementById("image12").setAttribute("src", adamaImage());
        jQuery.noConflict();
        $j('#myModal').modal('show')
    });


    $j('#myModal').on('hidden.bs.modal', function () {
        map.setZoom(6);
    })

    document.getElementById("mathareB").addEventListener('click', mathareButton , false);
    document.getElementById("adamaB").addEventListener('click', adamaButton , false);
    document.getElementById("korogochoB").addEventListener('click', korogochoButton , false);
    document.getElementById("emaliB").addEventListener('click', emaliButton , false);
    document.getElementById("embuB").addEventListener('click', embuButton , false);
    document.getElementById("runyenjesB").addEventListener('click', runyenjesButton , false);
    document.getElementById("kambiuB").addEventListener('click', kambiuButton , false);
    document.getElementById("maaiB").addEventListener('click', maaiButton , false);
    document.getElementById("mtitoB").addEventListener('click', mtitoButton , false);
    document.getElementById("kisumuB").addEventListener('click', jinjaButton , false);
    document.getElementById("nakuruB").addEventListener('click', nakuruButton , false);
    document.getElementById("mombasaB").addEventListener('click', mombasaButton , false);
    document.getElementById("jinjaB").addEventListener('click', jinjaButton , false);





}

