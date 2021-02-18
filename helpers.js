// hide an element (e.g. closing a banner)
var hideElem = function(elem) {
	document.getElementById(elem).style.display = 'none';
};

// pseudo-href (e.g. apply hyperlink to a <td> element)
var navi = function(path) {
	location.href = path;
}

// vertical show/hide toggle via button
var displayToggleButton = function(toggleElem, toggleButton) {
	button = document.getElementById(toggleButton);
	elem = document.getElementById(toggleElem);
	state = elem.style.display;
	if (state === "none") {
		elem.style.display = "inline-block";
		button.innerHTML = "&#9650;";
	} else {
		elem.style.display = "none";
		button.innerHTML = "&#9660;";
	}
}

// countdown with start and end events
var countDown = function(time, eventStart, eventEnd, timeDisplayElem) {
    eventStart();
    document.getElementById(timeDisplayElem).innerHTML = time;
    let cd = setInterval(function() {
        time -= 1;
		document.getElementById(timeDisplayElem).innerHTML = time;
        if (time <= 0) {
            eventEnd();
            clearInterval(cd);
        }
	}, 1000);
}

// get random item from array
var getRandomItem = function(array) {
    return array[Math.floor(Math.random()*(array.length-1))];
}

// get values by classname
var getValuesByClass = function(className) {
	let elems = document.getElementsByClassName(className);
	let vals = [];
	for (a=0; a<elems.length; a+=1) {
		vals.push(elems[a].value);
	}
	return vals;
}

// append HTML to elemID
var appendHTMLToElem = function(HTMLString, elemId) {
	document.getElementById(elemId).insertAdjacentHTML('beforeend', HTMLString);
}

// remove last elem by class name
var removeLastElemByClassName = function(className) {
	let elems = document.getElementsByClassName(className);
	if (elems.length == 0) {
		return;
	}
	elems[elems.length-1].remove();
}

// get difference between now and a date in days
var getDateDiff = function(date) {
	let d = Date.now();
	return Math.abs(Math.floor((date - d)/(1000*60*60*24)));
}

// checkbox toggle event
var checkboxToggleEvent = function(elem, checkEvent, uncheckedEvent, params) {
	if (elem.checked) { checkEvent(params) }
	else { uncheckedEvent(params) }
}

// change bg and text-color of element
var changeElemColor = function(elemId, textColor, bgColor) {
	let elem = document.getElementById(elemId);
	elem.style.color = textColor;
	elem.style.backgroundColor = bgColor;
}

// check or uncheck all selected elements
var checkUncheckElements = function(elems, bool) {
	for (a=0; a<elems.length; a+=1) { elems[a].checked = bool; }
}

// return all checked elements
var getCheckedElements = function(elems) {
	let r = [];
	for (a=0; a<elems.length; a+=1) { if (elems[a].checked) { r.push(elems[a]); }}
	return r;
}

// output alert window to verify action (e.g. alertVerify(event, message))
var confirmEvent = function(event, message, params) {
    if (window.confirm(message)) { event(params) };
}

// reset values back to default values on an HTMLCollection
var resetToDefault = function(elems, defaults) {
    for (a=0; a<elems.lenght; a+=1) {
        elems[a].value = defaults[a];
    }
}

// save value of element to localStorage
var saveToStorage = function(elem, name, value) {
    window.localStorage.setItem(elem.name, elem.value);
}

// populate a select element with options
var addOptions = function(selectElem, optionsList) {
    let HTMLstring = "";
    for (option in optionsList) {
        HTMLstring += "<select name='"+option+"' value='"+optionsList[option]+"'>"+optionsList[option]+"</select>";
    })
    selectElem.innerHTML = HTMLstring;
}
