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
    
    let randomColorArr = [];

    for(let i = 0; i < 3; i++) {
        randomColorArr.push('#'+Math.floor(Math.random()*16777215).toString(16)) ;
    }

    //icons.color = randomColorArr;
    //console.log(icons.color)
    //console.log(icons.color[0])


    let differentTypes = icons.filter((element, index, array) => {

        if(JSON.stringify(element.type) === JSON.stringify(element.type)){
            
            
            
            document.getElementById('container').innerHTML += 
            `<i class="${element.family} ${element.prefix}${element.name} ${element.family} fa-2x" style="color:${randomColorArr[numeroRandom(0, 3)]}"></i> 
            <h4>${element.name} </h4>`
            
          
        } 
        
    });

    



    function numeroRandom(min, max) { 
        return Math.floor(Math.random() * (max - min + 1)) + min;  
    } 