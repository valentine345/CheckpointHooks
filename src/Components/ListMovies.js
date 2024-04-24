import { useState } from "react"
import CardMovie from "./CardMovie"
import AddMovie from "./AddMovie"

const ListMovie=()=>{
    const [movies,setMovies] = useState(
        [
            {name : "Black Panther", description : "Black Panther: Wakanda Forever ou Black Panther : Longue vie au Wakanda au Québec est un film de super-héros américain coécrit et réalisé par Ryan Coogler, sorti en 2022.", image : "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg"},
            {name : "Moi capitaine", description : "Seydou et Moussa, deux jeunes sénégalais de 16 ans, décident de quitter leur terre natale pour rejoindre l'Europe, mais sur leur chemin les rêves et les espoirs d'une vie meilleure sont très vite anéantis par les dangers de ce périple. Leur seule arme dans cette odyssée restera leur humanité.", image :"https://fr.web.img5.acsta.net/pictures/23/10/11/09/12/4467686.jpg"},
            {name : "Fences", description : "À Pittsburgh dans les années 50, Troy habite une maison ouvrière avec sa famille. Cet éboueur a toujours rêvé devenir joueur de baseball professionnel et il est convaincu qu'il a été victime de racisme à cause de la couleur de sa peau.", image :"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13098062_p_v8_ak.jpg"},
            
        ]
    )

    const [recherche,setRecherche] = useState("")
    var x =  movies.filter((el,i,t)=> el.name.toLowerCase().includes(recherche.toLowerCase()) )
    return(
        <div>
            <input type="text" onChange={(e)=> setRecherche(e.target.value)}/>
            <AddMovie movies={movies} setMovies={setMovies}/>
            <div className="elvige">
                {
                   x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
                }
            </div>
        </div>
    )
}

export default ListMovie