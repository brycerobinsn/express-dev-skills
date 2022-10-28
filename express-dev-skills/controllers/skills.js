const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}
function show (req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}
function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}
function deleteSkill(req,res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}
function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}
function update(req, res) {
    req.body.id = req.params.id
    Skill.updateOne(req.body)
    res.redirect('/skills/')
}