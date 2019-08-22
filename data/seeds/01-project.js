
exports.seed = function(knex) {
  return knex('project').truncate()
    .then(function(){
      return knex('project').insert([
        {id: 1, name: "Knex", description: 'A SQL query builder for Javascript', completed: "true"},
        {id: 2,name: "Redux-Swapi", description: 'A project to expose one to Redux-Thunk, Promises and async actions', completed: "true"},
        {id: 3,name: "React-UI-Components", description: 'Used to build out User Interfaces soely with functional components in ReactJS', completed: "false"},
        {id: 4, name: "WebAPI-III-Challenge", description: 'A challenge to build an API and write custom middleware', completed: "false"},
      ]);
    })
};