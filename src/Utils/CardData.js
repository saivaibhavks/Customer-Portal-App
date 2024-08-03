const uniqueTitles = [
  "CEO",
  "CTO",
  "CFO",
  "COO",
  "CMO",
  "VP of Sales",
  "VP of Engineering",
  "VP of Marketing",
  "Director of Operations",
  "Director of Finance",
];

const uniqueAddresses = [
  "123 Main St, New York, NY",
  "456 Elm St, Los Angeles, CA",
  "789 Maple Ave, Chicago, IL",
  "101 Oak St, Houston, TX",
  "202 Pine St, Phoenix, AZ",
  "303 Cedar St, Philadelphia, PA",
  "404 Birch St, San Antonio, TX",
  "505 Spruce St, San Diego, CA",
  "606 Willow St, Dallas, TX",
  "707 Aspen St, San Jose, CA",
];

const cardData = [];

for (let i = 1; i <= 1000; i++) {
  if (i <= 10) {
    cardData.push({
      name: `Customer ${i.toString().padStart(2, "0")}`,
      index: i,
      title: uniqueTitles[i - 1],
      address: uniqueAddresses[i - 1],
      description: `This is the unique description for Customer ${i}.`,
    });
  } else {
    cardData.push({
      name: `Customer ${i.toString().padStart(2, "0")}`,
      index: i,
      title: "Administrative Assistant",
      address: "Delhi",
      description: `This is the description for Customer ${i}. Each customer has a unique description to differentiate their placeholder text in the array.`,
    });
  }
}

export default cardData;
