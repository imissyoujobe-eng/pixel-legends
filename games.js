// The game list for the Nine-10-Doe Arcade menu.
// To add a game: put its file in games/ and add one line below.
// key = the name its best score is saved under (for My Scores); kind = how that score reads (time, cs, mins, par, wins, fights, cup).
window.ARCADE_TOTAL = 31;
window.ARCADE_GAMES = [
  { id: 'pipe-hopper', name: 'Pipe Hopper', genre: 'Platform', tag: 'Run, jump and stomp to the flag', key: 'pipehopper' },
  { id: 'hollow-crown', name: 'Hollow Crown', genre: 'Adventure', tag: 'Sword quest for the lost crown', key: 'hollowcrown', kind: 'time' },
  { id: 'kart-clash', name: 'Kart Clash', genre: 'Racing', tag: '3D kart cup with items', key: 'kartclash', kind: 'cup' },
  { id: 'wing-squadron', name: 'Wing Squadron', genre: 'Action', tag: '3D space dogfights', key: 'wing' },
  { id: 'sky-tail', name: 'Sky Tail', genre: 'Platform', tag: 'World map, tail flight', key: 'skytail' },
  { id: 'hyper-rail', name: 'Hyper Rail', genre: 'Racing', tag: 'Futuristic hover Grand Prix', key: 'hyperrail', kind: 'cup' },
  { id: 'agent-zero', name: 'Agent Zero', genre: 'Action', tag: 'First-person spy missions', key: 'agentzero', kind: 'time' },
  { id: 'saddle-up', name: 'Saddle Up', genre: 'Platform', tag: 'Ride your dino buddy', key: 'saddleup' },
  { id: 'knockout-kid', name: 'Knockout Kid', genre: 'Action', tag: 'Box your way to the title', key: 'knockout', kind: 'fights' },
  { id: 'vine-kings', name: 'Vine Kings', genre: 'Platform', tag: 'Jungle romp and mine carts', key: 'vinekings' },
  { id: 'deep-core', name: 'Deep Core', genre: 'Adventure', tag: 'Explore the alien base', key: 'deepcore', kind: 'time' },
  { id: 'jungle-fire', name: 'Jungle Fire', genre: 'Action', tag: 'Run-and-gun commando', key: 'junglefire' },
  { id: 'girder-gauntlet', name: 'Girder Gauntlet', genre: 'Platform', tag: 'Climb past rolling barrels', key: 'girder' },
  { id: 'three-day-tide', name: 'Three Day Tide', genre: 'Adventure', tag: 'Save the town in three days', key: 'threeday', kind: 'mins' },
  { id: 'cloud-castle', name: 'Cloud Castle 3D', genre: 'Platform', tag: '3D sky island star hunt', key: 'cloudcastle', kind: 'time' },
  { id: 'fairway-nine', name: 'Fairway Nine', genre: 'Sports', tag: 'Nine holes, wind and water', key: 'fairway9', kind: 'par' },
  { id: 'ramp-rally', name: 'Ramp Rally', genre: 'Racing', tag: '3D motocross, tricks and wrecks', key: 'ramprally3d', kind: 'cs' },
  { id: 'diamond-dash', name: 'Diamond Dash', genre: 'Sports', tag: 'Pitch, swing and win in three innings', key: 'diamond-wins', kind: 'wins' },
  { id: 'powder-peak', name: 'Powder Peak', genre: 'Sports', tag: 'Snowboard spins, grabs and rails', key: 'powderpeak' },
  { id: 'kickflip-city', name: 'Kickflip City', genre: 'Sports', tag: '3D skate park, flips and grinds', key: 'kickflip3d' },
  { id: 'barnyard-brigade', name: 'Barnyard Brigade', genre: 'Action', tag: '3D turn-based pigs vs goats', key: 'barnyard-wins', kind: 'wins' },
  { id: 'shadow-strike', name: "Shadow Strike", genre: 'Action', tag: "Ninja stars and hostage rescues", key: 'shadowstrike' },
  { id: 'barbarian-blade', name: "Barbarian Blade", genre: 'Platform', tag: "Sword quest through lava realms", key: 'barbarianblade' },
  { id: 'knight-fright', name: "Knight Fright", genre: 'Platform', tag: "Lose the armor, keep fighting", key: 'knightfright' },
  { id: 'commando-sights', name: "Commando Sights", genre: 'Action', tag: "Crosshair shooting gallery", key: 'commandosights' },
  { id: 'cube-pop', name: "Cube Pop", genre: 'Puzzle', tag: "Pop color groups, build rockets", key: 'cubepop' },
  { id: 'fling-frenzy', name: "Fling Frenzy", genre: 'Puzzle', tag: "Slingshot Puffs at wobbly forts", key: 'flingfrenzy' },
  { id: 'juice-slash', name: "Juice Slash", genre: 'Action', tag: "Swipe to slice, dodge the bombs", key: 'juiceslash' },
  { id: 'puff-pal', name: "Puff Pal", genre: 'Platform', tag: "Float, inhale and copy powers", key: 'puffpal' },
  { id: 'doodle-dino', name: "Doodle Dino", genre: 'Platform', tag: "Gulp critters, throw eggs, save the storybook", key: 'doodledino' },
  { id: 'claw-fury', name: "Claw Fury", genre: 'Action', tag: "Claw combos vs a robot army", key: 'clawfury' }
];
