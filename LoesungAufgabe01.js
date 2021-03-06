/**
 * --------------------
 * --------------------
 * -------Teil 1-------
 * --------------------
 * --------------------
 * Bitte baue ein Script, welches die Posts von der URL (https://jsonplaceholder.typicode.com/posts/) 
 * holt und ein Array an JSON-Objekten ausgibt mit folgender Struktur:
 * 
 * {
 *  id: [ID des Posts],
 *  body: [body des Posts]
 * }
 * 
 * Die Posts sollen folgendermaßen gefiltert werden:
 * 
 * GEGEBEN das JSON der API wurde geladen
 * WENN der Parameter "body" eines JSON-Eintrag des geschickten Array das Wort "sint" (case-sensitive) beinhaltet
 * UND  
 * WENN der Parameter "body" eines JSON-Eintrag des geschickten Array länger als 150 Zeichen ist
 * DANN soll aus den Daten des JSON-Objekts ein neuer Eintrag erstellt werden und einem neuen Array 
 * von JSON-Objekten mit den Namen "filteredObjects" zugewiesen werden|
*/

const fetchData = async(url) => {
    const response = await fetch(url).then(response => response.json()).catch(error => false);
    return response;       
}

const postsUrl = "https://jsonplaceholder.typicode.com/posts/";
const postsRaw = await fetchData(postsUrl)
const filteredObjects = postsRaw.filter(post => post.body.includes("sint") && post.body.length > 150);

/**
 * --------------------
 * --------------------
 * -------Teil 2-------
 * --------------------
 * --------------------
/** 
* Mit dem erstellten Array soll weitergearbeitet werden: 
* Jeder der gefilterten Posts besitzt eine ID. Wir wollen nun 
* die Comments (https://jsonplaceholder.typicode.com/comments/*ID*) welche die gleiche ID 
* wie der Post haben laden und in einem neuen Array alle emails der Comment-Einträge haben. 
* Ziel ist es also ein Array voller Mails zu haben, die zu einem Comment-Eintrag mit einer 
* entsprechenden ID verfügen.
 
* GEGEBEN das Array "filteredObjects" wurde erfolgreich erstellt
* WENN ein Comment mit einer ID eines Eintrags des Array "filteredObjects" geladen wurde
* DANN soll der Value vom Parameter "email" in ein neues Array "mails" gespusht WebGL2RenderingContext.

* GEGEBEN das Array "mails" wurde erfolgreich erstellt
* WENN die Einträge durchgegangen werden
* DANN soll jeder Eintrag nur einmalig vorkommen (unique sein)|
*/

const commentsUrl = "https://jsonplaceholder.typicode.com/comments/";
const ids = filteredObjects.map(post => post.id);
let mails = [];
for (const id of ids) {
    const url = commentsUrl + id
    const commentRaw =  await fetchData(url);
    if (commentRaw && !mails.includes(commentRaw.email)){
        mails.push(commentRaw.email);
    }
}