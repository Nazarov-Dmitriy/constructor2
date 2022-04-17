import Bowerman from "../Bowerman.js";
jest.mock('../Bowerman.js')

it('Bowerman test level up', () => {

  let result = new Bowerman('Bowerman', 'Bowman');
  result.levelUp();
  expect(result).toEqual({
    name: 'Bowerman',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

it('Bowerman test damege', () => {

  let result = new Bowerman('Bowerman', 'Bowman');
  result.damage(10);
  expect(result).toEqual({
    name: 'Bowerman',
    type: 'Bowman',
    health: 82.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
