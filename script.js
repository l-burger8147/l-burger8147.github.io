// document.body.style.backgroundColor = "black";

const secretCells = new Array(["25","30","55"])


function assignClassToCells(cellNumbers, newClass) {
    cellNumbers.forEach(findCells, newClass);
}

function findCells (index){
    var cell = document.getElementById('cell-' + index);
    // console.log(cell);
    if (cell) {
        // cell.style.background = "blue";
        cell.classList.add("secret-reveal")
    }
}

window.onload = assignClassToCells(["52", "53", "57", "60", "63", "64", "65", "66", "69", "70", "71", "75", "82", "83", "88", "89", "90", "93", "96", "101", "104", "107", "110", "113", "119", "122", "125", "131", "134", "137", "143", "146", "151", "157", "160", "163", "169", "172", "175", "181", "184", "187", "193", "195", "202", "203", "207", "208", "209", "210", "213", "214", "215", "216", "219", "220", "221", "225", "231", "234", "237", "243", "244", "254", "257", "260", "263", "269", "272", "275", "281", "284", "287", "293", "295", "304", "307", "310", "313", "319", "322", "325", "331", "334", "337", "343", "346", "351", "354", "357", "360", "363", "369", "372", "375", "381", "384", "387", "393", "396", "402", "403", "407", "410", "413", "414", "415", "416", "419", "422", "425", "426", "427", "428", "432", "433", "438", "439", "440", "443", "446"], "secret");
window.onload = console.log("CLUE 3: On the inspector tab, expand the <head>, then expand the <style> then double click inside that text. The next clue is near the top where it says 'secret-hidden'")