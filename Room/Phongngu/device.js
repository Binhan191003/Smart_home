// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2ndexTb4ORxTaC-AAvoKlTK68fGuD3yE",
    authDomain: "ttiot-binhan.firebaseapp.com",
    projectId: "ttiot-binhan",
    storageBucket: "ttiot-binhan.firebasestorage.app",
    messagingSenderId: "728307593444",
    appId: "1:728307593444:web:afc0cad42b7ecdcc227cf1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = firebase.database();

const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
database.ref("/TT_IoT3/temp").on("value", function (snapshot){
    let a = snapshot.val();
    temp.innerHTML = a;
    temp2.innerHTML = a;
    console.log(a);
}) 

const humid = document.getElementById("humid");
database.ref("/TT_IoT3/humid").on("value", function (snapshot){
    let b = snapshot.val();
    humid.innerHTML = b;
    console.log(b);
})

const air = document.getElementById("air");
database.ref("/TT_IoT3/air").on("value", function (snapshot){
    let c = snapshot.val();
    air.innerHTML = c;
    console.log(c);
}) 

const pm = document.getElementById("pm");
database.ref("/TT_IoT3/pm").on("value", function (snapshot){
    let d = snapshot.val();
    pm.innerHTML = d;
    console.log(d);
})


const sw_01 = document.getElementById("sw_01");
const sw_02 = document.getElementById("sw_02");
const sw_03 = document.getElementById("sw_03");
const sw_04 = document.getElementById("sw_04");
const sw_05 = document.getElementById("sw_05");
const sw_06 = document.getElementById("sw_06");

const dev_01 = document.getElementById("dev_01");
const dev_02 = document.getElementById("dev_02");
const dev_03 = document.getElementById("dev_03");
const dev_04 = document.getElementById("dev_04");
const dev_05 = document.getElementById("dev_05");
const dev_06 = document.getElementById("dev_06");

// Lắng nghe giá trị từ Firebase và cập nhật trạng thái
database.ref("/TT_IoT3/TV").on("value", function (snapshot) {
    let a = snapshot.val();
    if (a == 0) {
        dev_01.style.backgroundColor = "#252530"; // Thay bằng màu nền mặc định
        sw_01.checked = false;
    } else {
        dev_01.style.backgroundColor = "#5edcb5"; // Thay bằng màu chủ đạo
        sw_01.checked = true;
    }
});

database.ref("/TT_IoT3/Wifi").on("value", function (snapshot) {
    let a = snapshot.val();
    if (a == 0) {
        dev_02.style.backgroundColor = "#252530"; // Thay bằng màu nền mặc định
        sw_02.checked = false;
    } else {
        dev_02.style.backgroundColor = "#5edcb5"; // Thay bằng màu chủ đạo
        sw_02.checked = true;
    }
});

database.ref("/TT_IoT3/AC").on("value", function (snapshot) {
    let a = snapshot.val();
    if (a == 0) {
        dev_03.style.backgroundColor = "#252530"; // Thay bằng màu nền mặc định
        sw_03.checked = false;
    } else {
        dev_03.style.backgroundColor = "#5edcb5"; // Thay bằng màu chủ đạo
        sw_03.checked = true;
    }
});

database.ref("/TT_IoT3/Speaker").on("value", function (snapshot) {
    let a = snapshot.val();
    if (a == 0) {
        dev_04.style.backgroundColor = "#252530"; // Thay bằng màu nền mặc định
        sw_04.checked = false;
    } else {
        dev_04.style.backgroundColor = "#5edcb5"; // Thay bằng màu chủ đạo
        sw_04.checked = true;
    }
});

database.ref("/TT_IoT3/Lamp").on("value", function (snapshot) {
    let a = snapshot.val();
    if (a == 0) {
        dev_05.style.backgroundColor = "#252530"; // Thay bằng màu nền mặc định
        sw_05.checked = false;
    } else {
        dev_05.style.backgroundColor = "#5edcb5"; // Thay bằng màu chủ đạo
        sw_05.checked = true;
    }
});

database.ref("/TT_IoT3/Alarm").on("value", function (snapshot) {
    let a = snapshot.val();
    if (a == 0) {
        dev_06.style.backgroundColor = "#252530"; // Thay bằng màu nền mặc định
        sw_06.checked = false;
    } else {
        dev_06.style.backgroundColor = "#5edcb5"; // Thay bằng màu chủ đạo
        sw_06.checked = true;
    }
});

// Xử lý sự kiện onclick cho từng switch
sw_01.onclick = function () {
    if (sw_01.checked) {
        console.log("true");
        dev_01.style.backgroundColor = "#5edcb5";
        database.ref("/TT_IoT3").update({ "TV": 1 });
    } else {
        console.log("false");
        dev_01.style.backgroundColor = "#252530";
        database.ref("/TT_IoT3").update({ "TV": 0 });
    }
};

sw_02.onclick = function () {
    if (sw_02.checked) {
        console.log("true");
        dev_02.style.backgroundColor = "#5edcb5";
        database.ref("/TT_IoT3").update({ "Wifi": 1 });
    } else {
        console.log("false");
        dev_02.style.backgroundColor = "#252530";
        database.ref("/TT_IoT3").update({ "Wifi": 0 });
    }
};

sw_03.onclick = function () {
    if (sw_03.checked) {
        console.log("true");
        dev_03.style.backgroundColor = "#5edcb5";
        database.ref("/TT_IoT3").update({ "AC": 1 });
    } else {
        console.log("false");
        dev_03.style.backgroundColor = "#252530";
        database.ref("/TT_IoT3").update({ "AC": 0 });
    }
};

sw_04.onclick = function () {
    if (sw_04.checked) {
        console.log("true");
        dev_04.style.backgroundColor = "#5edcb5";
        database.ref("/TT_IoT3").update({ "Speaker": 1 });
    } else {
        console.log("false");
        dev_04.style.backgroundColor = "#252530";
        database.ref("/TT_IoT3").update({ "Speaker": 0 });
    }
};

sw_05.onclick = function () {
    if (sw_05.checked) {
        console.log("true");
        dev_05.style.backgroundColor = "#5edcb5";
        database.ref("/TT_IoT3").update({ "Lamp": 1 });
    } else {
        console.log("false");
        dev_05.style.backgroundColor = "#252530";
        database.ref("/TT_IoT3").update({ "Lamp": 0 });
    }
};

sw_06.onclick = function () {
    if (sw_06.checked) {
        console.log("true");
        dev_06.style.backgroundColor = "#5edcb5";
        database.ref("/TT_IoT3").update({ "Alarm": 1 });
    } else {
        console.log("false");
        dev_06.style.backgroundColor = "#252530";
        database.ref("/TT_IoT3").update({ "Alarm": 0 });
    }
}