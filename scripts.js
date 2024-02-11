
/*
Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.

let modelArray [];

*/



class Craft {
    constructor(name, type) {
        this.name=name
        this.type=type
    }
    
    describe() {
        return `${this.name} is a ${this.type} type UAS`
    }
}


class Fleet {
    constructor(fleet) {
        this.fleet = fleet
        this.crafts = []
    }

    addCraft(craft) {
        if (craft instanceof Craft) {
            this.crafts.push(craft);
        } else {
            throw new Error (`You can only add an instance of Craft.  Argument is not a Craft: ${craft}`);
        }
    }

    describe() {
        return `${this.name} has ${this.crafts.length} crafts` ;
    }
}

class Menu {
    constructor() {
        this.fleets = [];
        this.selectedFleet = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createFleet();
                    break;
                case '2':
                    this.viewFleet();
                    break
                case '3':
                    this.deleteFleet();
                    break
                case '4':
                    this.displayFleets();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!')
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Fleet
        2) View Fleet
        3) Delete Fleet
        4) Display All Fleets
        `);
    }

    showFleetMenuOptions(fleetInfo) {
        return prompt(`
            0) back
            1) Create Craft
            2) Delete Craft
            ---------------------
            ${fleetInfo}
        `);
    }

    displayFleets() {
        let fleetString = '';
        for (let i = 0; i < this.fleets.length; i++) {
            fleetString += i + ') ' +this.fleets[i].name + '\n';
        }
        alert(fleetString);
    }

    createFleet() {
        let name = prompt('Enter name for the new Fleet');
        this.fleets.push(new Fleet(name));
    }

    viewFleet() {
        let index = prompt('Enter the Index of the Fleet you wish to view:');
        if (index > -1 && index < this.fleets.length) {
            this.selectedFleet = this.fleets[index];
            let description = 'Fleet Name: ' + this.selectedFleet.name + '\n';
            for(let i = 0; i < this.selectedFleet.crafts.length; i++) {
                description += i + ') ' + this.selectedFleet.crafts[i].name + ' - ' + this.selectedFleet.crafts[i].type + '\n';
            }
            let selection = this.showFleetMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCraft();
                    break
                case '2':
                    this.deleteCraft();
            }
        }
    }

deleteFleet() {
    let index = prompt('Enter the index of the Fleet you Wish to delete: ');
    if (index > -1 && index < this.fleets.length) {
        this.fleets.splice(index, 1);
    }
}

createCraft() {
    let name = prompt('Enter name for new Craft: ')
    let type = prompt('Enter type of UAS: ')
    this.selectedFleet.crafts.push(new Craft(name, type));
}

deleteCraft() {
    let index = prompt('Enter the index of the Craft you Wish to delete: ');
    if (index > -1 && index < this.selectedFleet.crafts.length) {
        this.selectedFleet.crafts.splice(index, 1);
    }
}

}

let menu = new Menu();
menu.start();











