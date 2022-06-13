function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runAdjustFontRoutine() {
  for(;;) {
    await sleep(250).then(() => {
		adjustFont()
	})
  }
}

function adjustFont() {
	Array.from(document.getElementsByClassName('row-content'))
	.forEach(function(row) {
		row.children.forEach(function(child) {
			child.style.fontSize = "23px";
		});
	});
}