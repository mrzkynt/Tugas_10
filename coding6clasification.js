function groupPeopleByAttributes(people) {
    const groups = {
      sex: {
        male: [],
        female: [],
      },
      age: {
        under20: [],
        older: [],
      },
      marriage: {
        single: [],
        double: [],
      },
      status: {
        student: [],
        employee: [],
      },
    };
  
    people.forEach(person => {
      // Group by sex
      groups.sex[person.sex].push(person.name);
  
      // Group by age
      if (person.age < 20) {
        groups.age.under20.push(person.name);
      } else {
        groups.age.older.push(person.name);
      }
  
      // Group by marital status
      groups.marriage[person.marital].push(person.name);
  
      // Group by social status
      groups.status[person.social].push(person.name);
    });
  
    return groups;
  }
  
  const people = [
    {
      name: "rizky",
      sex: "male",
      age: 10,
      marital: "single",
      social: "student"
    },
    {
      name: "novan",
      sex: "male",
      age: 25,
      marital: "married",
      social: "employee"
    },
    {
      name: "narnia",
      sex: "female",
      age: 10,
      marital: "single",
      social: "student"
    },
    {
      name: "firza",
      sex: "female",
      age: 100,
      marital: "married",
      social: "employee"
    },
    {
      name: "akbar",
      sex: "male",
      age: 20,
      marital: "single",
      social: "employee"
    }
  ];
  
  const groups = groupPeopleByAttributes(people);
  console.log(groups);