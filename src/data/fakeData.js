export const data = {
  regions: [
    { id: 1, name: 'North' },
    { id: 2, name: 'Sharon' },
    { id: 3, name: 'Gush Dan' },
    { id: 4, name: 'Jerusalem Area' },
    { id: 5, name: 'Shfela' },
    { id: 6, name: 'Negev' },
    { id: 7, name: 'Arava' }
  ],
  cities: [
    { id: 1, regionId: 1, name: 'Ako' },
    { id: 2, regionId: 1, name: 'Nahariya' },
    { id: 3, regionId: 1, name: 'Afula' },
    { id: 4, regionId: 1, name: 'Tveria' },
    { id: 5, regionId: 1, name: 'Haifa' },
    { id: 6, regionId: 2, name: 'Kfar Saba' },
    { id: 7, regionId: 2, name: 'Natanya' },
    { id: 8, regionId: 2, name: 'Raanana' },
    { id: 9, regionId: 2, name: 'Herzeliya' },
    { id: 10, regionId: 2, name: 'Glilot' },
    { id: 11, regionId: 3, name: 'Tel Aviv' },
    { id: 12, regionId: 3, name: 'Rishon LeZion' },
    { id: 13, regionId: 3, name: 'Holon' },
    { id: 14, regionId: 3, name: 'Petah Tikvah' },
    { id: 15, regionId: 3, name: 'Ramat Gan' },
    { id: 16, regionId: 4, name: 'Jerusalem' },
    { id: 17, regionId: 4, name: 'Bet Shemesh' },
    { id: 18, regionId: 4, name: 'Maale Edomim' },
    { id: 19, regionId: 4, name: 'Nokdim' },
    { id: 20, regionId: 4, name: 'Adam' },
    { id: 21, regionId: 5, name: 'Ramla' },
    { id: 22, regionId: 5, name: 'Lod' },
    { id: 23, regionId: 5, name: 'Matzliah' },
    { id: 24, regionId: 5, name: 'Rehovot' },
    { id: 25, regionId: 5, name: 'Nes Ziona' },
    { id: 26, regionId: 6, name: 'Beer Sheva' },
    { id: 27, regionId: 6, name: 'Sderot' },
    { id: 28, regionId: 6, name: 'Netivot' },
    { id: 29, regionId: 6, name: 'Mishmar Hanegev' },
    { id: 30, regionId: 7, name: 'Eilat' },
    { id: 31, regionId: 7, name: 'Beer Ora' },
    { id: 32, regionId: 7, name: 'Eilot' }
  ],
  houseTypes: [
    { id: 1, name: 'Apartment', code: 'apartment' },
    { id: 2, name: 'Garden Apartment', code: 'garden' },
    { id: 3, name: 'Villa', code: 'villa' },
    { id: 4, name: 'Penthouse', code: 'penthouse' },
    { id: 5, name: 'Residential Unit', code: 'unit' }
  ],
  whyus: [
    { id: 1, title: 'Experience', description: 'Our company is one of the oldest real estate companies, servicing clients for more than 25 years.', imageUrl: 'images/whyus/experience.png' },
    { id: 2, title: 'Wide spread', description: 'Our agents are spread across the country, from North to South, West to East.', imageUrl: 'images/whyus/spread.png' },
    { id: 3, title: 'Large data', description: 'We have a large database of homes, if you are looking to buy or rent we got you covered.', imageUrl: 'images/whyus/data.png' },
    { id: 4, title: 'Great service', description: 'Customer services are very important for us. This is the reason we are in business for this long.', imageUrl: 'images/whyus/service.png' }
  ],
  testimonials: [
    { id: 1, name: 'First and last', city: 'Some city', profileImg: 'images/testimonials/profile.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' },
    { id: 2, name: 'First and last', city: 'Some city', profileImg: 'images/testimonials/profile.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' },
    { id: 3, name: 'First and last', city: 'Some city', profileImg: 'images/testimonials/profile.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' },
    { id: 4, name: 'First and last', city: 'Some city', profileImg: 'images/testimonials/profile.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' },
  ],
  services: [
    { id: 1, imageUrl: 'images/services/advisory.jpg', title: 'Advisory services', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' },
    { id: 2, imageUrl: 'images/services/propertyManagement.jpg', title: 'Property management', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' },
    { id: 3, imageUrl: 'images/services/evaluation.jpg', title: 'Evaluation services', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' },
    { id: 4, imageUrl: 'images/services/projectManagement.jpg', title: 'Project management', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur debitis distinctio dolorum eos eveniet iure necessitatibus nisi odit, provident quo repellendus similique temporibus, vitae voluptate. Adipisci labore tempora veniam?' }
  ],
  agents: [
    { id: 1, name: 'Main office' },
    { id: 2, name: 'Zion Agent' },
    { id: 3, name: 'Coral Agent' },
    { id: 4, name: 'Top Agent' },
    { id: 5, name: 'Slow Agent' }
  ]
}

/*

 */