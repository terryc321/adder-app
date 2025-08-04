
/* javscript */

/* global list of values to compute */
var nums = []
var tnums = []

function myFunction(p1, p2) {
  return p1 * p2;
}

function lastTnums() {
    if (tnums.length < 1 ){ return 0 } else {
	let nth = tnums.length - 1
	return tnums[nth]
    }
}


function add() {
    n = document.getElementById("amount")
    // save it
    let nv = n.value
    nums.push(0 + +nv)
    // running total
    tnums.push(0 + lastTnums() + +nv)
    
    // clear it
    n.value = ""
    // redisplay
    report()
}

function undo() {
    console.log("you clicked undo")
    // drop
    nums.pop()
    tnums.pop()
    // redisplay
    report()
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addRow(tableID , amount , total) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
    let newText = document.createTextNode('' + amount)
    newCell.appendChild(newText);

    // Insert a cell in the row at index 1
  let newCell2 = newRow.insertCell(1);

  // Append a text node to the cell
  let newText2 = document.createTextNode('' + total);
    newCell2.appendChild(newText2);

    
}

// // Call addRow() with the table's ID
// addRow("my-table");


function report (){
    var p = document.getElementById("mytable")

    console.log(p)
    
    // clear out child nodes
    removeAllChildNodes(p)
    
    // iterate over the amounts
    for (let i = 0; i < nums.length; i++) {
	
	// var li = document.createElement('li')
    	// p.appendChild(li)
	var nv = nums[i]
	var tot = tnums[i]
	// li.appendChild(document.createTextNode('' + nv))
	// li.appendChild(document.createTextNode('' + (2 * nv)))
	
	addRow("mytable" , +nv , +tot)
    	
    }
    
    // // make some sort of string to become the innerhtml ?
    // p.appendChild(document.createTextNode('Coffee'))
    // p.appendChild(document.createTextNode('Tea'))
    // p.appendChild(document.createTextNode('Milk'))
    // var li = document.createElement('li')
    // p.appendChild(li)
    // var n = document.getElementById('amount')
    // nv = n.value || 0 
    // li.appendChild(document.createTextNode('' + nv))
    // li.appendChild(document.createTextNode('' + (2 * nv)))
    // // clear amount
    // n.value = ""
    
    
}










