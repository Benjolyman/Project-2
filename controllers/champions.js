const express = require('express');
const router = express.Router();
const Champions = require('../models/champion');
const Builds = require('../models/build');
const Item = require('../models/item');
const PrimaryRune = require('../models/primary-rune');
const SecondaryRune = require('../models/secondary-rune');
const SummonerSpell = require('../models/summoner-spell');
const StarterItem = require('../models/starter-item');
const morgan = require('morgan');

router.use(morgan('dev'));


//show all champs
router.get('/', async (req, res) => {
    try{
        const champions = await Champions.find({}).populate();
        res.render('champs/index.ejs', {
            champions
        })
    } catch (error) {
        console.log(error);
        res.redirect('/champions');
    }
});


//show champ page
router.get('/:id', async (req, res) => {
    try{
        const champions = await Champions.findById(req.params.id).populate('builds');
        res.render('champs/show.ejs', {
            champions
        })
    } catch (error) {
        console.log(error);
        res.redirect(`champions/${req.params.id}`);
    }
});


//new build
router.get('/:id/new', async (req, res) => {
    try {
        const champions = await Champions.findById(req.params.id);
        const items = await Item.find({});
        const primaryRunes = await PrimaryRune.find({});
        const secondaryRunes = await SecondaryRune.find({});
        const summonerSpells = await SummonerSpell.find({});
        const starterItems = await StarterItem.find({});
    
        res.render('champs/builds/new.ejs', {
            champions,
            items,
            primaryRunes,
            secondaryRunes,
            summonerSpells,
            starterItems
        });
    } catch (error) {
        console.log(error);
        res.redirect(`/champions/${req.params.id}`);
    }
});

router.get('/:champid/:buildid', async (req, res) => {
    
    try{
        res.render('champs/builds/show.ejs')
    } catch (error) {
        console.log(error);
        res.redirect(`/champions/${req.params.id}`)
    }
})

//upload build
router.post('/:id', async (req, res) => {
    try{
        const buildData = {
            name: req.body.name,
            champion: req.params.id,
            role: req.body.role,
            items: req.body.items,
            primaryRune: req.body.primaryRune,
            secondaryRune: req.body.secondaryRune,
            summonerSpells: [req.body.summonerSpells1, req.body.summonerSpells2]
        };

        req.body.owner = req.session.user._id;
        const build = await Builds.create(req.body);
        const champion = await Champions.findById(req.params.id);
        champion.builds.push(build);
        await champion.save();
    } catch (error) {
        console.log(error);
    } 
    res.redirect(`/champions/${req.params.id}`)
});

module.exports = router;
