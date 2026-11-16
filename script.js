
console.log("Всего значений: "+(defaul.length));

const button = document.getElementById("myButton");
const query = document.getElementById("query");
const params = new URLSearchParams(window.location.search);

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



