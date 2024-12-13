// file ini untuk melakukan setup table ke dalam database
const pool = require("./connection");

let createTableMenus = `
  CREATE TABLE Menus (
  "id" SERIAL PRIMARY KEY, 
  "title" VARCHAR(50),
  
  "imageUrl" TEXT, 
  "kategori" VARCHAR(10)
);
`;

// koneksi ke database => asynchronous

async function runSetup() {
  try {
    await pool.query(createTableMenus);
    console.log("Success setup table menus");
  } catch (error) {
    console.log(error);
  }
}

runSetup();
