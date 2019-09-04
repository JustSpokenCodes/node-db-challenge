
exports.seed = function(knex) {
  return knex('task').truncate()
    .then(function(){
      return knex('task').insert([
        {id: 1, description: 'Try and figure out what exactly Knex is and why we need it', notes: 'I think im starting to understand...nope nope nevermind', completed: 0 , project_id: 1},
        {id: 2,description: 'A great way to introduce someone new to async and promises', notes: 'When I used async in my code, it not only helped my code so I could follow a certain method but caused me headaches because all pieces of the promise have to be in every function that uses async', completed: 1, project_id: 2},
        {id: 3,description: 'An introduction to UI and creatively creating your own', notes: 'This is a lot of fun because I can be creative and I finally know what Im seeing and doing', completed: 0, project_id: 3},
        {id: 4,description: 'A test of will on creating your own middleware correctly', notes: 'I can finish this in no time...Oh Is It Really Midnight?!', completed: 1, project_id: 4 }
      ]);
    })
  
};

