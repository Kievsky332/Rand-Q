const defaul = [
    "https://www.google.com/search?q=",
    "https://www.reddit.com/search/?q=",
    "https://www.youtube.com/results?search_query=",
    "https://pinterest.com/search/pins/?q=",
    "https://search.yahoo.com/search?p=",
    "https://ya.ru/search/?text=",
    "https://duckduckgo.com/?q=",
    "https://ru.wikipedia.org/w/index.php?search=",
    "https://luram.sorav.ru/luram/?q=",
    "https://www.baidu.com/s?wd=",
    "https://www.bing.com/search?q=",
    "https://www.ecosia.org/search?q=",
    "https://www.startpage.com/sp/search?query=",
    "https://search.brave.com/search?q=",
    "https://yep.com/web?q=",
    "https://rutube.ru/search/?query=",
    "https://github.com/search?q=",
    "https://www.100searchengines.com/?q=",
    "https://commons.wikimedia.org/w/index.php?search=",
    "https://tenor.com/search/",
    "https://www.flaticon.com/search?word="
];
console.log("Всего значений: "+(defaul.length));

const button = document.getElementById("myButton");
const query = document.getElementById("query");


function poisk(){
    if (query.value.trim() !==""){
        let generate = Math.floor(Math.random() * defaul.length) ; 
        console.log(generate+":"+defaul[generate]+query.value);
        window.location.href = defaul[generate]+query.value;
    }else{
        alert("Нету текста!")
    };
};


button.addEventListener("click", () => {
    poisk();
});


query.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        
        // Запускаем поиск, только если введено что-то кроме пробелов
        if (query.value.trim() !== '') {
            poisk();
        }
    }
});


