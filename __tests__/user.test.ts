import user from '../models/user';

test('if original user model', () => {
  expect(user.getAuthenticated()).toEqual({age: 39, name: 'Moshe Azaria'});
});