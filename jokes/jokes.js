// my code starts here
class Joke{
    constructor(attribute){
        // asigning this.attribute to the passed in attribute
        this.attribute = attribute;

        // creating a reference to the 'button' tag
        this.viewJoke = attribute.querySelector('button')
        

        //console.log(`my button aye: ${this.viewJoke}`);

        // updating the text of my button
        this.viewJoke.textContent = 'View Joke'
        

        // added a click handler on viewJoke reference that's going to trigger the displayButton method 
        this.viewJoke.addEventListener('click', () => {
            this.displayButton();
        })
        
    }
    displayButton(){
    if(this.viewJoke.textContent === "View Joke"){
      this.viewJoke.textContent = 'Close'
    }
    else{
      this.viewJoke.textContent = 'View Joke'
    }   
    }
}

//  Selected all classes named ".jokes" and assiged them to variable jokes. 
let jokes = document.querySelectorAll('.joke')
//console.log(jokes);
jokes.forEach( (joke) => {
return new Joke(joke);
}); 

