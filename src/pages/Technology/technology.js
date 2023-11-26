import capsuleLandscape from '../../assets/technology/capsule-landscape.jpg';
import capsulePortrait from '../../assets/technology/capsule-portrait.jpg';
import portLandscape from '../../assets/technology/port-landscape.jpg';
import portPortrait from '../../assets/technology/port-portrait.jpg';
import vehicleLandscape from '../../assets/technology/vehicle-landscape.jpg';
import vehiclePortrait from '../../assets/technology/vehicle-portrait.jpg';

export const technology = {
  vehicle : {
    key: 'vehicle',
    term: 'launch vehicle',
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`,
    portraitImg: vehiclePortrait,
    landscapeImg: vehicleLandscape,
  },
  port: {
    key: 'port',
    term: 'spaceport',
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.`,
    portraitImg: portPortrait,
    landscapeImg: portLandscape
  },
  capsule: {
    key: 'capsule',
    term: 'space capsule',
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`,
    portraitImg: capsulePortrait,
    landscapeImg: capsuleLandscape,
  }
}