class BoardMember {
  constructor(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

    veto(){
      returns `No, I must disagree`
    }

    approve(){
      returns "You can do that!"
    }

    doCharity(){
      returns "I like to help people."
    }
}
