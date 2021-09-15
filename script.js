const output=document.querySelector('.output')

const input=document.querySelector('.input')
const search='https://api.jikan.moe/v3/search/anime?q='
const url='https://api.jikan.moe/v3/anime/'
document.querySelector('.btn').addEventListener('click',getAnime)


function getAnime(e){
console.clear()
output.innerHTML=''

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

    fetch(url+1)
    .then((res)=>res.json())
    .then(anime=>
        {
            console.log(anime)
           myFunction(anime)
            function myFunction(res,index)
                {
                    console.log("i have been here")
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
    })
    .catch(err=>{
        console.log(err)
    })

    
    e.preventDefault()
}