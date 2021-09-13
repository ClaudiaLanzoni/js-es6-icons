let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/**
 * Milestone 1
    Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. CHECK :')
    Milestone 2
    Coloriamo le icone per tipo
    Milestone 3
    Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */
    //array vuoto dei tipi
    //for each sulle icone
    //per ogni icona devi pushare il tipo nell'array dei tipi se non è presente
    //devi estrarre dall'array delle icone un array di tipi



    /*
    let container = document.getElementById('my_icon-box');

    let colors = ['magenta', 'green', 'blue', 'red', 'yellow'];

    let colorizedIcons = colorizeItems(icons, colors);
    printToPage(colorizedIcons, container);

    let types = getUniquePropertyValues(icons, "type")
    let select = document.querySelector('#my_select');

    addOptions(types, select);

    select.addEventListener('change', () => {
        let selectedValue = select.value;
        console.log(selectedValue);

        let filteredIcons = filterItems(colorizedIcons, selectedValue);

        printToPage(filteredIcons, container)
    });

    function printToPage(array, container) {

        let temporaryHTML = "";

        array.forEach ((element) => {
            const {family, name, prefix, type, color} = element;

            temporaryHTML +=
            `<div>
            <i class="${family} ${prefix}${name} ${family} fa-2x" style="color:${color}"></i> 
            <h6>${name} (${type})</h6>
            </div>`
        });

        container.innerHTML = temporaryHTML; //assegnato alla fine di tutti i cicli
    }


    function getUniquePropertyValues(array, property){
        let types = [];


        array.forEach( (element) => {
            if (!types.includes(element[property])) {
                types.push(element[property]);
            }
        });

        return types;
    }


    function colorizeItems(array, colors) {
        let types = getUniquePropertyValues(array, "type");
        console.log(types);

        if(types.length > colors.length) {
            return null;
        }

        let colorizedArray = array.map ((element) => {
            let indexOfType = types.indexOf(element.type);

            if (indexOfType !== -1 ) {
                element.color = colors[indexOfType];
            }
            return element;
        })
        return colorizedArray;
    }

    function addOptions(options, select) {
        options.forEach((element) => {
            select.innerHTML += `<option value="${element}">${element}</option>`;
        });
    }

    function filterItems(array, filter){
        if (filter.trim().toLowerCase() === 'all') {
            return array;
        }

        return array.filter((element) => element.type == filter);
    }

*/











    
    /*
    let randomColorArr = [];

    for(let i = 0; i < 3; i++) {
        randomColorArr.push('#'+Math.floor(Math.random()*16777215).toString(16)) ;
    }

    //icons.color = randomColorArr;
    //console.log(icons.color)
    //console.log(icons.color[0])

    


    let differentTypes = icons.filter((element, index, array) => {
    
            
        document.getElementById('container').innerHTML += 
        `<i class="${element.family} ${element.prefix}${element.name} ${element.family} fa-2x" style="color:${randomColorArr[1]}"></i> 
        <h4>${element.name} </h4>`
        
        
        
    });

    



    function numeroRandom(min, max) { 
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    } 
    */