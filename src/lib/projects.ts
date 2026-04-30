export type Project = {
  name: string;
  sector: "Commercial" | "Residential" | "Civil" | "Industrial" | "Fit-Out" | "Heritage";
  location: string;
  status: "current" | "completed";
  progress?: number;
  year?: string;
  image: string;
  client?: string;
  value?: string;
};

export const projects: Project[] = [
  { name: "Canary Wharf Mixed-Use Tower", sector: "Commercial", location: "London", status: "current", progress: 85, image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85", client: "Wharf Holdings", value: "£140M" },
  { name: "Northern Quarter Residential — Phase 2", sector: "Residential", location: "Manchester", status: "completed", year: "2024", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85", client: "Meridian Living", value: "£62M" },
  { name: "M62 Junction 26 Upgrade", sector: "Civil", location: "Yorkshire", status: "completed", year: "2023", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1200&q=85", client: "National Highways", value: "£48M" },
  { name: "BioTech Campus Build", sector: "Industrial", location: "Cambridge", status: "current", progress: 42, image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=85", client: "Cambridge BioPharma", value: "£95M" },
  { name: "Grand Hotel Restoration", sector: "Heritage", location: "Edinburgh", status: "completed", year: "2024", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85", client: "Caledonian Estates", value: "£28M" },
  { name: "Roca Manchester Gateway", sector: "Commercial", location: "Manchester", status: "current", progress: 34, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85", client: "Manchester City Council", value: "£78M" },
  { name: "Birmingham Innovation Quarter", sector: "Commercial", location: "Birmingham", status: "completed", year: "2025", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85", client: "Birmingham CC", value: "£92M" },
  { name: "Leeds Riverside Apartments", sector: "Residential", location: "Leeds", status: "current", progress: 58, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85", client: "Riverside Living", value: "£44M" },
  { name: "Tyne Crossing Bridge Works", sector: "Civil", location: "Newcastle", status: "current", progress: 22, image: "https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=1200&q=85", client: "National Highways", value: "£72M" },
  { name: "Solihull Logistics Park", sector: "Industrial", location: "Solihull", status: "completed", year: "2024", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=85", client: "Prologis UK", value: "£38M" },
  { name: "Mayfair Office Fit-Out", sector: "Fit-Out", location: "London", status: "completed", year: "2025", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85", client: "Confidential Hedge Fund", value: "£14M" },
  { name: "Bristol Town Hall Restoration", sector: "Heritage", location: "Bristol", status: "completed", year: "2023", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&q=85", client: "Bristol City Council", value: "£21M" },
  { name: "Sheffield Civic Plaza", sector: "Commercial", location: "Sheffield", status: "completed", year: "2024", image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=85", client: "Sheffield CC", value: "£55M" },
  { name: "Glasgow Quayside Living", sector: "Residential", location: "Glasgow", status: "current", progress: 71, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85", client: "Quayside Estates", value: "£68M" },
];
