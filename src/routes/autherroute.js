const express = require('express');

var authers1 = [

    {
        name: "M. T. Vasudevan Nair",
        disc: `Madath Thekkepaattu Vasudevan Nair, popularly known as MT, is an Indian
                      author,screenplay writer and
                      film director. He is a prolific and versatile 
                      writer in modern Malayalam literature, and is one of the masters of
                      post-Independence Indian literature.`,
        awards: `Padma Bhushan, Jnanpith Award, Sahitya Akademi Award, Kerala Sahitya Akademi Award`,
        dob: "Born: 9 August 1933 (age 86 years), Kudallur",
        books: "Naalukettu,Asuravithu,Manju,Kaalam and Randamoozham",
        img: "VASUDEVAN_NAIR.jpg"
    },
    {
        name: "Kamala Suraiyya",
        disc: `Kamala Surayya, popularly known by her one-time pen name Madhavikutty
                     and married name Kamala Das, was an Indian English poet as well as a
                    leading Malayalam author from Kerala, India`,
        awards: `Muttathu Varkey Award, Kerala Sahitya Akademi Award for Story, Kerala State Film Award for 
                        Best Story, Vayalar Award`,
        dob: "31 March 1934, Punnayurkulam",
        books: `1964: Pakshiyude Manam (short stories)
                1966: Naricheerukal Parakkumbol (short stories)
                1968: Thanuppu (short story)
                1982: Ente Katha (autobiography)
                1987: Balyakala Smaranakal (childhood memoirs)
                1989: Varshangalkku Mumbu (novel)
                1990: Palayan (novel)
                1991: Neypayasam (short story)
                1992: Dayarikkurippukal (novel)
                1994: Neermathalam Pootha Kalam (novel)
                1996: Kadal Mayooram (short novel)
                1996: Rohini (short novel)
                1996: Rathriyude Padavinyasam (short novel)
                1996: Aattukattil (short novel)
                1996: Chekkerunna Pakshikal (short stories)`,
        img: "Kamala_das.jpg"
    },

    {
        name: "Vaikom Muhammad Basheer",
        disc: `Vaikom Muhammad Basheer (21 January 1908 – 5 July 1995), 
                      fondly known as Beypore Sultan, was an Indian independence
                    activist and writer of Malayalam literature . He was a writer,
                    humanist, freedom fighter, novelist and short story writer, 
                    noted for his path-breaking, down-to-earth style of writing
                    that made him equally popular among literary critics as well
                    as the common man. His notable works include Balyakalasakhi,
                    Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu,
                    anmadinam and Anargha Nimisham and the translations of his works into other languages have earned him worldwide acclaim. The Government of India awarded him the fourth highest civilian honour of the Padma Shri in 1982. He was also a recipient of the Sahitya Akademi Fellowship, Kerala Sahitya Akademi Fellowship, and the [Kerala State Film Award for Best Story]`,
        awards: `1970 Sahitya Akademi Fellowship
                        1970 Kerala Sahitya Akademi Fellowship
                        1970 Kerala Sahitya Akademi Award
                        1982 Padma Shri
                        1989 Kerala State Film Award for Best Story
                        1992 Lalithambika Antharjanam Award
                        1993 Muttathu Varkey Award
                        1993 Vallathol Award`,
        dob: "21 January 1908, Thalayolaparambu",
        books: `Premalekhanam,Balyakalasakhi,Ntuppuppakkoranendarnnu,Pathummayude Aadu`,
        img: "vykyam-muhammad-basheer.jpg"
    },
];
  var authors;
var autherrouter = express.Router();
var {AddauthorModel}=require('../models/AddAuthor');
function router(nav) {
    // autherrouter.route('/').
    // get((req, res) => {
    //     res.render('authers', { nav, tittle: "Authors", authers })
    // });
    autherrouter.route('/addauther').get(
        (req, res) => {
            res.render(
                'addauther', {
                    nav,
                    tittle: "Add Auther"
                }
            )
        });

        autherrouter.route('/').get(
            (req, res) => {
                AddauthorModel.find((err,data)=>{
                    if(err)
                    {
                      res.send("error happented")  
                    }
                    else{
                         authors=data;
                        res.render(
                            'authers', {
                                nav,
                                tittle: "Books",
                                authors
                            }
                        ) 
                    }
         })  
    
            });
        autherrouter.route('/save').post(
            (req, res) => {
                var books=new AddauthorModel(req.body);
                 books.save((error,data)=>{
                     if(error)
                     {
                         
                         /////writeing in a json
                         res.json({"status":error})
                         
                     }
                     else
                     {
                        res.json({"status":"success"})
                     }
                 });
                 
            });
    autherrouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('auther', {
                nav,
                tittle: "Auther",
                auther: authors[id]
            });
        });
       
    return autherrouter;
}

module.exports = router;