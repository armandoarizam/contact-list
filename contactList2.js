let contactList = [
    (contact1 = {
        id: 1127616134,
        names: "Armando",
        lastnames: "Ariza Martinez",
        phone: 3007944730,
        locations: "",
            city: "Bogota",
            address: "Calle 57a 35a 08",
    }),
]

function addContact(
    id,
    names,
    lastnames,
    phone,
    locations,
    city,
    address
){
    return {id,names,lastnames,phone,locations,city,address};
}

function deleteContact(pos,quantyContact) {
    contactList.splice(pos, quantyContact);
}

function viewList() {
    console.log(contactList)
    
}

function modifyContact(posmodify,quantyContact,modifyContact){
    contactList.splice(posmodify,quantyContact,modifyContact);
}

contactList.push(
    addContact(
        1127616709,
        "Miguel",
        "Vergara",
        3154669992,
        " ",
        "Bogota",
        "Calle 57a 35a 08"
    )
);

contactList.push(
    addContact(
        1127616711,
        "Junior",
        "Ariza",
        3154663284,
        " ",
        "Bogota",
        "Calle 57a 35a 08"
    )
);

contactList.push(
    addContact(
        1127616715,
        "Don Mauricio",
        "Abogado",
        3154662603,
        " ",
        "Bogota",
        "Calle 57a 35a 08"
    )
);

viewList();

modifyContact(
    0,
    1,
    addContact(
        25466407,
        "Fabio",
        "Vega",
        3183360530,
        " ",
        "Zipaquira",
        "Diagonal 22a 35b 15"
    )
);




deleteContact (1,1);
viewList();
 
