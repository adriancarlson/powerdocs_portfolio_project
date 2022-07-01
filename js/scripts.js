// print functionality
const prntBtn = document.getElementById('pd-prnt-btn');
prntBtn.addEventListener('click', function () {
	window.print();
});

//pdf functionality
const pdfBtn = document.getElementById('pd-pdf-btn');
const printableContent = document.getElementById('pd-content-area');
var opt = {
	margin: 0,
	filename: 'myfile.pdf',
	image: { type: 'jpeg', quality: 0.98 },
	jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
};
pdfBtn.addEventListener('click', function () {
	printableContent.classList.add('printable');
	html2pdf()
		.set(opt)
		.from(printableContent)
		.save()
		.outputPdf()
		.then(function (pdf) {
			printableContent.classList.remove('printable');
		});
});
