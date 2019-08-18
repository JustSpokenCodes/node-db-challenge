
exports.seed = function(knex) {
  return knex('resource').insert([
    {resource_name: 'Library', description: 'a great place for learning new things', project_id: 1},
    {resource_name: 'Computer', description: 'a device that you love to hate and hate to love when it comes to coding', project_id: 2},
    {resource_name: 'Pair coding', description: 'when you and a mate you know enough code together so you both dont go crying at night because you couldnt figure out something simple', project_id: 3},
    {resource_name: 'Teacher', description: 'your best friend when it comes to figure out the correct way on how you messed up something simple', project_id: 4}
  ]);
};

