const petya = {
    username: "Petya",
    showThis() {
      console.log(this);
    },
    showName() {
      console.log(this.username);
    },
  };
  
  petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
  petya.showName(); // 'Petya'