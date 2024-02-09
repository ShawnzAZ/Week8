
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
        4) display All Fleets
        `);
    }

    displayFleets() {
        let fleetString = '';  /* quotes? */
        for (let i = 0; i < this.teams.length; i++) {
            fleetString += i + ') ' +this.fleets[i].name + '\n';
        }
        alert(fleetString);
    }


}



/* 13:02 */











