const user = jest.createMockFromModule('../user');

user.getAuthenticated = () => ({
  age: 5,
  name: 'Mocker TheGreat',
});

export default user;