const express = require('express');
const router = express.Router();
const Champions = require('../models/champion');
const Builds = require('../models/build');
const Item = require('../models/item');
const PrimaryRune = require('../models/primary-rune');
const SecondaryRune = require('../models/secondary-rune');
const SummonerSpell = require('../models/summoner-spell');
const morgan = require('morgan');

router.use(morgan('dev'));

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

router.get('/:id', async (req, res) => {
    try{
        const builds = await Builds.find({}).populate();
        const champions = await Champions.findById(req.params.id);
        res.render('champs/show.ejs', {
            champions,
            builds
        })
    } catch (error) {
        console.log(error);
        res.redirect(`champions/${req.params.id}`);
    }
});

router.get('/:id/new', async (req, res) => {
    try {
        const champions = await Champions.findById(req.params.id);
        const items = await Item.find({});
        const primaryRunes = await PrimaryRune.find({});
        const secondaryRunes = await SecondaryRune.find({});
        const summonerSpells = await SummonerSpell.find({})
        res.render('champs/builds/new.ejs', {
            champions,
            items,
            primaryRunes,
            secondaryRunes,
            summonerSpells
        });
    } catch (error) {
        console.log(error);
        res.redirect(`/champions/${req.params.id}`);
    }
});

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
        await Builds.create(req.body);
    } catch (error) {
        console.log(error);
    } 
    res.redirect(`/champions/${req.params.id}`)
});

module.exports = router;
