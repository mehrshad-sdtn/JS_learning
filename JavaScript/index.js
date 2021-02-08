// factory
function createStudent(name){
  return {
      name,
      sayHello: function() {
          console.log("dorood "+ name);
      }
    };

     

}

student1 = createStudent("Mehrshad");
student1.sayHello();


//constructor
function Admin(username) {
    this.username = username;
    this.login = function() {
        console.log(username + " is logging in")
}

}

const admin = new Admin("mehrshad_sdt");
admin.login();