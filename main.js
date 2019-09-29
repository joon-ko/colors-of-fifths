let keyToNote = new Map();
keyToNote.set('KeyA', 'C');
keyToNote.set('KeyW', 'Db');
keyToNote.set('KeyS', 'D');
keyToNote.set('KeyE', 'Eb');
keyToNote.set('KeyD', 'E');
keyToNote.set('KeyF', 'F');
keyToNote.set('KeyT', 'Gb');
keyToNote.set('KeyG', 'G');
keyToNote.set('KeyY', 'Ab');
keyToNote.set('KeyH', 'A');
keyToNote.set('KeyU', 'Bb');
keyToNote.set('KeyJ', 'B');

let sounds = new Map();
sounds.set('C', 'notes/C.mp3');
sounds.set('Db', 'notes/Db.mp3');
sounds.set('D', 'notes/D.mp3');
sounds.set('Eb', 'notes/Eb.mp3');
sounds.set('E', 'notes/E.mp3');
sounds.set('F', 'notes/F.mp3');
sounds.set('Gb', 'notes/Gb.mp3');
sounds.set('G', 'notes/G.mp3');
sounds.set('Ab', 'notes/Ab.mp3');
sounds.set('A', 'notes/A.mp3');
sounds.set('Bb', 'notes/Bb.mp3');
sounds.set('B', 'notes/B.mp3');

document.addEventListener('keydown', e => {
	play(keyToNote.get(e.code));
})

function play(note) {
	let noteDiv = document.createElement('div');
	noteDiv.classList.add(note);

	switch (note) {
		case 'C':
		case 'Gb':
			noteDiv.classList.add('note-y');
			noteDiv.style.left = `${randInt(0, window.innerWidth - 100)}px`;
			break;
		case 'Eb':
		case 'A':
			noteDiv.classList.add('note-x');
			noteDiv.style.bottom = `${randInt(0, window.innerHeight - 100)}px`;
			break;
		case 'Db':
		case 'F':
			noteDiv.classList.add('note-y');
			noteDiv.style.left = `${randInt(-.57*window.innerHeight, window.innerWidth)}px`;
			break;
		case 'G':
		case 'B':
			noteDiv.classList.add('note-y');
			noteDiv.style.left = `${randInt(0, window.innerWidth + .57*window.innerHeight)}px`;
			break;
		case 'Ab':
		case 'E':
			noteDiv.classList.add('note-x');
			noteDiv.style.bottom = `${randInt(-.57*window.innerWidth, window.innerHeight)}px`;
			break;
		case 'D':
		case 'Bb':
			noteDiv.classList.add('note-x');
			noteDiv.style.bottom = `${randInt(0, window.innerHeight + .57*window.innerWidth)}px`;
			break;
	}

	noteDiv.addEventListener('animationend', e => {
		noteDiv.remove();
	});

	let noteAudio = new Audio(sounds.get(note));
	noteAudio.play();

	document.getElementById('content').appendChild(noteDiv);
}

// return a random integer in [start, end)
function randInt(start, end) {
	return start + Math.floor(Math.random() * (end - start));
}