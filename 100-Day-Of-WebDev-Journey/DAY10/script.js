const main_div = document.querySelector(`main`);
const persons = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Raj Sharma",
      age: 25,
      status: "Unmarried",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Priya Verma",
      age: 28,
      status: "Married",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Aman Singh",
      age: 30,
      status: "Unmarried",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sneha Kapoor",
      age: 26,
      status: "Married",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Vikram Mehra",
      age: 32,
      status: "Divorced",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Ankita Sinha",
      age: 22,
      status: "Unmarried",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Karan Patel",
      age: 27,
      status: "Married",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Neha Bansal",
      age: 24,
      status: "Unmarried",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Rohit Yadav",
      age: 29,
      status: "Married",
      IsFriend: "No",
      btnText: "Add"
    },
    {
      img: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Divya Malhotra",
      age: 31,
      status: "Divorced",
      IsFriend: "No",
      btnText: "Add"
    }
  ];
  

function createPerson() {
    let sum = "";
    persons.forEach((person , index) => {
      sum += `    <div class="cards">
          <div class="imgs">
              <img src="${person.img}" alt="$">
          </div>
          <div class="details">
              <p><span>Name:</span> ${person.name}</p>
              <p><span>Age:</span> ${person.age}</p>
              <p><span>Status:</span> ${person.status}</p>
          </div>
          <div class="friend_status">
              <p class="friendYN"><span>Friend:</span> ${person.IsFriend} </p>
              <button class="add_friend" id="${index}">${person.btnText}</button>
      </div>
      </div>
  `
});
main_div.innerHTML = sum;
}

createPerson();
main_div.addEventListener(`click`, (elem) => {
    let arryid = persons[elem.target.id];
    
    
    // console.log(persons[arryid].IsFriend);
    if(arryid.IsFriend == "No"){
        arryid.IsFriend = "Yes";
        arryid.btnText = "Remove";

        // add_friend[index].innerHTML = "Remove Friend";
        
    }else{
        arryid.IsFriend = "No";
        arryid.btnText = "Add";
        // add_friend[index].innerHTML = "Add Friend";
    }
    createPerson();
});