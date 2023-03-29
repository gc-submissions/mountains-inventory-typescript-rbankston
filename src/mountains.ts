export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [];

mountains.push({"name": "Kilimanjaro", "height": 19341});
mountains.push({"name": "Everest", "height": 29029});
mountains.push({"name": "Denali", "height": 20310});

export function findNameOfTallestMountain(mountains: Mountain[]): string {
    let largestMountain = 0; 
    for (let i = 0; i < mountains.length; i++) {
        if (mountains[i].height >= mountains[largestMountain].height) {
            largestMountain = i
        }
    }
    return mountains[largestMountain].name;
}

console.log(findNameOfTallestMountain(mountains));

 

