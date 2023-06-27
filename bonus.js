let contact1 = 
    {
        id: 1127616134,
        names: "Armando",
        lastnames: "Ariza Martinez",
        phone: 3007944730,
        locations: { 
            city: "Bogota",
            address: "Calle 57a 35a 08"}
    };
 let contactList = [  contact1  ]

 function addContact(id, names, lastnames, phone, city, address){
    let contact = {
        id, names, lastnames, phone, locations: {city,address}
    }
    contactList.push(contact);
};

addContact(1127616709,"Miguel","Vergara",3154669992,"Bogota","Calle 57a 35a 08")

function deleteContact(names){ 
    for(let index=0; index<contactList.length; index++)
    if(contactList[index].names === names){
        contactList.splice(index, 1);
    }
};

deleteContact("Armando");

function modifyContact(newid, names, newlastnames, newphone, newcity, newaddress){
    for(let index=0; index<contactList.length; index++){
        if(contactList[index].names === names){
            contactList[index] = {
                id: newid,
                names,
                lastnames: newlastnames,
                phone: newphone,
                locations:{
                    city: newcity,
                    address: newaddress
                }
            }
        }
    }
};
modifyContact(25466407,"Miguel","Perez",3154669996,"Medellin","TV 57a 35a 68");
console.log(contactList);




