function abbrevName(name){
  newName = name.toUpperCase('');
  const names = newName.split(' ');
  const firstInitial = names[0][0];
  const secondInitial = names[1][0];
  return firstInitial + '.' + secondInitial;
}