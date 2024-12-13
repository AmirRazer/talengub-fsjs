const pool = require("./connection");
const data = require("./menus.json");

// let newData = data.map((el) => {
//   return `('${el.title}', ${el.releaseYear}, '${el.imageUrl}', '${el.genre}')`;
// });

// let newDataToInsert = newData.join(",");

// let seedDataQuery = `
//   INSERT INTO Movies ("title", "releaseYear", "imageUrl", "genre")
//   VALUES ${newDataToInsert}
// `;
let newData = data.map((el) => {
  return `('${el.title}', '${el.imageUrl}', '${el.kategori}')`;
});

let newDataToInsert = newData.join(",");

let seedDataQuery = `
  INSERT INTO Menus ("title", "imageUrl", "kategori")
  VALUES ${newDataToInsert}
`;

async function runSeed() {
  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table menu");
  } catch (error) {
    console.log(error);
  }
}

runSeed();
