// my code starts here
class Joke{
    constructor(attribute){
        // asigning this.attribute to the passed in attribute
        this.attribute = attribute;

        // creating a reference to the '.view-joke' class
        this.viewJoke = attribute.querySelector('.view-joke')
        //console.log(`my button aye: ${this.viewJoke}`);

        // updating the text of my view-joke button
        this.viewJoke.textContent = 'View More Jokes'

        // added a click handler on viewJoke reference that's going to trigger the viewContent method 
        this.viewJoke.addEventListener('click', () =>{
            this.viewContent()
        });
    }
    viewContent(){
        
        
    }
}

//  Selected all classes named ".jokes" and assiged them to variable jokes. 
let jokes = document.querySelectorAll('.joke')
console.log(jokes);
jokes.forEach( (joke) => {
return new Joke(joke);
}); 

