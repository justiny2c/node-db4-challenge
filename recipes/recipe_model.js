const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('recipes')
}

function findById(id) {
    // return the user if found or null if not found
    return db('recipes')
      .where({ id }) // .where always returns an array    {id: id(from the params in function)}
      .first()
      .then(scheme => {
        if (scheme) {
          return scheme;
        } else {
          return null;
        }
      });
}

/* inner join steps as p on s.id = p.scheme_id */

function findSteps(id) {
    return db('schemes as s')
        .innerJoin('steps as p', 's.id', 'p.scheme_id')
        .where({ scheme_id: id })
        .select('s.id as id', 's.scheme_name as name','p.step_number as step', 'p.instructions as instructions');
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
}

function update(changes, id) {
    return db("schemes")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("schemes")
        .where({ id })
        .del()
}