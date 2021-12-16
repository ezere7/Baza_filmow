import React,  { Component } from 'react';
import { Link } from "react-router-dom";

class Szczegoly_filmu extends Component {
    state = {};

    render(){
        return <div >
        <div style={{float: "left", marginTop: "70px", marginLeft: "2%",display: "flex", flexDirection: "row"}}>
                    <img class="img" src="https://fwcdn.pl/fpo/10/48/1048/6925401.3.jpg" />
               <div style={{ float: "left",display: "flex", flexDirection: "row", marginLeft: "2%", marginRight: "3%" }}>
                    <p>„Skazani na Shawshank” to film o nadziei, sile i zachowaniu człowieczeństwa w każdych warunkach – dzieło utrzymane w typowym klimacie amerykańskiego kina, a jednak uznawane za jeden z najważniejszych filmów lat 90., a zarazem za jedną z najlepszych adaptacji prozy Stephena Kinga. Wśród czynników o tym decydujących bez wątpienia należy wymienić wybitne aktorstwo. Tim Robbins jako główny bohater, Andy Dufresne, oraz Morgan Freeman jako Red stworzyli niezapomniane kreacje, wcielając się w więźniów, których połączyła niezwykła przyjaźń.
                        Gdy Andy przybywa do więzienia z wyrokiem podwójnego dożywocia, Red jest już „weteranem”. Po kilkudziesięciu latach spędzonych w Shawshank posiada określoną pozycję, stoi wysoko w więziennej hierarchii. Na prośbę współwięźniów szmugluje różne przedmioty, dzięki czemu zyskuje sobie szacunek. Już podczas pierwszej nocy Red zauważa, że Andy nie jest zwykłym osadzonym, który w wyniku paskudnego występku nagle znalazł się w zakładzie karnym. Główny bohater ma w sobie dziwny spokój i dystans. Nie okazuje strachu, paniki, nie popada w szaleństwo, mimo że jego normalne życie nagle i nieodwracalnie musiało się skończyć. W opinii Reda Andy uosabia trochę naiwnego marzyciela, który wierzy, że przyjmując odpowiednią postawę, będzie w stanie przetrwać okres spędzony w więzieniu – mimo wyroku bowiem pobyt w Shawshank zdaje się dla protagonisty tylko pewnym etapem w życiu. Red z kolei nie ma już nadziei na warunkowe zwolnienie przed ukończeniem kary. Zderzają się tu ze sobą dwie skrajne postawy; mimo to między mężczyznami tworzy się wyjątkowa więź – nawzajem ratują sobie życie.
                        Jedną z niemych bohaterek filmu jest legendarna aktorka, Rita Hayworth. Plakat z jej wizerunkiem, zdobyty w tajemniczy sposób przez Reda, wisi na ścianie celi Andy’ego. Gwiazda filmowa jest symbolem wolności i życia, a wkrótce stanie się również symbolem ucieczki. To ona – ikona filmu – skrywa największy sekret Andy’ego. </p>
               </div>
            </div>
       </div>
    }
}

export default Szczegoly_filmu;