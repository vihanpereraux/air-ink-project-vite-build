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

  d.push('Z')
  return d.join(' ')
}

document.addEventListener('DOMContentLoaded', (e) => {
	let points = [];
	const svg = document.querySelector('svg');
	const path = svg.querySelector('path');
	
	function render() {
		path.setAttribute('d', getSvgPathFromStroke(
            getStroke(points, {
              size: 16,
              thinning: 0.5,
              smoothing: 0.5,
              streamline: 0.5,
            })
          )
				);
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
	
	svg.addEventListener('pointerdown', handlePointerDown);
	svg.addEventListener('pointermove', handlePointerMove);
});