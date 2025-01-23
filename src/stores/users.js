import { defineStore } from "pinia";

// define store from pinia is a function that has already been written by pinia devs we make use of that for free

export let useUsersStore = defineStore( "usersStore",{
   state:()=>({
    
    users : [
      {
        id: 3,
        username: 'Michael Johnson',
        age: 22,
        gender: 'male',
        email: 'michael.johnson@example.com',
        balance: 800.75,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Michael',
        bio: 'Michael is a college student studying economics and loves soccer.'
      },
      {
        id: 4,
        username: 'Emily Davis',
        age: 30,
        gender: 'female',
        email: 'emily.davis@example.com',
        balance: 1600.20,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Emily',
        bio: 'Emily is a marketing manager who enjoys reading and traveling.'
      },
      {
        id: 5,
        username: 'William Brown',
        age: 25,
        gender: 'male',
        email: 'william.brown@example.com',
        balance: 450.00,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=William',
        bio: 'William is a freelance writer with a passion for history and gaming.'
      },
      {
        id: 6,
        username: 'Olivia Wilson',
        age: 27,
        gender: 'female',
        email: 'olivia.wilson@example.com',
        balance: 3100.10,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Olivia',
        bio: 'Olivia is a financial advisor who loves yoga and healthy living.'
      },
      {
        id: 7,
        username: 'James White',
        age: 32,
        gender: 'male',
        email: 'james.white@example.com',
        balance: 2750.00,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=James',
        bio: 'James is a chef known for his love of creative cuisine and biking.'
      },
      {
        id: 8,
        username: 'Sophia Miller',
        age: 29,
        gender: 'female',
        email: 'sophia.miller@example.com',
        balance: 1299.99,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Sophia',
        bio: 'Sophia is a fashion designer inspired by culture and innovation.'
      },
      {
        id: 9,
        username: 'Henry Martinez',
        age: 35,
        gender: 'male',
        email: 'henry.martinez@example.com',
        balance: 520.60,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Henry',
        bio: 'Henry is a business consultant with a love for golf and travel.'
      },
      {
        id: 10,
        username: 'Ava Taylor',
        age: 24,
        gender: 'female',
        email: 'ava.taylor@example.com',
        balance: 990.00,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Ava',
        bio: 'Ava is a content creator focused on technology and social media.'
      },
      {
        id: 11,
        username: 'Daniel Scott',
        age: 40,
        gender: 'male',
        email: 'daniel.scott@example.com',
        balance: 4200.50,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Daniel',
        bio: 'Daniel is an architect who enjoys photography and classic cars.'
      },
      {
        id: 12,
        username: 'Mia Lopez',
        age: 26,
        gender: 'female',
        email: 'mia.lopez@example.com',
        balance: 310.75,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Mia',
        bio: 'Mia is a social media manager who loves fitness and vegan recipes.'
      },
      {
        id: 13,
        username: 'Charlotte Green',
        age: 31,
        gender: 'female',
        email: 'charlotte.green@example.com',
        balance: 2755.20,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Charlotte',
        bio: 'Charlotte is a project manager with a passion for music and dance.'
      },
      {
        id: 14,
        username: 'Liam Carter',
        age: 37,
        gender: 'male',
        email: 'liam.carter@example.com',
        balance: 1980.00,
        profileImage: 'https://dummyimage.com/100x100/fff/000&text=Liam',
        bio: 'Liam is a fitness trainer who enjoys hiking and motivational speaking.'
      }],
      
})
   ,
   getters:{

   highestPayingClient(){

    return this.users.reduce((a,c)=>{
        if (a.balance < c.balance){
            return c
        }
        return a
    },this.users[0])

    }


   }



})