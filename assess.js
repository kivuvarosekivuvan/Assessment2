// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.


class Story{
    constructor(length,language,lesson,type){
        this.length=length
        this.language=language
        this.lesson=lesson
        this.type=type
        season=[]
        storyCategory=[]
    }
// This method will help finding stories in terms of their lesson,season,length,language
    getStory(){
        if(this.lesson=="Educative" && this.length=="Short" && this.language=="Bukusu" && this.season=="Initiation"){
            return `This is a story for boys in initiation ceremony`
        }
    }

    // This method will be adding stories in the existing list of storyList depending on their length,language and category
    addStory(){
        storyList=[];
        const add=()=>{if(this.length=="long" && this.language=="Swahili" && this.storyCategory=="Children"){
         storyList.append(add)
        
        }
    }
       return storyList
    }
}

class StoryTeller extends Story{
    constructor(length,type,language){
        this.length=length
        this.type=type
        this.language=language
    }
    super(age,gender){
        this.age=age
        this.gender=gender
    }


       // This method determines the storyTeller, and the criteria I use is their gender and age
       storyTeller(){
        if (this.age>=50 && this.gender=="Female"){
            return `This storyTeller will coach young girls and will give them ${this.length} stories of type ${this.type}`
        }
        else if (this.age>=50 &&this.gender=="Male"){
            return`This storyTeller will coach young boys and will give them ${this.length} stories of type ${this.type}`
        }
    }

        // This method determines the translator  regarding to the languages they speak
        translator(personLanguage){
            personLanguage=""
            if (personLanguage==this.language){
                return`This translator will translate in ${this.language} `
            }
            else{
                return `The translator does not understand that language`
            }
        }

}

// This is the instance of the whole Story class together with methods
const result=new Story("Short","Kikuyu","Educative","Poetic")
result.getStory()
result.addStory()
const result2=new StoryTeller(76, "Female")
result2.storyTeller()
result2.translator("Kikuyu")







2.// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipe{
    constructor(ingredients,time,method,information){
        this.ingredients=ingredients
        this.time=time
        this.method=method
        this.information=information
       
    }
    foodname(){
        if(this.ingredients=="Beans and maize" && this.time=="2hrs" && this.method=="Fry" && this.information=="Adds protein"){
            return `The foodname is githeri`
        }
    }
}

// This is a class that inherits from Recipe class
class EthiopianRecipe extends Recipe{
    constructor(ingredients,time,method,information){
        this.ingredients=ingredients
        this.time=time
        this.method=method
        this.information=information

    }
    super(name,origin){
        this.foodName=name
        this.origin=origin
    }
    createRecipe(){
        if(this.foodName=="Angera" && this.ingredients=="Flour" && this.origin=="Ethiopia"){
            return `This is EthiopianRecipe that adds  ${this.information}`
        }
        else{
            return`This is not EthiopianRecipe`
        }

    }

}

// An instance of both classes
const z=new Recipe("Flour", "2hrs", "Fry", "Adds vitamin C")
z.foodname()
const a= new EthiopianRecipe(super("Angera", "Ethiopia"))
a.createRecipe()



3.// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

class Species{
    constructor(name,diet,colour,ability){
        this.name=name
        this.diet=diet
        this.colour=colour
        this.ability=ability
        defensiveWay=""
    }
    detemineSpecie(){
        if(this.defensiveWay=="Shoot"){
            return `This specie is human being/predator`
        }
        else{
            return `This specie is an animal`
        }
    }

}

// This class inherits from species and has methods to determineprey direction and preyvalue depending on its name
class Predator extends Species{
    constructor(name){
        this.name=name
        
    }
    super(predatorDirection){
        this.predatorDirection=predatorDirection

    }
    
    determinePreyDirection(){
        if(this.predatorDirection=="South"){
            return `The prey is south`
        }
    }

    preyValue(preyDirection){
        preyDirection=""
        if(this.name=="Elephant" && this.predatorDirection==preyDirection){
            return `The predator needs horns from the prey`
        }
        else{
            return `None`
        }
    }
    
}


// This class inherits from species to show methods like migrationpattern of the prey and determine the prey regarding their families and diet and colour
class Prey extends Species{
    constructor(name,diet,colour){
        this.name=name
        this.diet=diet
        this.colour=colour
    }
    super(family,season){
        this.family=family
        this.season=season
    }

   migratePattern(dryDirection){
    dryDirection=""
    if (this.season=="dry" && dryDirection=="south"){
        return `The prey will migrate to North`
    }
    else{
        return`The prey will migrate to South`
    }
   }

   determinePrey(){
    if(this.family=="cat" && this.diet=="flesh" && this.colour=="Dotted brown"){
        return`The prey is a cheetah`
    }
   }
}

// Instance of the classes
const call=new Species("Cheetah","Flesh","Brown","Jump","Bite" )
call.detemineSpecie()
const call2=new Predator(super("South"))
call2.determinePreyDirection()
call2.preyValue()
const call3=new Prey(super("Cat", "Dry"))
call3.migratePattern()
call3.determinePrey()