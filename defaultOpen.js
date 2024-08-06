class socket {
  constructor() {
     // -- create a function that opens a ws and bind all the ws functions below -- //
    // By MazzaWest
   // defualt bypass
  }
}

wsopen() {
  var db = new DataView(new ArrayBuffer(5));
  db.setUint8(0, 254);
  db.setUint8(1, 6);
  db.setUint8(2, 0);
  db.setUint8(3, 0);
  db.setUint8(4, 0);
  // add a send function
  let bd = new DataView(new ArrayBuffer(5));
  bd.setUint8(0, 255);
  bd.setUint8(1, 1);
  bd.setUint8(2, 0);
  bd.setUint8(3, 0);
  bd.setUint8(4, 0);
  // add a send function
}

wsmessage(msg) {
  console.log(msg);
}

wserror(error) {
  console.log(error)
}

wsclose(e) {
  console.log(e);
}
