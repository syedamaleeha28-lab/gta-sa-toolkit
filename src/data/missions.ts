import type { Mission } from "@/types";

export const missions: Mission[] = [
  { id: "m1", title: "Big Smoke", region: "Los Santos", difficulty: "easy", tips: ["Follow the train", "Use a fast bike for the chase"], walkthrough: "Drive with Big Smoke to the Vinewood cemetery. After the cutscene, chase the train on a Sanchez or PCJ-600." },
  { id: "m2", title: "Ryder", region: "Los Santos", difficulty: "easy", tips: ["Stock up on armor", "Aim for the crates on foot"], walkthrough: "Meet Ryder at the pizza stack. Raid the National Guard depot for weapons crates." },
  { id: "m3", title: "Tagging Up Turf", region: "Los Santos", difficulty: "easy", tips: ["Spray tags quickly", "Watch for Ballas"], walkthrough: "Spray over all enemy gang tags in Los Santos to complete territory marking." },
  { id: "m4", title: "Cleaning the Hood", region: "Los Santos", difficulty: "medium", tips: ["Use drive-by", "Keep vehicle repaired"], walkthrough: "Clear crack dealers from Glen Park with Grove Street backup." },
  { id: "m5", title: "Drive-Thru", region: "Los Santos", difficulty: "medium", tips: ["Block enemy escape", "Use SMG drive-by"], walkthrough: "Chase Ballas who shot up the Johnson house through Los Santos streets." },
  { id: "m6", title: "Nines and AKs", region: "Los Santos", difficulty: "medium", tips: ["Recruit homies first", "Take cover in warehouse"], walkthrough: "Defend Ammu-Nation warehouse from Ballas assault with Sweet." },
  { id: "m7", title: "Drive-By", region: "Los Santos", difficulty: "medium", tips: ["Aim at red targets", "Don't destroy your car"], walkthrough: "Perform drive-bys on Ballas territory with recruited Grove members." },
  { id: "m8", title: "Sweet's Girl", region: "Los Santos", difficulty: "hard", tips: ["Use fast car", "Shoot car tires"], walkthrough: "Rescue Sweet's girlfriend from Motel kidnappers before she dies." },
  { id: "m9", title: "Cesar Vialpando", region: "Los Santos", difficulty: "medium", tips: ["Practice lowrider hydraulics", "Match rhythm arrows"], walkthrough: "Win lowrider competition against Cesar at the beach meeting." },
  { id: "m10", title: "High Stakes, Low Rider", region: "Los Santos", difficulty: "hard", tips: ["Upgrade hydraulics", "Perfect timing on bounce"], walkthrough: "Beat rival lowrider crew in a dance competition for territory respect." },
  { id: "m11", title: "OG Loc", region: "Los Santos", difficulty: "easy", tips: ["Steal rhyme book quickly", "Avoid police"], walkthrough: "Help OG Loc recover his rhyme book from freestyle rival." },
  { id: "m12", title: "Life's a Beach", region: "Los Santos", difficulty: "medium", tips: ["Win dance minigame", "Use sound van"], walkthrough: "Win dance battle and steal sound equipment van for OG Loc." },
  { id: "m13", title: "Madd Dogg's Rhymes", region: "Los Santos", difficulty: "medium", tips: ["Swim to yacht", "Escape on boat"], walkthrough: "Steal rhyme book from Madd Dogg's yacht party." },
  { id: "m14", title: "Management Issues", region: "Los Santos", difficulty: "hard", tips: ["Use chainsaw", "Pop tires on target car"], walkthrough: "Kill Madd Dogg's manager before he reaches the airport." },
  { id: "m15", title: "House Party", region: "Los Santos", difficulty: "easy", tips: ["Stock snacks", "Defend from attacks"], walkthrough: "Prepare Grove Street house party and defend from rival gang." },
  { id: "m16", title: "Burning Desire", region: "Los Santos", difficulty: "hard", tips: ["Rescue girl quickly", "Use fire truck path"], walkthrough: "Rescue girl from burning building in Vinewood." },
  { id: "m17", title: "Gray Imports", region: "Los Santos", difficulty: "hard", tips: ["Destroy crates", "Use Molotovs"], walkthrough: "Destroy illegal import crates at docks before shipment leaves." },
  { id: "m18", title: "Doberman", region: "Los Santos", difficulty: "medium", tips: ["Recruit max homies", "Take over Glen Park"], walkthrough: "Take over Glen Park territory from Ballas with full gang support." },
  { id: "m19", title: "Los Sepulcros", region: "Los Santos", difficulty: "hard", tips: ["Kill Kane at funeral", "Escape quickly"], walkthrough: "Attack Ballas funeral and eliminate Kane at Sepulcro cemetery." },
  { id: "m20", title: "Reuniting the Families", region: "Los Santos", difficulty: "hard", tips: ["Protect Sweet", "Use cover on bridge"], walkthrough: "Defend meeting between Grove and Varrios from SWAT assault." },
  { id: "m21", title: "The Green Sabre", region: "Los Santos", difficulty: "hard", tips: ["Cannot save Sweet", "Survive Ballas ambush"], walkthrough: "Discover betrayal; survive Ballas attack on Grove Street." },
  { id: "m22", title: "Badlands", region: "Countryside", difficulty: "medium", tips: ["Use camera", "Photograph girlfriend"], walkthrough: "Track and photograph Catalina's boyfriend in countryside." },
  { id: "m23", title: "First Date", region: "Countryside", difficulty: "medium", tips: ["Race carefully", "Don't flip vehicle"], walkthrough: "Race Catalina's rival to prove yourself in Badlands." },
  { id: "m24", title: "Local Liquor Store", region: "Countryside", difficulty: "medium", tips: ["Rob store fast", "Escape police"], walkthrough: "Rob liquor store with Catalina before cops arrive." },
  { id: "m25", title: "Small Town Bank", region: "Countryside", difficulty: "hard", tips: ["Keep hostages calm", "Use getaway route"], walkthrough: "Rob Palomino Creek bank with Catalina's crew." },
  { id: "m26", title: "Amphibious Assault", region: "San Fierro", difficulty: "hard", tips: ["Use boat", "Plant charges underwater"], walkthrough: "Destroy rival syndicate ships at San Fierro docks." },
  { id: "m27", title: "Pier 69", region: "San Fierro", difficulty: "hard", tips: ["Roof shootout", "Chase by boat"], walkthrough: "Assault Pier 69 and chase Ryder by boat." },
];

export function getMissionById(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}

export function getGuideId(missionId: string): string {
  return `mission-${missionId}`;
}
