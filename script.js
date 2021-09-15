const output=document.querySelector('.output')

const input=document.querySelector('.input')
const search='https://api.jikan.moe/v3/search/anime?q='
const url='https://api.jikan.moe/v3/anime/'
let ran=[]
document.querySelector('.btn').addEventListener('click',getAnime)


function getAnime(e){

    ran=[]
console.clear()
output.innerHTML=''

function getRandomInt(max=1000) {
    for (let i = 0; i < 5; i++){
        
        ran.push(Math.floor(Math.random() * max))
    }
  }

  getRandomInt()
  
  ran.forEach(search);

  function search(num, index){
            fetch(url+num)
            .then((res)=>res.json())
            .then(anime=>
                {
                    
                    if (anime.status== 404){
                        console.log(anime.status)
                        search((Math.floor(Math.random() * 1000)))

                    }

                    else if(anime.status== 429){
                        console.log(anime.status)
                        setTimeout(() => { search((Math.floor(Math.random() * 1000))) }, 1000)
                    }

                    
                    
                    else
                    {
                        console.log(anime)
                        myFunction(anime)
                            function myFunction(res,index)
                                {
                                    const div=document.createElement('div')
                                    const synopsis=document.createElement('p')
                                    const title=document.createElement('h3')
                                    const img=document.createElement('img')
                                    div.setAttribute('class','box')
                                    div.appendChild(title)
                                    div.appendChild(img)
                                    div.appendChild(synopsis)
                                
                                    title.innerHTML=res.title
                                    synopsis.innerHTML=res.synopsis
                                    
                                    img.setAttribute('src',res.image_url)
                                    output.appendChild(div)
                                    
                                }   
                    }
                    
            })
            .catch(err=>{
                console.log(err)
            })


  }

    
    
    e.preventDefault()
}