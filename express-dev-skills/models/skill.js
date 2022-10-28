const skills = [
    {id: 12353, skill: 'Express', possess: true},
    {id: 22546, skill: '360 No Scope', possess: true},
    {id: 12606, skill: 'JavaScript', possess: true},
    {id: 26403, skill: 'Flight', possess:false}
]
module.exports = {
    getAll,
    getOne,
    create
}

function getAll(){
    return skills
}
function getOne(id){
    // convert url param to number
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}
function create(skill) {
    skill.id = Date.now() % 1000000
    skill.possess = false
    skills.push(skill)
}