
exports.seed = function(knex) {
  return knex('project').insert([
    {name: "Knex", description: 'A SQL query builder for Javascript', completed: "true"},
    {name: "Redux-Swapi", description: 'A project to expose one to Redux-Thunk, Promises and async actions', completed: "true"},
    {name: "React-UI-Components", description: 'Used to build out User Interfaces soely with functional components in ReactJS', completed: "false"},
    {name: "WebAPI-III-Challenge", description: 'A challenge to build an API and write custom middleware', completed: "false"},
  ]);
};
