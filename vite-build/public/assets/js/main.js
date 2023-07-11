import { getStroke } from "https://cdn.skypack.dev/perfect-freehand"

// @ref https://github.com/steveruizok/perfect-freehand#rendering
function getSvgPathFromStroke(stroke) {
  if (!stroke.length) return ''

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length]
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
      return acc
    },
    ['M', ...stroke[0], 'Q']
  )

//   d.push('Z')
  return d.join(' ')
}

document.addEventListener('DOMContentLoaded', (e) => {
	let points = [];

	let lol = document.getElementsByClassName('lol')[0];
	let svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		lol.appendChild(svg2)
		let path2 = document.createElementNS('http://www.w3.org/2000/svg', "path");
		svg2.appendChild(path2);
		path2.setAttribute('stroke', "blue");

	// let svg = document.querySelector('svg');
	// const path = svg.querySelector('path');
	let pathz;
	let ff;
	let ssssss;
	function render() {
		

		pathz = getSvgPathFromStroke(
			getStroke(points, {
			size: 16,
			thinning: 0.5,
			smoothing: 0.5,
			streamline: 0.5,
			}))
		
		
		path2.setAttribute("d", pathz);
		
		console.log(path2.getAttribute('d'))
		console.log(" ")
		console.log(pathz)

	
		


		// path.setAttribute('d', getSvgPathFromStroke(
        //     getStroke(points, {
        //       size: 16,
        //       thinning: 0.5,
        //       smoothing: 0.5,
        //       streamline: 0.5,
        //     })
        //   )
		// );
	}
	
	function handlePointerDown(e) {
		points = [[e.pageX, e.pageY, e.pressure]];
		render();
	}

	function handlePointerMove(e) {
		if (e.buttons === 1) {
			points = [...points, [e.pageX, e.pageY, e.pressure]];
			render();
		}
	}
	
	document.getElementById('pal').addEventListener('pointerdown', handlePointerDown);
	document.getElementById('pal').addEventListener('pointermove', handlePointerMove);
});