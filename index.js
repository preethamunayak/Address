const mongoose = require("mongoose");
const student = require("./user");

mongoose.connect("mongodb://localhost/student");

// run();
// async function run() {
//   try {
//     const preetham = await student.create({
//       name: "preetham",
//       DOB: new Date("2000-07-21"),
//       phoneNumber: 8762133533,
//       addresses: { address: "abc" },
//       //   blood_group: "A+ve",
//     });
//     console.log(preetham);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

async function createNew(name, dob, phnum, addrs) {
  try {
    await student.create({
      name,
      DOB: new Date(dob),
      phoneNumber: phnum,
      addresses: { address: addrs },
    });
    // console.log(newuser);
  } catch (e) {
    console.log(e.message);
  }
}

async function insertOne(id) {
  try {
    await student.updateOne(
      { _id: `${id}` },
      { $push: { addresses: { address: "rukmini" } } }
    );
  } catch (e) {
    console.log(e.message);
  }
}

async function deleteOne(id) {
  try {
    await student.updateOne(
      { _id: `${id}` },
      { $pull: { addresses: { address: "rukmini" } } }
    );
  } catch (e) {
    console.log(e.message);
  }
}

async function deleteAll() {
  try {
    await student.deleteMany({});
  } catch (e) {
    console.log(e.message);
  }
}

async function editAddress(id) {
  try {
    await student.updateOne(
      { "addresses._id": `${id}` },
      { "addresses.$.address": "rukmini" }
    );
  } catch (e) {
    console.log(e.message);
  }
}

async function updateOneEle() {
  try {
    // const v = await student
    //   .find({ _id: "6321abdeb56e2ef3ce1ef32e" })
    //   .update({ name: "preetham" }, { addresses: { address: "new address2" } });
    // console.log(v);
    const a = await student.updateOne(
      { "addresses._id": "6321b2431b1ddc0c7940f4c7" },
      { $set: { "addresses.$.address": "newwww aaaaaadddd" } }
    );
    console.log(a);
  } catch (e) {
    console.log(e.message);
  }
}
//!creating new docs
// createNew("preetham", "2000-07-21", 8762133593, "asdfg");
// createNew("vineeth", "2001-02-25", 8123456793, "qwerty");
// createNew("prasad", "2000-03-22", 1726354829, "tyyuui");
// createNew("sandesh", "2000-02-23", 1028364522, "weffv");
// createNew("sumukh", "2000-04-24", 7463528193, "sdgesbv");
// createNew("dhamini", "2000-05-20", 3947562910, "awdfafsedad");
// createNew("keerthika", "2000-06-11", 2938472536, "asdtge45gdad");
// createNew("shravya", "2000-07-31", 3048271639, "adewf4wtgdfad");
// createNew("medini", "2000-08-01", 4023937253, "abdfgw4edad");
// createNew("sameeksha", "2000-09-01", 1029351920, "adsgfwerfd");
//!address changing queries
// createNew("insertone", "2010-01-02", 7617181290, "test address1");
// createNew("insertone", "2010-02-02", 7617671290, "test address2");
// createNew("insertone", "2010-03-02", 7617361290, "test address3");
// createNew("insertone", "2010-04-02", 7617181266, "test address4");
// createNew("insertone", "2010-05-02", 1298354829, "test address5");

// deleteAll();

// updateOneEle();
