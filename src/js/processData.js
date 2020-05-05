import seatsData from "../assets/data.json";

export const getGreenRegionData = function() {
  const greenRegionData = {
    subRegion1: [],
    subRegion2: [],
    subRegion3: [],
  };
  if (seatsData && Object.keys(seatsData).length > 0) {
    const regionData = seatsData["greenRegion"];
    if (regionData && regionData.length > 0) {
      greenRegionData.subRegion1 = getSeatGroups(regionData.slice(0, 90));
      greenRegionData.subRegion2 = getSeatGroups(regionData.slice(90, 190));
      greenRegionData.subRegion3 = getSeatGroups(regionData.slice(190));
    }
  }
  return greenRegionData;
};

function getSeatGroups(seatsData) {
  const seatGroups = [];
  const groupNumber = Math.ceil(seatsData.length / 10);
  for (let i = 0; i < groupNumber; i++) {
    if (i === groupNumber - 1) {
      seatGroups.push(seatsData.slice(i * 10));
    } else {
      seatGroups.push(seatsData.slice(i * 10, (i + 1) * 10));
    }
  }
  return seatGroups;
}
