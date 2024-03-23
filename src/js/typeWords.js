class TypeWords{
    constructor(words, target){
        this.words=words
        this.target=target
        this.wait=false
        this.time=500
    }
    setTime(time){
      this.time=time
    }
    timer = (ms) => new Promise(res => setTimeout(res, ms))
    async type (word){
        while(this.wait==false){
            
          for(let i=0; i<=word.length;i++){
            this.target.innerText=word.substring(0, i)
            await this.timer(this.time);
            if(i==word.length){
              this.wait=true
            }
          }
        }
        return this.wait=false
    }
    async delete (word){
        while(this.wait==false){
            
          for(let i=word.length; i>=0;i--){
            this.target.innerText=word.substring(0, i)
            await this.timer(this.time);
            if(i==0){
              this.wait=true
            }
          }
        }
        return this.wait=false
    }
    async show (){
        while(true){
            
            for(let i=0; i<this.words.length;i++){
                this.target.classList.add(this.words[i].cssClass)
                await this.type(this.words[i].text)
                await this.delete(this.words[i].text)
                this.target.classList.remove(this.words[i].cssClass)
            }
        }  
    }
}
const countryData = [
  {
    text: 'Poland',
    cssClass: 'poland'
  },
  {
    text: 'Spain',
    cssClass: 'spain'
  },
  {
    text: 'Italy',
    cssClass: 'italy'
  },
  {
    text: 'Wales',
    cssClass:'wales'
  }
]
const hobbyData = [
  {
    text: 'Video games',
    cssClass:'aboutMe__box__text--hobby'
  },
  {
    text: 'Self-development',
    cssClass:'aboutMe__box__text--hobby'
  },
  {
    text: 'Cooking',
    cssClass:'aboutMe__box__text--hobby'
  },
]


const countryTarget = document.querySelector('.aboutMe__box__text--country')
let typeCountry = new TypeWords(countryData, countryTarget)
typeCountry.show()

const hobbyTarget = document.querySelector('.aboutMe__box__text--hobby')
let typeHobby = new TypeWords(hobbyData,hobbyTarget)
typeHobby.setTime(300)
typeHobby.show()
