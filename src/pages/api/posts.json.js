const api = [
  {
    id: 80,
    date: "2023-09-08T13:49:09",
    title: { rendered: "HTMx!" },
    content: {
      rendered:
        '\n<p>Detta \u00e4r tillbaka till grunderna kan man s\u00e4ga. React \u00e4r bra men ibland k\u00e4nns det on\u00f6digt att beh\u00f6va konfigurera ett helt projekt i react med olika paket f\u00f6r att f\u00e5 den d\u00e4r SPA:n som man str\u00e4var efter. D\u00e4rf\u00f6r har jag suttit med pug, express, HTMx och postgressql</p>\n\n\n\n<!--more-->\n\n\n\n<p>Det fantastiska med HTMx \u00e4r att man kan dynamiskt f\u00f6r\u00e4ndra inneh\u00e5llet p\u00e5 sidan med anv\u00e4ndning av HTMx-attribut</p>\n\n\n\n<p>De som \u00e4r relevanta f\u00f6r en grundl\u00e4ggande funktionalitet \u00e4r</p>\n\n\n\n<p><code>hx-post="/word/1"<br>hx-target="#words"<br>hx-swap="innerHTML"</code></p>\n\n\n\n<p>Hx-post \u00e4r responsen p\u00e5 localhost:[port]/word/1<br>Hx-target \u00e4r var responsen ska hamna.<br>Hx-swap \u00e4r hur responsen ska hamna d\u00e4r</p>\n\n\n\n<p><strong>Exempel</strong></p>\n\n\n\n<p>Om v\u00e5r endpoint har responsen</p>\n\n\n\n<p><code>res.send(\u201d&lt;div>1&lt;/div>\u201d)</code></p>\n\n\n\n<p>Kommer denna div att hamna i hx-target.</p>\n\n\n\n<p>S\u00e5 h\u00e4r kan det  ut i en express-applikation med pug</p>\n\n\n\n<p><strong>index.pug</strong> (\u00f6versatt till vanlig html)</p>\n\n\n\n<p><code>&lt;div hx-post="/word/1" hx-target="#words" hx-swap="innerHTML">H\u00e4mta ord&lt;/div><br>&lt;div id=\u201d#words>&lt;/div></code></p>\n\n\n\n<p><strong>index.js</strong></p>\n\n\n\n<p><code>app.get("/word/:id", async (req, res) => {<br>const id = parseInt(req.params.id);<br>try {<br>return res.send(&lt;div>${id}&lt;/div>)<br>}<br>} catch (error) {<br>res.send(error);<br>}<br>});</code></p>\n\n\n\n<p><strong>Lite l\u00e4nkar</strong><br><a href="https://htmx.org/">https://htmx.org/</a><br><a href="https://pugjs.org/api/getting-started.html">https://pugjs.org/api/getting-started.html</a><br><a href="https://www.youtube.com/watch?v=2hMrk7A8Wf0">https://www.youtube.com/watch?v=2hMrk7A8Wf0</a></p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Detta \u00e4r tillbaka till grunderna kan man s\u00e4ga. React \u00e4r bra men ibland k\u00e4nns det on\u00f6digt att beh\u00f6va konfigurera ett helt projekt i react med olika paket f\u00f6r att f\u00e5 den d\u00e4r SPA:n som man str\u00e4var efter. D\u00e4rf\u00f6r har jag suttit med pug, express, HTMx och postgressql</p>\n",
      protected: false,
    },
  },
  {
    id: 66,
    date: "2023-08-26T08:32:30",
    title: { rendered: "Server side rendering" },
    content: {
      rendered:
        '<p>Jag har suttit i ett projekt d\u00e4r jag har en express backend och k\u00e4nde att jag ville kring\u00e5 en separat fronend i t.ex react. L\u00f6sningen blev att anv\u00e4nda en template engine som heter pugjs. Pugjs fungerar utm\u00e4rkt f\u00f6r enklare sidor.</p>\n<p><!--more--></p>\n<p>Pugjs sak dock anv\u00e4ndas med f\u00f6rsiktighet. Paketet \u00e4r inte l\u00e4ngre underh\u00e5llt. Ett b\u00e4ttre alternativ \u00e4r ejs. Jag valde Pugjs d\u00e5 jag sedan innan hade mer erfarenhet av Pugjs. Jag kommer att \u00f6verg\u00e5 till ejs n\u00e4r projektet \u00e4r klart.</p>\n<p>Det jag har gjort \u00e4r att i min express server skapat tv\u00e5 stycken endpoints. En f\u00f6r en api och en f\u00f6r hemsidan. Den f\u00e5r hemsidan kan vi kalla index.</p>\n<div>\n<code></p>\n<div style="padding-left: 40px;">const express = require("express");</div>\n<div style="padding-left: 40px;">const app = express();</div>\n<div style="padding-left: 40px;">app.set("view engine", "pug");</div>\n<p></code>\n</div>\n<div style="padding-left: 40px;"></div>\n<div></div>\n<div>Sedan i v\u00e5r endpoint f\u00f6r index anv\u00e4nder vi render ist\u00e4llet f\u00f6r send.</div>\n<div></div>\n<div></div>\n<p><code></p>\n<div style="padding-left: 40px;">res.render("index", {</div>\n<div style="padding-left: 40px;">\u00a0 titile: "Hello world!"</div>\n<div style="padding-left: 40px;">})</div>\n<div style="padding-left: 40px;"></div>\n<p></code></p>\n<div></div>\n<div>Slutligen m\u00e5ste vi skapa en mapp som heter views och i den mappen skapa en fil som heter index.pug\u00a0 och v\u00e5r endpoint kommer att renderna index.pug. Det g\u00e5r givetvis d\u00f6pa filen till vad som helst s\u00e5 l\u00e4nge res.render pekar p\u00e5 samma namn.</div>\n<div></div>\n<div>I andra delen av res.render s\u00e4nder vi helt enkelt ett JSON som vi kan anv\u00e4nda i index.pug.</div>\n<div></div>\n<div>Pug har en v\u00e4ldigt enkelt syntax som baserar sig p\u00e5 white space</div>\n<div></div>\n<p><code></p>\n<div style="padding-left: 40px;"></div>\n<div style="padding-left: 40px;">div</div>\n<div style="padding-left: 40px;">\u00a0 div</div>\n<div style="padding-left: 40px;">\u00a0\u00a0\u00a0 div</div>\n<div style="padding-left: 40px;"></div>\n<p></code></p>\n<div></div>\n<div>Inneb\u00e4r att tredje div \u00e4r child till andra div och andra div \u00e4r child fill f\u00f6rsta div.</div>\n<div></div>\n<div></div>\n<p><code></p>\n<div style="padding-left: 40px;">div</div>\n<div style="padding-left: 40px;">\u00a0div</div>\n<div style="padding-left: 40px;">\u00a0div</div>\n<p></code></p>\n<div></div>\n<div>Tv\u00e5 siblings och en parent.</div>\n<div></div>\n<div></div>\n<p><code></p>\n<div style="padding-left: 40px;">div</div>\n<div style="padding-left: 40px;">\u00a0 div(class="text-dark")= "Hello world!"</div>\n<div style="padding-left: 40px;">\u00a0 div(class="text.danger")= title</div>\n<p></code></p>\n<div></div>\n<div>Title \u00e4r den variabel vi skickade i res.render. B\u00e5da desa siblings kommer allts\u00e5 att inneh\u00e5lla samma text. Ena kommer att ha svart text och den andra kommer att ha r\u00f6d text i enlighet med bootstrap</div>\n<div></div>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Jag har suttit i ett projekt d\u00e4r jag har en express backend och k\u00e4nde att jag ville kring\u00e5 en separat fronend i t.ex react. L\u00f6sningen blev att anv\u00e4nda en template engine som heter pugjs. Pugjs fungerar utm\u00e4rkt f\u00f6r enklare sidor.</p>\n",
      protected: false,
    },
  },
  {
    id: 59,
    date: "2023-08-16T20:13:32",
    title: { rendered: "SocketIO, chat" },
    content: {
      rendered:
        '<p>SocketIO anv\u00e4nds f\u00f6r dubbelriktat kommunikation i realtid.\u00a0 Kort sagt \u00f6ppnar man en socket mellan server (backend) och klient (frontend). B\u00e5da kan avge, emit, och b\u00e5da kan lyssna p\u00e5 varandra. Det b\u00f6rjar allts\u00e5 med att \u00f6ppna en kommunikationsv\u00e4g och sedan avge meddelanden och svara p\u00e5 dem.</p>\n<p><!--more--></p>\n<p>Servern b\u00f6rjar med att \u00f6ppna en socket. Detta kan man exempelvis g\u00f6ra i en express-server. Sedan ansluter frontenden till denna socket.</p>\n<p>I React anv\u00e4nder jag mig av en useEffect-hook. Den best\u00e5r egentligen av tv\u00e5 delar. En del d\u00e4r komponeten monteras och en n\u00e4r den f\u00f6rst\u00f6rs. Det logiska \u00e4r d\u00e5 att n\u00e4r komponenten monteras ansluter den till socketen. N\u00e4r den f\u00f6rst\u00f6rs kopplar den ifr\u00e5n socketen</p>\n<p><code>UseEffect(()=&gt;{<br />\n//anslut<br />\nreturn () =&gt; {<br />\n//koppla ifr\u00e5n<br />\n}},[])</code></p>\n<p>Med denna logik kan en anv\u00e4ndare ansluta och autmatiskt meddela att man har anslutit med t.ex &#8221;[user] has joined&#8221; och vid fr\u00e5nkoppling meddela att anv\u00e4ndaren har l\u00e4mnat med t.ex &#8221;[user] has left&#8221;. Detta sker genom att i useEffect-hooken anv\u00e4nda sig av emit.<br />\n<code><br />\n//frontend skickar vid montering av komponent ett meddelande till backend<br />\nsocket.emit("joined", user)</code></p>\n<p><code>//backend lyssnar p\u00e5 vad frontend skickar<br />\n//backend skickar till alla anv\u00e4ndare (broadcast) anv\u00e4ndare<br />\nsocket.on("joined", (user) =&gt; {<br />\nsocket.broadcast.emit("who_joined", user)<br />\n})</code></p>\n<p>//alla frontend som \u00e4r anslutna till denna socket blir meddelade att en anv\u00e4nda har anslutit<br />\nsocket.on(&#8221;who_joined&#8221;, (user) =&gt; {<br />\nconsole.log(`${user} has joined`)<br />\n})</p>\n<p><img decoding="async" loading="lazy" class="size-medium wp-image-62 alignleft" src="http://jeshol.se/wp-content/uploads/2023/08/console-300x92.jpeg" alt="" width="300" height="92" srcset="http://jeshol.se/wp-content/uploads/2023/08/console-300x92.jpeg 300w, http://jeshol.se/wp-content/uploads/2023/08/console.jpeg 548w" sizes="(max-width: 300px) 100vw, 300px" /></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>I ovan logg illlustreras f\u00f6ljande:<br />\n1) anv\u00e4ndare ett ansluter<br />\n2) anv\u00e4ndare tv\u00e5 ansluter<br />\n3-4) anv\u00e4ndare tv\u00e5 uppdatera sidan (l\u00e4mnar, ansluter)<br />\n5) anv\u00e4ndare tv\u00e5 l\u00e4mnar</p>\n<p><img decoding="async" loading="lazy" class="alignnone size-medium wp-image-61" src="http://jeshol.se/wp-content/uploads/2023/08/chat-300x164.jpeg" alt="" width="300" height="164" srcset="http://jeshol.se/wp-content/uploads/2023/08/chat-300x164.jpeg 300w, http://jeshol.se/wp-content/uploads/2023/08/chat-768x419.jpeg 768w, http://jeshol.se/wp-content/uploads/2023/08/chat-624x340.jpeg 624w, http://jeshol.se/wp-content/uploads/2023/08/chat.jpeg 779w" sizes="(max-width: 300px) 100vw, 300px" /></p>\n<p>I ovan logg ser vi samma fast i chattapplikationen. Anv\u00e4ndare ett, test, ansluter. Anv\u00e4ndare test f\u00e5r inget meddelande i chatten att han har anslutit. D\u00e4refter ansluter anv\u00e4ndare jesper. Anv\u00e4ndare Jesper uppdaterar sidan, l\u00e4mnar och ansluter igen. Till sist l\u00e4mnar anv\u00e4ndare jesper chatten helt och h\u00e5llet.</p>\n<p>Allt detta \u00e4r kopplad till autentiserade anv\u00e4ndare. Test m\u00e5ste logga in med ett specifikt konto och det \u00e4r endast test som kan heta test. Detta sker genom jsonwebtoken som verifierar identiteten och tillskriver den socket test anv\u00e4ndar med tests anv\u00e4ndaruppgifter.</p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>SocketIO anv\u00e4nds f\u00f6r dubbelriktat kommunikation i realtid.\u00a0 Kort sagt \u00f6ppnar man en socket mellan server (backend) och klient (frontend). B\u00e5da kan avge, emit, och b\u00e5da kan lyssna p\u00e5 varandra. Det b\u00f6rjar allts\u00e5 med att \u00f6ppna en kommunikationsv\u00e4g och sedan avge meddelanden och svara p\u00e5 dem.</p>\n",
      protected: false,
    },
  },
  {
    id: 47,
    date: "2023-08-07T20:44:03",
    title: { rendered: "Lazygit versionshantering" },
    content: {
      rendered:
        '<p>Detta \u00e4r ett fantastiskt verktyg. Tidigare har jag aldrig fastnat f\u00f6r git och alla kommandon trots att jag n\u00e4stan bor i terminalen. Lazygit\u00a0 har \u00e4ndrat det hela f\u00f6r mig</p>\n<p><!--more--></p>\n<p><a href="https://github.com/jesseduffield/lazygit">https://github.com/jesseduffield/lazygit</a></p>\n<p><img decoding="async" loading="lazy" class="alignnone wp-image-52 size-full" src="http://jeshol.se/wp-content/uploads/2023/08/lazygit2.jpeg" alt="" width="860" height="668" srcset="http://jeshol.se/wp-content/uploads/2023/08/lazygit2.jpeg 860w, http://jeshol.se/wp-content/uploads/2023/08/lazygit2-300x233.jpeg 300w, http://jeshol.se/wp-content/uploads/2023/08/lazygit2-768x597.jpeg 768w, http://jeshol.se/wp-content/uploads/2023/08/lazygit2-624x485.jpeg 624w" sizes="(max-width: 860px) 100vw, 860px" /></p>\n<p>Enkelt installering f\u00f6r de flesta dist. Ubuntu lite kr\u00e5ngligare. Curl f\u00f6r att h\u00e4mta, extrahera .tar.gz, installera i usr/local/bin</p>\n<pre style="padding-left: 40px;">LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po \'"tag_name": "v\\K[^"]*\')<br />curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"<br />tar xf lazygit.tar.gz lazygit<br />sudo install lazygit /usr/local/bin</pre>\n<p>Sedan \u00e4r det bara att \u00f6ppna en terminal i ett directory d\u00e4r git \u00e4r initierat och skriva lazygit.</p>\n<p>N\u00e5gra kommandon inne i Lazygit</p>\n<ul>\n<li>a &#8211; git add *</li>\n<li>&lt;space&gt; &#8211; git add [file]</li>\n<li>c &#8211; git commit -m [message]</li>\n<li>p = push</li>\n<li>P = pull</li>\n</ul>\n<p>Dokumentation<br /><a href="https://github.com/jesseduffield/lazygit/blob/master/docs/keybindings/Keybindings_en.md">https://github.com/jesseduffield/lazygit/blob/master/docs/keybindings/Keybindings_en.md</a></p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Detta \u00e4r ett fantastiskt verktyg. Tidigare har jag aldrig fastnat f\u00f6r git och alla kommandon trots att jag n\u00e4stan bor i terminalen. Lazygit\u00a0 har \u00e4ndrat det hela f\u00f6r mig</p>\n",
      protected: false,
    },
  },
  {
    id: 44,
    date: "2023-08-06T22:21:37",
    title: { rendered: "Radering, uppdatering,  params" },
    content: {
      rendered:
        "\n<p>En stor f\u00f6r\u00e4ndringar blev att fr\u00e5n ursprungligen h\u00e4mta ett dokuments id i redux store till att ist\u00e4llet anv\u00e4nda params. P\u00e5 s\u00e5 vis g\u00e5r det att uppdatera sidan och stanna kvar p\u00e5 r\u00e4tt dokument. Det inneb\u00e4r i praktiken att en meny best\u00e5ende av NavLinks pekar p\u00e5 l\u00e4nkar med respektive dokuments id. Exempelvis /dokument/:id</p>\n\n\n\n<!--more-->\n\n\n\n<p>G\u00e5r man sedan till /dokument/:id kommer en komponent att laddas. Den b\u00f6rjar med att h\u00e4mta :id med hj\u00e4lp av hooken useParams. D\u00e4refter anv\u00e4nder den en useEffect hook och innuti den finns en funktion som asynkront b\u00f6rjar med att utf\u00f6ra funktionen getDocument(id) som h\u00e4mtar korrekt dokument fr\u00e5n databasen. Sedan tidigare finns det bara en list med titlar och korrespodnerade id. Nu h\u00e4mtar appen alts\u00e5 ett specifikt dokuments resterande v\u00e4rden.</p>\n\n\n\n<p>Om h\u00e4mtningen av dokumentet misslyckas testar appen att h\u00e4mta en ny token med funktionen getNewToken(). N\u00e4r appen har f\u00e5tt positiv respons testar den att h\u00e4mta dokumentet \u00e4nnu en g\u00e5ng. Om appen slutligen lyckas h\u00e4mta dokumentet kommer responsen att dispatchas som aktivt dokument i redux storage.</p>\n\n\n\n<p>Det g\u00e5r att uppdatera rubriker med ett dubbelklick p\u00e5 rubriken f\u00f6r att f\u00f6rvandla den till en input. D\u00e4r skriver man in den nya rubriken och trycker man n\u00e5gonstans utanf\u00f6r g\u00e5r inputen tillbaka till att bli text. Detta sker genom onBlur event. I onBlur sker \u00e4ven funktion updateDocument()</p>\n\n\n\n<p>Raderingen av ett dokument fungerar ocks\u00e5. D\u00e5 trycker man p\u00e5 en liten soptunna vid rubriken. Efter\u00e5t kommer en konfirmering upp. Trycker man p\u00e5 kryss eller n\u00e5gonstans utanf\u00f6r st\u00e4nger konfirmeringen ner. Den senare bygger p\u00e5 useRef som kollar var man klickar. Om konfirmering \u00e4r \u00f6ppen och man trycker n\u00e5gonstans utanf\u00f6r triggas en funktion ig\u00e5ng som s\u00e4tter konfirmering till false och s\u00e5ledes syns soptunnan igen.</p>\n",
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>En stor f\u00f6r\u00e4ndringar blev att fr\u00e5n ursprungligen h\u00e4mta ett dokuments id i redux store till att ist\u00e4llet anv\u00e4nda params. P\u00e5 s\u00e5 vis g\u00e5r det att uppdatera sidan och stanna kvar p\u00e5 r\u00e4tt dokument. Det inneb\u00e4r i praktiken att en meny best\u00e5ende av NavLinks pekar p\u00e5 l\u00e4nkar med respektive dokuments id. Exempelvis /dokument/:id</p>\n",
      protected: false,
    },
  },
  {
    id: 38,
    date: "2023-08-02T22:21:03",
    title: { rendered: "En bra bit p\u00e5 v\u00e4gen" },
    content: {
      rendered:
        '\n<p>Nu har jag skapat m\u00e5nga nya funktioner. Det g\u00e5r bland annat att skapa och \u00e4ndra dokument, logga in, spara refresh token och access token. Det mesta av datafl\u00f6det g\u00e5r g\u00e5r genom redux och Froala blev vald till editor.</p>\n\n\n\n<!--more-->\n\n\n\n<figure class="wp-block-image size-full"><img decoding="async" loading="lazy" width="996" height="358" src="http://jeshol.se/wp-content/uploads/2023/08/Screenshot-from-2023-08-02-23-46-33-1.png" alt="" class="wp-image-40" srcset="http://jeshol.se/wp-content/uploads/2023/08/Screenshot-from-2023-08-02-23-46-33-1.png 996w, http://jeshol.se/wp-content/uploads/2023/08/Screenshot-from-2023-08-02-23-46-33-1-300x108.png 300w, http://jeshol.se/wp-content/uploads/2023/08/Screenshot-from-2023-08-02-23-46-33-1-768x276.png 768w, http://jeshol.se/wp-content/uploads/2023/08/Screenshot-from-2023-08-02-23-46-33-1-624x224.png 624w" sizes="(max-width: 996px) 100vw, 996px" /></figure>\n\n\n\n<p>Det har blivit en del pysslande med olika funktioner. En funktion jag har lyckades hyfsat med \u00e4r alerten &#8221;saved&#8221; som kommer upp efter man har \u00e4ndrat i dokumentet. Den fungerar i kombination med useEffect, useState och tre timeouts. </p>\n\n\n\n<p>Froala \u00e4r knuten till en funktion som triggas p\u00e5 onChange. Denna funktion h\u00e4mtar v\u00e4rdet fr\u00e5n Froala och s\u00e4tter den i ett useState. En useEffect lyssnar p\u00e5 f\u00f6ridingar i detta useState. N\u00e4r useEffect uppt\u00e4cker en f\u00f6r\u00e4ndring startar en timeout p\u00e5 tre sekunder. Om det hinner g\u00e5 tre sekunder \u00e4ndrar den useState showAlert till true och det i sin tur triggar en rendering av &#8221;saved&#8221;. </p>\n\n\n\n<p>I samma timeout finns det ytterliggare en timeout. Den triggas allts\u00e5 ig\u00e5ng n\u00e4r det har g\u00e5tt tre sekunder och alerten har blivit synlig. Den \u00e4r p\u00e5 tv\u00e5 sekunder och \u00e4ndrar useState showAlert till false vilket d\u00e5 resulterar till att alerten f\u00f6rsvinner.</p>\n\n\n\n<p>Ett problem som uppstod var att om alerten \u00e4r uppe och man byter dokument var den fortfarande kvar tills tv\u00e5 sekunder hade g\u00e5tt. Det l\u00f6stes genom en till useEffect som helt enkelt lyssnande p\u00e5 f\u00f6r\u00e4ndringar i vilket dokument som visas och i fall det sker en f\u00f6r\u00e4ndring, det vill s\u00e4ga n\u00e4r man byter dokument, blir useState showAlert false.</p>\n\n\n\n<p>Ett problem som kvarst\u00e5r \u00e4r att jag inte har hittat n\u00e5got s\u00e4tt att automatiskt trigga ig\u00e5ng &#8221;saved&#8221; efter man har tryckt p\u00e5 exempelvis bold. Just nu triggas det ig\u00e5ng av keyUp. Jag vill inte anv\u00e4nda onBlur och onChange verkar inte fungera i Froala. Det ska finnas en en inbyggds funktion i froala som heter contentChanged, men den har jag inte f\u00e5tt att fungera.</p>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Nu har jag skapat m\u00e5nga nya funktioner. Det g\u00e5r bland annat att skapa och \u00e4ndra dokument, logga in, spara refresh token och access token. Det mesta av datafl\u00f6det g\u00e5r g\u00e5r genom redux och Froala blev vald till editor.</p>\n",
      protected: false,
    },
  },
  {
    id: 34,
    date: "2023-07-27T21:54:11",
    title: { rendered: "React Redux f\u00f6r global state" },
    content: {
      rendered:
        '\n<p>Nu har jag kommit en bit p\u00e5 v\u00e4gen att kombinera React Redux med  tokens och API-anrop. N\u00e4r jag v\u00e4l f\u00f6rstod hur reducers och dispatch fungerar blev allt genast mycket klarare. Sedan anv\u00e4nder jag hooken useSelector f\u00f6r att h\u00e4mta ut den relevanta datan fr\u00e5n Redux globala lagring.</p>\n\n\n\n<!--more-->\n\n\n\n<p>Det f\u00f6rsta man b\u00f6r g\u00f6ra i filen man jobbar med \u00e4r att importera hooken useDispatch. Hooken skriver jag sen till en konstant kallad dispatch. I samma fil importerar jag min reducer med actions. I detta fall har jag en slice gjord med hooken createSlice som finns i reduxjs/toolkit.  Min slice kallar jag f\u00f6r auth och den tillskrivs ett initialt state med isAuth: false och user: null.</p>\n\n\n\n<p>Denna slice har en reducer kallad loadUser och har samma initiala state som ovan men tillskrivs ytterligare ett state d\u00e4r v\u00e4rdet \u00e4r baserat p\u00e5 payload. Payload \u00e4r i sin tur baserat p\u00e5 actions.</p>\n\n\n\n<p>N\u00e4r jag tidigare n\u00e4mnde dispatch \u00e4r det just loadUser jag d\u00e5 syftar p\u00e5. Vid ett godk\u00e4nt anrop till API avslutar jag med dispatch.loadUser(response.data.user). V\u00e4rdet i denna action blir v\u00e4rdet i den payload som ers\u00e4tter det initialt v\u00e4rdet</p>\n\n\n\n<pre class="wp-block-code"><code>const initialState = {\n  isAuth: false,\n  user: null,\n};</code></pre>\n\n\n\n<pre class="wp-block-code"><code>  reducers: {\n    userLoaded: (state, action) =&gt; {\n      state.isAuth = true;\n      state.user = action.payload;\n      //payload \u00e4r response.data.user\n    }</code></pre>\n\n\n\n<pre class="wp-block-code"><code>  reducers: {\n    userLoaded: (state, action) =&gt; {\n      state.isAuth = true;\n      state.token = action.payload.token\n      //vi kan ta ut enskilda v\u00e4rden fr\u00e5n v\u00e5r payload.\n      state.user = action.payload;\n    }</code></pre>\n',
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Nu har jag kommit en bit p\u00e5 v\u00e4gen att kombinera React Redux med tokens och API-anrop. N\u00e4r jag v\u00e4l f\u00f6rstod hur reducers och dispatch fungerar blev allt genast mycket klarare. Sedan anv\u00e4nder jag hooken useSelector f\u00f6r att h\u00e4mta ut den relevanta datan fr\u00e5n Redux globala lagring.</p>\n",
      protected: false,
    },
  },
  {
    id: 24,
    date: "2023-07-23T16:02:16",
    title: { rendered: "En intressant b\u00f6rjan" },
    content: {
      rendered:
        "\n<p>Jag har suttit och petat lite i ett inloggningssystem. Mitt inloggningssystem bygger p\u00e5 en rad teknologier och grunden \u00e4r tv\u00e5 endpoints, /register och /login p\u00e5 en express-server som sedan \u00e4r kopplad till en lokal mongo databas med hj\u00e4lp av Docker.</p>\n\n\n\n<!--more-->\n\n\n\n<p>Vidare har det kr\u00e4vts body-parser f\u00f6r att l\u00e4sa av inkommande anv\u00e4ndaruppgfiter skicakde som JSON. Dessa kontrolleras b\u00e5de p\u00e5 endpointen /register och /login mot databasen med anv\u00e4ndare. Vid /register ska det givetvis inte redan finnas en anv\u00e4ndare med samma uppgifter och vid /login ska det finnas en anv\u00e4ndare med samma inloggningsuppgifter.</p>\n\n\n\n<p>H\u00e4r finns det ocks\u00e5 ett s\u00e4kerhetst\u00e4nk och l\u00f6senordet \u00e4r i databasen krypterat. N\u00e4sta s\u00e4kerhetst\u00e4nk \u00e4r att anv\u00e4nda en <strong>access token </strong>ist\u00e4llet f\u00f6r inloggningsuppgifterna vid \u00e5tkomst till data. Vid inloggnings generares en access token som skickas till anv\u00e4ndaren. Denna access token skickas sedan i headern i kommande anrop efter exempelvis k\u00e4nslig data eller data bakom en v\u00e4gg &#8211; b\u00e5da kr\u00e4ver autentisering.</p>\n\n\n\n<p>Man skulle kunna sl\u00e4nga in en access token i local storage. En frontend kan d\u00e5 kolla om local storage har en accesss token och sedan autmatiskt logga in anv\u00e4ndaren. Local storage \u00e4r dock en d\u00e5lig id\u00e9 och n\u00e5s av hackare. D\u00e4rf\u00f6r b\u00f6r man ist\u00e4llet spara i en HTTP only cookie som inte kan n\u00e5s av hackare.</p>\n\n\n\n<p>Men \u00e4ven om det ska vara s\u00e4kert \u00e4r det n\u00f6dv\u00e4ndigt att t\u00e4nka p\u00e5 s\u00e4kerheten ytterligare ett steg. En d\u00e5ligt formad backend kan \u00e4nd\u00e5 riskera l\u00e4ckage av access token. Om n\u00e5gon f\u00e5r tag i en access token kan den i teorin f\u00e5 tag i alla uppgifter om en anv\u00e4ndare. D\u00e4rf\u00f6r \u00e4r det b\u00e4ttre att en access token bara \u00e4r valid en kort stund. D\u00e4rf\u00f6r \u00e4r <strong>refresh token</strong> en smartare id\u00e9. Den kan generera nya access tokens och kan sj\u00e4lv inte komma \u00e5t k\u00e4nslig data.</p>\n\n\n\n<p>Och det b\u00e4sta av allt: med refresh token kan vi forts\u00e4tta vara inloggade. N\u00e4r en access token blir invalid f\u00f6rlorar man \u00e5tkomsten till data som kr\u00e4ver autentisering. Utan en refresh token m\u00e5ste man logga ut och logga in igen f\u00f6r att skapa en ny access token.</p>\n\n\n\n<p>Jag ska l\u00e4gga ut mer senare om detta system f\u00f6r att sj\u00e4lv f\u00e5 en klarare bild av hur det fungerar samt hitta eventuella fel/risker/f\u00f6rb\u00e4ttringar.</p>\n\n\n\n<p></p>\n",
      protected: false,
    },
    excerpt: {
      rendered:
        "<p>Jag har suttit och petat lite i ett inloggningssystem. Mitt inloggningssystem bygger p\u00e5 en rad teknologier och grunden \u00e4r tv\u00e5 endpoints, /register och /login p\u00e5 en express-server som sedan \u00e4r kopplad till en lokal mongo databas med hj\u00e4lp av Docker.</p>\n",
      protected: false,
    },
  },
];

export async function GET({ params }) {
  return {
    body: JSON.stringify([
      {
        data: api,
      },
    ]),
  };
}
