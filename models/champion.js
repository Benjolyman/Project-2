const mongoose = require ('mongoose');

const ChampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    builds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Build', 
    }]
});

const Champion = mongoose.model('Champion', ChampSchema);
module.exports = Champion;

let champions = [
    { name: "Ahri", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Ahri.png" },
    { name: "Akali", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Akali.png" },
    { name: "Akshan", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Akshan.png" },
    { name: "Alistar", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Alistar.png" },
    { name: "Amumu", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Amumu.png" },
    { name: "Anivia", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Anivia.png" },
    { name: "Annie", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Annie.png" },
    { name: "Aphelios", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Aphelios.png" },
    { name: "Ashe", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Ashe.png" },
    { name: "Aurelion Sol", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/AurelionSol.png" },
    { name: "Azir", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Azir.png" },
    { name: "Bard", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Bard.png" },
    { name: "Bel'Veth", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Belveth.png" },
    { name: "Blitzcrank", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Blitzcrank.png" },
    { name: "Brand", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Brand.png" },
    { name: "Braum", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Braum.png" },
    { name: "Caitlyn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Caitlyn.png" },
    { name: "Camille", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Camille.png" },
    { name: "Cassiopeia", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Cassiopeia.png" },
    { name: "Cho'Gath", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Chogath.png" },
    { name: "Corki", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Corki.png" },
    { name: "Darius", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Darius.png" },
    { name: "Diana", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Diana.png" },
    { name: "Dr. Mundo", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/DrMundo.png" },
    { name: "Draven", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Draven.png" },
    { name: "Ekko", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Ekko.png" },
    { name: "Elise", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Elise.png" },
    { name: "Evelynn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Evelynn.png" },
    { name: "Ezreal", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Ezreal.png" },
    { name: "Fiddlesticks", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Fiddlesticks.png" },
    { name: "Fiora", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Fiora.png" },
    { name: "Fizz", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Fizz.png" },
    { name: "Galio", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Galio.png" },
    { name: "Gangplank", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Gangplank.png" },
    { name: "Garen", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Garen.png" },
    { name: "Gnar", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Gnar.png" },
    { name: "Gragas", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Gragas.png" },
    { name: "Graves", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Graves.png" },
    { name: "Gwen", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Gwen.png" },
    { name: "Hecarim", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Hecarim.png" },
    { name: "Heimerdinger", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Heimerdinger.png" },
    { name: "Illaoi", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Illaoi.png" },
    { name: "Irelia", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Irelia.png" },
    { name: "Ivern", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Ivern.png" },
    { name: "Janna", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Janna.png" },
    { name: "Jarvan IV", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/JarvanIV.png" },
    { name: "Jax", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Jax.png" },
    { name: "Jayce", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Jayce.png" },
    { name: "Jhin", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Jhin.png" },
    { name: "Jinx", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Jinx.png" },
    { name: "Kai'Sa", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kaisa.png" },
    { name: "Kalista", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kalista.png" },
    { name: "Karma", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Karma.png" },
    { name: "Karthus", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Karthus.png" },
    { name: "Kassadin", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kassadin.png" },
    { name: "Katarina", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Katarina.png" },
    { name: "Kayle", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kayle.png" },
    { name: "Kayn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kayn.png" },
    { name: "Kennen", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kennen.png" },
    { name: "Kha'Zix", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Khazix.png" },
    { name: "Kindred", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kindred.png" },
    { name: "Kled", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Kled.png" },
    { name: "Kog'Maw", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/KogMaw.png" },
    { name: "LeBlanc", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Leblanc.png" },
    { name: "Lee Sin", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/LeeSin.png" },
    { name: "Leona", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Leona.png" },
    { name: "Lillia", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Lillia.png" },
    { name: "Lissandra", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Lissandra.png" },
    { name: "Lucian", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Lucian.png" },
    { name: "Lulu", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Lulu.png" },
    { name: "Lux", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Lux.png" },
    { name: "Malphite", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Malphite.png" },
    { name: "Malzahar", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Malzahar.png" },
    { name: "Maokai", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Maokai.png" },
    { name: "Master Yi", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/MasterYi.png" },
    { name: "Milio", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Milio.png" },
    { name: "Miss Fortune", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/MissFortune.png" },
    { name: "Mordekaiser", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Mordekaiser.png" },
    { name: "Morgana", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Morgana.png" },
    { name: "Nami", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Nami.png" },
    { name: "Nasus", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Nasus.png" },
    { name: "Nautilus", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Nautilus.png" },
    { name: "Neeko", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Neeko.png" },
    { name: "Nidalee", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Nidalee.png" },
    { name: "Nilah", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Nilah.png" },
    { name: "Nocturne", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Nocturne.png" },
    { name: "Nunu & Willump", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Nunu.png" },
    { name: "Olaf", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Olaf.png" },
    { name: "Orianna", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Orianna.png" },
    { name: "Ornn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Ornn.png" },
    { name: "Pantheon", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Pantheon.png" },
    { name: "Poppy", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Poppy.png" },
    { name: "Pyke", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Pyke.png" },
    { name: "Qiyana", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Qiyana.png" },
    { name: "Quinn", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Quinn.png" },
    { name: "Rakan", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Rakan.png" },
    { name: "Rammus", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/Rammus.png" },
    { name: "Rek'Sai", imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/RekSai.png" }
]


// let championInsert = champions.map(champion => ({ name: champion.name, id: champion.id , imageUrl: champion.imageUrl }));

// Champion.insertMany(championInsert)
//     .then(function (docs) {
//         console.log('Items have been successfully stored.', docs);
//     })
//     .catch(function (err) {
//         console.log('Error occurred while storing items.', err);
//     });
