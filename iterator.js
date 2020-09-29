class Iterable {
	constructor(length) {
		this.length = length;
	}

	[Symbol.iterator](step = 0) {
		let length = this.length
		return ({
			next() {
				if (step < length) {
					let oneOrTwo = String(Math.round(Math.random()));
					let int = String(Math.floor(Math.random() * 10));
					let num = `${oneOrTwo}.${int}${int}`;
					step++;
					return {
						value: num,
						done: false
					};
				} else return {
					value: undefined,
					done: true
				};
			}
		});
	}
}

const it = new Iterable(5);
console.log([...it]);
