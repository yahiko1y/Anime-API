const output=document.querySelector('.output')

const input=document.querySelector('.input')
const search='https://api.jikan.moe/v3/search/anime?q='
const url='https://api.jikan.moe/v3/anime/'
document.querySelector('.btn').addEventListener('click',getAnime)


function getAnime(e){
console.clear()
output.innerHTML=''

    fetch(search+input.value)
    .then((res)=>res.json())
    .then(anime=>
        {
            console.log(anime)
            document.querySelector('.found').innerText=anime.results.length
            anime.results.forEach(myFunction)
            function myFunction(res,index)
                {
                    const div=document.createElement('div')
                    const synopsis=document.createElement('p')
                    const title=document.createElement('h3')
                    const img=document.createElement('img')
                    div.setAttribute('class','box')
                    div.appendChild(title)
                    div.appendChild(synopsis)
                    div.appendChild(img)
                    title.innerHTML=res.title
                    
                    img.setAttribute('src',res.image_url)
                    output.appendChild(div)
                    fetch(url+res.mal_id)
                        .then((r)=>r.json())
                        .then(a=>
                            {
                                synopsis.innerHTML=a.synopsis
                                console.log(a)
                            })
                        .catch()
                }


            //side project
            console.log(anime.results[0].mal_id)
            
          
    })
    .catch(err=>{
        console.log(err)
    })

    
    e.preventDefault()
}