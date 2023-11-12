import commander from "../../assets/crew/commander.webp";
import engineer from "../../assets/crew/engineer.webp";
import pilot from "../../assets/crew/pilot.webp";
import specialist from "../../assets/crew/specialist.webp";

export const crew = {
  specialist: {
    key: 'specialist',
    designation: "mission specialist",
    name: "mark shuttleworth",
    description: ` Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.`
  },
  engineer: {
    key: 'engineer',
    designation: 'flight engineer',
    name: 'anousheh ansari',
    description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`
  },
  commander: {
    key: 'commander',
    designation: 'dougles hurley',
    description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`
  },
  pilot: {
    key: 'pilot',
    designation: "pilot",
    name: 'victor glover',
    description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer.`
  }

}